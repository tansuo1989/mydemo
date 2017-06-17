<?php 
//后端支持,当然index.html请求的不能是这个文件，因为这是同域，不需要jsonp
//但如果index.html请求这个文件，也是可以正常返回的，也就是说后端如果配置了jsonp的支持，同域和跨域都是可以支持的。但如果后端没有配置，前端使用了jsonp也是不行的。
//当然，跨域除了使用jsonp外，还可以使用后端配置允许跨域，可以参考：http://www.runoob.com/w3cnote/php-ajax-cross-border.html

$arr=array('ha'=>'你的哈哈');
$arr['hi']="你们好呀，俣哈，哈哈。。";


function jsonp($arr){
	if($f=$_GET['callback']){
		echo $f."(".json_encode($arr).");";
	}else{
		echo json_encode($arr);
	}
}

jsonp($arr);

 ?>