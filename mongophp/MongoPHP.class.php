<?php 
//不支持php7的环境
class MongoPHP{
   protected $config=array();
   protected $db="";
   protected $_table="";
   protected $mongo="";
   protected $dsn="";

public function __construct(){
     $this->config=require("./config.php");
     if($this->config['user']){
      $this->dsn="mongodb://".$this->config['user'].":".$this->config['password']."@".$this->config['host'].":".$this->config['port'];
    }else{
      $this->dsn="mongodb://".$this->config['host'].":".$this->config['port'];
    }   
     $this->mongo=new MongoClient($this->dsn);
     $this->db=$this->config['db'];
}  

public function table($table){ 
   $mongo=$this->mongo;
   $db=$this->db;
   $this->_table=$this->mongo->$db->$table;
   return $this;
 }

public function select($where=array()){
   $re=$this->_table->find($where);
   return $this->toArray($re);
} 

public function find($w=array()){
   $re=$this->_table->findOne($w);
   return $this->toArray($re);
}

public function insert($arr){
  $re=$this->_table->insert($arr);
  return $re;
}

//只修改第一个
public function update($w,$arr){
  $config=array(
   "multi"=>true,//更新所有 -->无效，为什么？
   "upsert"=>false,//只修改，不添加，true则添加
    );
  $re=$this->_table->update($w,$arr,$config);//
  return $re;
}

//删除所有
public function delete($w){
  if(!$w||count($w)==0){return "nowhere";}
  $re=$this->_table->remove($w,array('justOne'=>true));
  return $re;
}

public function deleteAll($w){
  if(!$w||count($w)==0){return "nowhere";}
  $re=$this->_table->remove($w);
  return $re;
}

protected function toArray($obj){
  $arr=array();
  foreach($obj as $v){
    $arr[]=$v;
  }
  return $arr;
}

   

}



 ?>