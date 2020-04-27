<?php 
//1.配置不能在模型中定义，只能在config.php文件中定义
/*protected $connection = array(
        'db_type'  => 'mongo',
        'db_user'  => '',
        'db_pwd'   => '',
        'db_host'  => 'localhost',
        'db_port'  => '27017',
        'db_name'  => 'test',
        'db_charset' => 'utf8',
        'DB_PREFIX'=>"",
    );
在模型中这样定义，并没有读到*/
//应该在配置文件中这样写：
	// 'DB_TYPE'   => 'mongo', // 数据库类型
	// 'DB_HOST'   => 'localhost', // 服务器地址
	// 'DB_NAME'   => 'test', // 数据库名
	// 'DB_USER'   => '', // 用户名
	// 'DB_PWD'    => '', // 密码
	// 'DB_PORT'   => "27017", // 端口
	// 'DB_PREFIX' => '', // 数据库表前缀 

//2.控制器中使用，不能使用M()来实例化，只能使用$Model = new \Think\Model\MongoModel("Col");
	$Model = new \Think\Model\MongoModel("test");
	$re=$Model->select();
	echo $Model->getLastSql();
  //如果我创建了一个TestModel.class.php文件，内容为：
  <?php  
		namespace Bbs\Model;
		use Think\Model\MongoModel;
		class TestModel extends MongoModel {
		   
		}
//即不需要添加什么属性与方法，则可以在控制器中直接用D()方法来实例化：
 $re=D("Test")->select();
  echo D("Test")->getLastSql();
  dump($re);
 



 ?>