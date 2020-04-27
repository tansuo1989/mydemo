<?php
class Upload{
	private $filepath = './upload'; //上传目录
	private $temdir="./tem";//分块文件保存目录

	public function succ($arr=[],$status=1){
	header('Content-type: application/json');
	exit(json_encode([
		'status'=>$status,
		'info'=>$arr,
	]));
	}

	public function error($info){
		$this->succ($info,0);
	}

	//初始化
	public function start($fileName=""){
		$filename=md5($fileName.time());//使用文件名创建一个目录
		$dir=$this->temdir."/".$filename;
		is_dir($this->temdir)?"":mkdir($this->temdir);
		is_dir($dir)?"":mkdir($dir);
		if(!is_dir($this->filepath)){mkdir($this->filepath);}
		$this->succ($filename);
	}

	public function loading($file,$filename,$index){
		$fname=$this->temdir."/".$filename."/".$filename."_".$index;
		$up=move_uploaded_file($file,$fname);
		if($up){
			$this->succ($fname);
		}
		$this->error("移动失败");
	}
 
 //判断是否是最后一块，如果是则进行文件合成并且删除文件块
	public function merge($filename,$ext,$total){
		$blob = '';
		for($i=0;$i<$total;$i++){
			$fname=$this->temdir."/".$filename."/".$filename."_".$i;
			$blob.=file_get_contents($fname);//文件过大时会导致内存不足，要通过修改 php.ini中的 memory_limit 来设置
			@unlink($fname);
		}
		@rmdir($this->temdir."/".$filename);
		$newfile=$this->filepath."/".md5(time().mt_rand(1000,9999)).$ext;
		$bool=file_put_contents($newfile,$blob);
		if($bool){
			$this->succ($newfile);
		}
		$this->error();
	}
 
}//endclass




$data=[
	'status'=>$_POST['status'],
];
$upload = new Upload();
if($data['status']=="start"){
    $upload->start($_POST['filename']);
}
elseif($data['status']=="loading"){
    $upload->loading($_FILES['file']['tmp_name'],$_POST['filename'],$_POST['index']);
}
elseif($data['status']=="merge"){
    $upload->merge($_POST['filename'],$_POST['ext'],$_POST['total']);
}
else{
    $upload->error("状态异常");
}
