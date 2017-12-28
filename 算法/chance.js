// 请教一个概率问题：小球总共有5种颜色，红橙黄绿蓝。现在随机的有10个小球，当然它的颜色也是随机的，比如10个球全是红色，或者10个球占了4个颜色。。。现在问题是：这10个小球，正好有全部5种颜色的概率是多少呢？怎么算的？请高手指教
//问题来源：https://weibo.com/1406355875/FBITC32mf?filter=hot&root_comment_id=0&type=comment


var color=['a','b','c','d','e'];
var num=10;

function rand(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function get_ball(){
    var ball=[];
    for(var i=0;i<num;i++){
       ball[i]=color[rand(0,4)];
    }
    return ball;
}

function in_array(item,arr){
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]==item){return true;}
    }
    return false;
}

function arr_in_arr(arr1,arr2){
    for(var i=0,len=arr1.length;i<len;i++){
        if(!in_array(arr1[i],arr2)){
            return false;
        }
    }
    return true;
}

var total=10000000;
var right=0;
for(var i=0;i<total;i++){
    if(arr_in_arr(color,get_ball())){right++;}
}
console.log("right:"+right/total)
//约 41.5%