var fs=require("fs");
var Promise=require("bluebird");
var fs = Promise.promisifyAll(fs);//使用bluebird

//1.自己封装readdir的promise
// var readdir=function(dir){
// 	return new Promise(function(fn,efn){
// 		fs.readdir(dir,function(err,res){
// 			if(err){
// 				efn(err);
// 			}else{
// 				fn(res);
// 			}
// 		})
// 	})
// }

//2.自己封装isdir的promise
// var isdir=function(dir){
// 	return new Promise(function(fn,efn){
// 		fs.stat(dir,function(err,stats){
// 			if(err){
// 				efn(err);
// 			}else{
// 				fn(stats.isDirectory());
// 			}
// 		})
// 	})
// }

//3.用bluebird
async function isdir(dir){
	var re=await fs.statAsync(dir);
	return re.isDirectory();
}

//console.log(isdir("./a.js"));


//递归读取文件
async function myread(pdir){
var all=[];
async function read(pdir){
    var dir=await fs.readdirAsync(pdir);
    for(var i=0;i<dir.length;i++){
    	var tem=pdir+"/"+dir[i];
    	if(await isdir(tem)){
    		read(tem);
    	}else{
    		all.push(tem);
    	}
    }
}
 await read(pdir);
 return all;
}

async function main(dir){
	var re=await myread(dir);
	console.log(re);
}
main("./spider");
