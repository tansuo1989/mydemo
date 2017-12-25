<?php 

$f=$_FILES;
file_put_contents("./a.txt", json_encode($f));

echo "a.png";


 ?>