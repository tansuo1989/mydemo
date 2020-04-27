<?php 
//全局命名空间
namespace{
 function auto($class){
    $dir=$class.".php";
    $dir=str_replace("\\","/",$dir);
    require $dir;
    echo $dir,"<br>";
};

spl_autoload_register("auto");   
}




//测试的命名空间
namespace cli{
 use cl\a; //待自动加载的命名空间
 $a=new a(); 
 $a->index();  

echo "<pre>";

 $b=new \class2\c();
 $b->index();
}

//关于命名空间与自动加载，参考官网文档：http://php.net/manual/zh/language.namespaces.rules.php






 ?>