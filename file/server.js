var http=require("http");
var fs=require("fs");
var url = require('url');

http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
 // console.log(pathname);
  if(pathname=="/"){
  	var type="";
  }else if(pathname.length>4){
  	var type=pathname.substr(pathname.length-5,pathname.length);
  }
  
  if(type==""){
  	fs.readFile("index.html",function(err,data){
  		if(!err){
  			res.write(data.toString());
  		}
  	})
  }
  else if(type==".html"){
  	fs.readFile(pathname.substr(1),function(err,data){
  	 res.write(data.toString());
  })
  }else{
  	var ctrl=pathname.substr(1);
    var data=url.parse(req.url,true).query;
    if(!fs.existsSync("./controller/"+ctrl+".js")){res.write("请求的网址不存在");res.end();return false;}
    
    var cc=require("./controller/"+ctrl);
    cc.run(data,function(re){
    	res.write(JSON.stringify(re));
	    res.end();
    })
  }
  
}).listen(3000);




