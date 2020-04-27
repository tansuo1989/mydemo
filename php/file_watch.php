<?php

class FileWatch{
    
    protected $all=array();

    public function __construct($dir){
      $this->watch($dir); 
    }

    //子类中重写这个方法
    public function fun($file){}


    protected function all_file($dir){
        if(is_file($dir)){
            $this->all[$dir]=md5_file($dir);
            return $this->all;
        }
        if(is_dir($dir)){
            $open=opendir($dir);
            while(($file=readdir($open))!==false){
                if($file!="."&&$file!=".."){
                    $f=$dir."/".$file;
                    if(is_file($f)){
                        $this->all[$f]=md5_file($f);
                    }elseif(is_dir($f)){
                        $this->all_file($f);
                    }
                    
                }
            }
        }
        return $this->all;
    }

    public function watch($dir){
        $this->all=array();
        $old=$this->all_file($dir);
        while(true){
            sleep(2);
            $this->all=array();
            $new=$this->all_file($dir);

            $re=array_diff($new,$old);
            $del=array_diff_key($old,$new);
            $re=array_merge($re,$del);
            if($re){
                $this->all=array();
                $old=$this->all_file($dir);
                $file=array_keys($re);
                $this->fun($file[0]);
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








