var mongo=require("mongoose");
//mongo.connect('mongodb://localhost/test');
//一、连接mongodb:
var db = mongo.createConnection('localhost','test'); //创建一个数据库连接

db.on('error',function(e){
	console.log("链接错误：",e);
})
db.once("open",function(d){
	console.log("已经连接")
})

//二、认识mongoose中的Schema,model,entity:

//1.创建一个schema,相当于定义表结构,但它不能直接操作数据库
var schema=new mongo.Schema({
	name:'string',
	total:'number',//测试到后台需要添加字段
});
//console.log(schema);//其中的obj就是我们定义的字段这个对像
// new mongo.Schema(field,optiions);//第二个参数是一些配置，一般可以不需要配置


//2.创建一个模型，相当于新建一个col/table,可以直接操作数据库
//2.1 通过schema对象来创建
var model=db.model("haha",schema);
 //console.log(model);
//2.2直接传一个对象创建
var model2=db.model("hi",{name:"string",age:"number"});
//console.log(model2);
//这两种方式创建的模型应该是一样的，明显后者更为简单
//2.3 model的第二个参数不传会怎样？
// var model3=db.model("m3");
// console.log(model3);
//报错：缺少schema对象，也就是说第二种方式应该是自动创建schema对象
//2.4 测试一下:
var model4=db.model("m4",new mongo.Schema({name:"string",money:"number"}));
// console.log(model4);
//效果与前两种一样


//3.创建实体,相当于mongodb中的docuemnt,也相当于关系型数据库中的一行数据
// var entity=new model({ 
// 	name:"yy",
// 	age:18,
// })
//console.log(entity);
//一个对象，包括name和_id两个属性，但没有age,因为定义的schema中没有age字段
//另外它还包括了隐藏的属性与方法

//三、模型的CURL操作：
//1.增加数据：
var data={
	name:"hello",
	age:parseInt(Math.random()*100),
};
// model.create(data,function(err,res){
// 	//console.log(err,res);
// })

//2.删除数据：
// model.remove({name:"yy"},function(err,res){
// 	console.log("删除：",err,res.result);
// })

//3.修改数据：
//3.1更新一条
// model.update({name:"hello"},{$set:{name:"myhello"}},function(err,res){
// 	console.log("修改",err,res);
// })
//3.2更新多条：
// model.update({name:"hello"},{$set:{name:"many"}},{multi:true},function(err,res){
// 	console.log("修改多条",err,res);
// })

// entity.save(function(err,res){
// 	console.log("保存成功");
// })

// var test=db.model("gg",{});
// test.create({name:"hi"},function(err,res){
// 	console.log(err,res);
// })

//4.查询数据：
//4.1简单查询
// model.find({name:'hello'},function(err,res){
// 	console.log("查询：",err,res);
// })
//4.2查询所有：
// model.find(function(err,res){
// 	console.log("所有:",res);
// })

//4.3查询指定字段的结果
//先在Schema中添加total字段，然后添加一行数据
// model.create({name:"haha",total:parseInt(Math.random()*1000)},function(err,res){
// 	console.log("添加点：",err,res);
// })
//测试：

// model.find({name:"haha"},"name",function(err,res){
// 	console.log("指定字段：",err,res);
// })

//4.4使用正则查询：
// model.find({name:/h/i},function(err,res){
// 	console.log("正则：",err,res);
// })

//4.5区间查询：
// var where={total:{$gt:300}};
// var where={total:{$lte:102}};
// model.find(where,function(err,res){
// 	console.log("区间查询：",err,res);
// })

//4.6跳过指定数目的结果：
// model.find({},null,{skip:7},function(err,res){
// 	console.log("skip:",err,res);
// })
//4.7使用limit:
// model.find({},null,{skip:7,limit:2},function(err,res){
// 	console.log("limit:",err,res);
// })

//四、实体(entity)的CURL操作：
//1.新增：
// var data={
// 	name:"entity",
// 	total:new Date().getTime(),
// }
// var entity=new model(data);
// entity.save(function(err,res){
// 	console.log("实体新增：",err,res);
// })

//2.修改：
// model.findById("59746e1f9348623bd482862e",function(err,res){
// 	if(err){console.log("查询失败：",err);}
// 	console.log("结果：",res);
// 	res.name="newentity";
// 	res.save(function(err,res){
// 		console.log("保存成功：",err,res)
// 	})
// })
//这种方法修改数据很麻烦，主要体现在：
// 1)不能用find方法查找，因为它返回的不是实体，用findById返回的才是实体
// 2）因为第一点，你必须要知道_id的值才行
// 3)实体本身没有find或findById的方法，要模型才有，所以你需要先用模型去查询，再用实体的save方法去保存

//3.删除：
//实体有remove方法，但是与修改一样，必须先用模型查询到实体，然后再进行remove操作
//4.查询：
//实体应该没有查询的方法，没有看到
//结论：我不是知道什么时候需要使用实体？！

//五、使用query进行查询：
// 1.$where() 参数是一个js表达式
// model.$where("this.name=='haha'").exec(function(err,res){
// 	console.log(err,res);
// })

// model.$where("this.name.length==4").exec(function(err,res){
// 	console.log(err,res)
// })
//2.count()
// model.where({name:'hello'}).count().exec(function(err,res){
// 	console.log(err,res)
// })

//3.deleteMany()删除多个
// model.deleteMany({name:'hi'}).exec(function(err,res){
// 	console.log("删除多个：",err,res.result)
// })
//4.deleteOne()删除一个
//写着累，query中还有很多常用的方法，这里就不去列举了
//更多好用的方法，请查看官方文档：http://mongoosejs.com/docs/api.html#query_Query-where

//结论：相比模型的查询，query提供了更多更方便的方法，我更喜欢用query。


//参考：https://cnodejs.org/topic/504b4924e2b84515770103dd
//官方API文档：http://mongoosejs.com/docs/api.html
