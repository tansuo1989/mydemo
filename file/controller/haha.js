var fun=require("../lib/fun");

exports.run=function(data,fn){
	fun.getFile(data.name,function(re){
    	fn(re);
    })
}