function rand(min,max){
	return Math.floor(Math.random()*(max-min))+min;
}
function makeArr(min,max,len){
	var re=[];
	for(var i=0;i<len;i++){
		re.push(rand(min,max));
	}
	return re;
}
function copy(arr,n){
	var re=[];
	var len=n?n:arr.length;
	for(var i=0;i<len;i++){
		re.push(arr[i])
	}
	return re;
}

exports.copy=copy;
exports.makeArr=makeArr;

