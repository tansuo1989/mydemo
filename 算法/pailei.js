
//计算阶乘
function count(str){
    var len=str.length;
    var re=len;
    while(len>1){
       re*=--len;
    }
    return re;
}


//五镒循环嵌套：
function one(str){
  var len=str.length;
  var re=[];
  for(var i=0;i<len;i++){
       var t1=str[i];
       for(var j=0;j<len;j++){
           if(j!=i){
               var t2=t1+str[j];
                for(var ii=0;ii<len;ii++){
                        if(ii!=i&&ii!=j){
                            var t3=t2+str[ii];
                            for(var jj=0;jj<len;jj++){
                                            if(jj!=i&&jj!=j&&jj!=ii){
                                                var t4=t3+str[jj];
                                                for(var aa=0;aa<len;aa++){
                                                    if(aa!=i&&aa!=j&&aa!=ii&&aa!=jj){
                                                        var t5=t4+str[aa];
                                                        re.push(t5);
                                                    }
                                                }   
                                            }
                                
                                    }   
                        }
                
                }   
           }
          
       }
  }
  return re;
}




//显示一个单词的所有排列方式
var pailei={
    in_array:function(v,arr){
        return arr.indexOf(v)!=-1;
    },
    copy:function(arr){
        var re=[];
        for(var i in arr){
            re.push(arr[i]);
        }
        return re;
    },
    lo:function(str,len,t1,index,re){
        for(var j=0;j<len;j++){
          if(!this.in_array(j,index)){
              var t2=t1+str[j];
              if(t2.length==len){
                  re.push(t2);
              }else{
                  var arr=this.copy(index);
                  arr.push(j);
                  this.lo(str,len,t2,arr,re);
              }
          }
        }
    },
    loop:function(str){
        var len=str.length;
        var re=[];
        for(var i=0;i<len;i++){
            var t1=str[i];
            this.lo(str,len,t1,[i],re);
        }
        return re;
    }
}



var re=pailei.loop("abcde");
console.log(re);