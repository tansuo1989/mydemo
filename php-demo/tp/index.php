<?php 
error_reporting(E_ALL);

require __DIR__.'/vendor/autoload.php';
 
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
  
// add records to the log
$log->addWarning('Foo');
$log->addError('Bar');

echo "<pre>";
var_dump($log);

//来自：http://www.cnblogs.com/php-linux/p/6365978.html 但没有test.log文件输出


 ?>