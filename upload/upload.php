<?php
class Upload{
 private $filepath = './upload'; //上传目录
 private $tmpdir="";//分块文件保存目录
 private $tmpPath; //PHP文件临时目录
 private $blobNum; //第几个文件块
 private $totalBlobNum; //文件块总数
 private $fileName; //文件名
 private $savename="";//保存文件时的名字，用gbk编码

 public function __construct($tmpPath,$blobNum,$totalBlobNum,$fileName){
    $this->tmpdir=$this->filepath."/tem";
    $this->tmpPath = $tmpPath;
    $this->blobNum = $blobNum;
    $this->totalBlobNum = $totalBlobNum;
    $this->fileName = $fileName;
    $this->savename=iconv("utf-8","gbk",$fileName);
    
    $this->touchDir();

    $this->moveFile();
    $this->apiReturn();
      if($this->blobNum == $this->totalBlobNum){
          $this->fileMerge();
      }
 }
 
 //判断是否是最后一块，如果是则进行文件合成并且删除文件块
 private function fileMerge(){
   $blob = '';
   for($i=1; $i<= $this->totalBlobNum; $i++){
    $blob .= file_get_contents($this->tmpdir.'/'. $this->savename.'__'.$i);
   }
   file_put_contents($this->filepath.'/'. $this->savename,$blob);
   $this->deleteFileBlob();

   $re=array(
    'code'=>2,
    'msg'=>$this->blobNum."/".$this->totalBlobNum."-->succsss",
    'file'=>$this->filepath."/".$this->fileName
    );
   echo json_encode($re);
 }
 
 //删除文件块
 private function deleteFileBlob(){
  for($i=1; $i<= $this->totalBlobNum; $i++){
   @unlink($this->tmpdir.'/'. $this->savename.'__'.$i);
  }
 }
 
 //移动文件
 private function moveFile(){
  $filename = $this->tmpdir.'/'. $this->savename.'__'.$this->blobNum;
  move_uploaded_file($this->tmpPath,$filename);
 }
 
 //API返回数据
 public function apiReturn(){
    if(file_exists($this->tmpdir.'/'. $this->savename.'__'.$this->blobNum)){
     $data['code'] = 1;
     $data['msg'] = $this->blobNum."/".$this->totalBlobNum;
    }
  header('Content-type: application/json');
  echo json_encode($data);
 }
 
 //建立上传文件夹
 private function touchDir(){
  if(!is_dir($this->filepath)){
      mkdir($this->filepath);
  }
  if(!is_dir($this->tmpdir)){
      mkdir($this->tmpdir);
  }
 }

}//endclass


// echo json_encode($_FILES['file']);
// exit();

$data=array(
  'tmpname'=>$_FILES['file']['tmp_name'],
  'num'=>$_POST['blob_num'],
  'total'=>$_POST['total_blob_num'],
  'filename'=>$_POST['file_name'],
  );

//实例化并获取系统变量传参
$upload = new Upload($data['tmpname'],$data['num'],$data['total'],$data['filename']);

//是否要使用单例？
