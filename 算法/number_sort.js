//整数数字或字母的排序算法，三轮

var com=require("./common.js");

var arr=com.makeArr(1,100000,100);
// console.log(arr)


console.time("sort");
//使用sort函数排序
// arr.sort(function(a,b){
//     return a-b;
// });
// //4.147ms

//整数排序法，字母可以通过一定的规则转成整数，小数也可以
function mysort(arr){
    var re=[];
    var len=arr.length;
    for(var i=0;i<len;i++){
        var num=arr[i];
        re[num]=re[num]?re[num]+1:1;
    }
    var length=re.length;
    var res=[];
    var j=0;
    for(var i=0;i<length;i++){
       if(re[i]==1){
           res[j]=i;
           j++;
       }else if(re[i]>1){
           for(var k=0;k<re[i];k++){
               res[j]=j;
               j++;
           }
       }
    }
   console.log(res);
}
 mysort(arr);
//但数据re的长度可以会非常大，并且结果运行时间也远大于系统自带的

// console.log(arr);
console.timeEnd("sort");