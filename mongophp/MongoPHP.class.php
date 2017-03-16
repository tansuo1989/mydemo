<?php 
//不支持php7的环境
class MongoPHP extends {
   protected $config=array();
   protected $_db="";
   protected $_table="";
   protected $con="";

   public function __construct(){
   	 $this->con=new MongoClient();
   }	


   public function db($db){
   	 $this->_db= $this->con->$db;
   	 return $this;
    } 

    public function table($table){
     $this->_table=$this->_db->$table;	
     return $this;
    }
    
    public function insert($arr){
     $this->_table->insert($arr);
     return $this;
    }

    public function select(){
    	$re=array();
    	$tem=$this->_table()
    }

}



 ?>