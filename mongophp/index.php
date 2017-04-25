<?php 
require "./MongoPHP.class.php";

$mongo=new MongoPHP();
$re=$mongo->table("test")->deleteAll();
//$re=$mongo->table("test")->insert(array('id'=>22,'name'=>"iiiiiiii"));
echo "<pre>";
var_dump($re);

// foreach($re as $v){
// 	var_dump($v);
// }


 ?>