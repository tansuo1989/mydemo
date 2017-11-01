var common=require("./common")

var arr=common.makeArr(1,10,10);
console.log("old:",arr)

function myarr(){
  return common.makeArr(1,10,10);
}
//1.最先想到的排序,用到了unshift,push,splice三个js函数
function mysort(arr){
	var narr=[arr[0]];
	var len=arr.length;
	for(var i=1;i<len;i++){
		var tem=arr[i];
		if(tem>=narr[0]){narr.unshift(tem);}
		else if(tem<=narr[narr.length-1]){
				narr.push(tem);
		}else{
			for(var j=0;j<narr.length;j++){
				if(tem<=narr[j]&&tem>=narr[j+1]){
					narr.splice(j+1,0,tem);break;
				}
			}
		}
	}
    return narr;
}

// console.log(arr)
// console.time("a");
// var re=mysort(arr);
// console.log(re);
// console.timeEnd("a");

//2.在原数组上排序,即“直接插入排序”,
//真正的算法题应该只能用判断与循环，不能使用其它原生函数

function my2Sort(arr){
	var len=arr.length;
	for(var i=1;i<len;i++){
		if(arr[i]>arr[i-1]){
           var big=arr[i];
           arr[i]=arr[i-1];
           var j=i-1;
           while(big>arr[j]){
           	 arr[j+1]=arr[j];
           	 j--;
           }
           arr[j+1]=big;
		}
	}
	return arr;//这里要注意，这个函数是直接操作原数组
	//我觉得返回原数组方便后续操作，但不要以为原数组没有变
}
//参考：http://blog.csdn.net/hguisu/article/details/7776068/
//原文中的：   a[i] = a[i-1];           //先后移一个元素   应该是多余的

// console.time("b")
// my2Sort(arr)
// console.log(arr);
// console.timeEnd("b")

///结论：
//当数组长度较大的时候，我发现第二种的效率低得多，可能是因为第一种用了原生函数，效率更高
//当数组长度较小时，优劣难分，因为循环次数与数组原来的排列有关


//3.希尔排序（插入排序）
var count=0;
function shell1(arr,k){
	var len=arr.length;
	//console.log("k:",k)
	for(var i=k;i<len;i++){
		//count++;
		//console.log("count:",count)
		if(arr[i]>arr[i-k]){
			var tmp=arr[i];
			var j=i-k;
			//console.log("i:",i)
			while(tmp>arr[j]){
				arr[j+k]=arr[j];
				//console.log("j:",j,arr);
				j-=k;
			}
			arr[j+k]=tmp;
		}
	}
}

function shellSort(arr,step){
	var step=step>0?step:2;
	var k=Math.floor(arr.length/step);
	while(k>=1){
       shell1(arr,k);
       k=Math.floor(k/step);
	}
}


// console.time("c")
// shellSort(arr);
// console.log("re:",arr);
// console.timeEnd("c")
//console.log("count:",count)
//实测，这种排序并不一定更高效
//希尔排序是一种不稳定排序，而直接插入是稳定的排序。
//稳定是指相等的元素的位置是确定的，排序后不会改变原来相等的元素的顺序
//那么，上面第一种排序方式应该也是不稳定排序

//4.简单选择排序
function easySort(arr){
	var len=arr.length;
	var maxId=0;
	var tmp="";
    for(var i=0;i<len;i++){
      maxId=getMax(arr,len,i);
      if(maxId!=i){
	      tmp=arr[maxId];
	      arr[maxId]=arr[i];
	      arr[i]=tmp;	
      }      
    }
}

function getMax(arr,len,start){
	var max=arr[start];
	var index=start;
	for(var i=start;i<len;i++){
       if(arr[i]>max){
       	max=arr[i];
       	index=i;
       }
	}
	return index;
}

// easySort(arr)
// console.time("d")
// console.log("easy:",arr)
// console.timeEnd("d")
//5.二元选择排序(不是应该叫做“夹逼排序”吗？)
function twiceSort(arr){
	var maxId,minId,tmp,len=arr.length;
	for(var i=0;i<=len/2;i++){
		maxId=i;
		minId=len-i-1;
		for(var j=i;j<len-i;j++){
            if(arr[j]>arr[maxId]){
            	maxId=j;
            }else if(arr[j]<arr[minId]){
            	minId=j;
            }
		}
		if(maxId!=i){
		 	tmp=arr[i];arr[i]=arr[maxId];arr[maxId]=tmp;
		}
		if(minId!=len-i-1){
			tmp=arr[len-i-1];arr[len-i-1]=arr[minId];arr[minId]=tmp;
		}
	}
}
// twiceSort(arr)
// console.time("d")
// console.log("re:",arr)
// console.timeEnd("d")
//注：http://blog.csdn.net/hguisu/article/details/7776068/ 这里的二元选择排序的函数应该是错误的


//6.堆排序
//7.冒泡排序
function bubbleSort(arr){
	var len=arr.length;
	for(var i=0;i<len-1;i++){
		for(var j=0;j<len-1;j++){
			if(arr[j]<arr[j+1]){
				var tmp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
			}
			//console.log(i,j,arr)
		}
	}
}

// bubbleSort(arr)
// console.time("d")
// console.log("re:",arr)
// console.timeEnd("d")

//8.
