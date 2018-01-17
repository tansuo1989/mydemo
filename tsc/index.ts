/* 测试用： */
function log(str){
    console.log(str);
}


//1.强制类型
function test(name:String){
	console.log(name);
}
//test(111)//报错
test("111")//正确

//2.接口：相当于定义一个数据类型，不是json对象，不能直接使用
interface Person {
    firstName: string;
    lastName: string;
}

function setPerson(name:String){
	//Person.name="haha"//报错，因为Person中并没有定义name属性
	//Person.firstName=name;//不能这样使用，因为Person是一种数据类型，而不是一个数据对象
}
setPerson("hi");//

//3.通过class定义类
class Student {
    fullName: string;
    //通过constructor 创建构造函数,参数上添加public相当于给类添加了相应的属性middleInitial,LastName
    //没有加public的firstName 就不是Student的属性
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
var user = new Student("Jane", "M.", "User");

//console.log(user)
user.firstName="first"//不能这样给Student的对象user添加类中没有的属性

function greeter(person : Person) {
	//console.log(person.middleInitial)//这样直接设置或者读取Person接口中不存在的字段都是不允许的
	console.log(person) //但这样打印出的person是有fullName和middleInitial这两个Person不存在的字段的
    return "Hello, " + person.firstName + " " + person.lastName;
}
console.log(greeter(user));


//4.模版字符串
// var name="World !"; 不能定义变量名为name
var myname="World !!";
var str=`Hello ${myname
    +"time:"+new Date().getTime()
} `;
console.log(str);
/* 
基本规则：
 1.外面用``包住，是反引号，不是单引号
 2.${}内可以是任意的js表达式，支持换行
 3.`` 外面不要加引号
*/


//5.数组定义类型
// var arr:number[]=[1,2,3,4,5,"hi"];//定义为number类型的数据，元素不能有其它，比如不能有string类型的元素
//第一种方式：
var arr:number[]=[1,2,3,4,5];
console.log(arr);
//第二种方式：
var arr2:Array<number>=[1,2,3,4];
console.log(arr2);

//不限定义类型的定义方式：
var arr3=[1,2,3,"hi"];
console.log(arr3);

// var arr=[1,2,3,"hi"];//重新定义arr是允许的，但必须与原来的类型相同
var arr=[1,2,3];//这样可以
console.log(arr);

//6.元组：(Tuple) 可定义多种类型的数组
var tp:[string,number]=["hello",99];
console.log(tp);

// tp=[99,"hello"];//报错：第一个必须是string,第二个必须是number,第三个及后面的必须是string或number
// tp=["hi",99,"hehe",true];//error:true不是string|number
tp=["hi",88,"hehe"];
log(tp);

//7.枚举：enum
enum color {red=4,green=2,black=3,yellow};//定义时，可以赋值，如果不赋值，默认值是从1开始
log(color.red); //4
log(color.yellow);//4,第四个，默认是4,通过enum.key访问
log(color[4]) //yellow,通过[]的方式，可以访问到"key"，并且我们发现第四个yellow把第一个red替换了
let hi:color=color.green;
console.log(hi);


//8.any 类型：
let haha:any=99;
let str2=haha.toFixed(2);//toFiexed()只能操作number对象，但返回的是字符串 
log(str2);
log(str2.substr(0,2));
// log(haha.substr(0,2));//编译能通过，但运行时会报错，因为haha实际上是number类型，而number没有substr方法

let arr4:any[]=[1,2,3,"hello"];
log(arr4);


//9.类型断言
let str3:any=9494;
// log((<string>str3).substr(0,2));//可能通过编译，但运行会报错

// log((str3 as string).substr(0,2));//上同，另一种写法