<?php
//执行php cli.php 参数1，参数2
//即：php $argv[0] $argv[1] $argv[2]

$f=$argv[1]; //获取文件名后的第一个参数
$_POST['hi']=$argv[2];//
// var_dump($argv);

//php cli.php haha  则执行这个函数
function haha(){
  echo "haha";
}


//php cli.php hi  执行这个函数
function hi(){
    echo "hiiii";
    echo "\n",$_POST['hi'];
    //var_dump($argv); 报错，函数内不能使用
}

// haha();
$f();