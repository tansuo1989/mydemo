var fs=require("fs");
// var async=require("async");

//async的callback未生效，为什么？
/*exports.fileinfo=function(ro,files,fn){
	var i=0;
      async.map(files,function(item,callback){
	      	 fs.stat(ro+item,function(err,re){
	        	if(!err){
	        		item['info']=re;
	        		// console.log(item);
	        		// console.log(re);
	        		console.log(i++);
	        		callback(null,item);
	        	}else{
	        		console.log(err);
	        	}
	        })
      },function(err,result){
      	console.log("re:"+result);
      })
       
}*/

exports.getFile=function(dir,fn){
  fs.readdir(dir,function(err,file){
	if(!err){
		var len=file.length;
		console.log("文件数："+len);
		var i=0;
		var result=[];

		function doo(item){
			fs.stat(dir+"/"+item,function(err,re){
				if(!err){
                  var tem={
                  	name:item,
                  	info:re,
                  	isdir:re.isDirectory()
                  };
                  result.push(tem);
				}
				  i++;
                  if(i<len){
                  	doo(file[i]);
                  }else{
                  	fn(result);
                  }
			})
		}
		doo(file[0]);
	}else{
		console.log("获取文件错误："+err);
	}
})

}

