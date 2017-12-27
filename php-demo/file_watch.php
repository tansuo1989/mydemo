<?php

class FileWatch{
    
    public function __construct($dir){
      $this->watch($dir); 
    }

    //子类中重写这个方法
    public function fun($file){}


    protected function all_file($dir){
        static $all=array();
        if(is_file($dir)){
            $all[$dir]=md5_file($dir);
            return $all;
        }
        if(is_dir($dir)){
            $open=opendir($dir);
            while(($file=readdir($open))!==false){
                if($file!="."&&$file!=".."){
                    $f=$dir."/".$file;
                    if(is_file($f)){
                        $all[$f]=md5_file($f);
                    }elseif(is_dir($f)){
                        $this->all_file($f);
                    }
                    
                }
            }
        }
        return $all;
    }

    public function watch($dir){
        $old=$this->all_file($dir);
        while(true){
            sleep(2);
            $new=$this->all_file($dir);
            $ischange=false;
            foreach($new as $k=>$v){
                if($v!=$old[$k]){
                    $this->fun($k);
                    $ischange=true;
                }
            }
            if($ischange){
                $old=$this->all_file($dir);
            }
        }
    }




}//endclass


//使用方法
class mywatch extends FileWatch{
    public function fun($file){
        echo $file."\n";
    }
}


$watch=new mywatch("./");








