<?php
namespace app\index\controller;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use think\helper\Time;//成功

class Index
{
    public function index()
    {
        /*$log = new Logger('name');
		$log->pushHandler(new StreamHandler('./app.log', Logger::WARNING));

		$log->addWarning('Foo!!',array('haha'=>"hiii"));
		$log->addError('Bar!!!');
		echo "<pre>";
		var_dump($log);*/
		return view();
    }

    public function timetest(){
    	$time=Time::today();
		var_dump($time);//成功
    }
}
