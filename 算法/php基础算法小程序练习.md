### php基础算法小程序练习

1. 首先来画个菱形玩玩，很多人学C时在书上都画过，咱们用PHP画下，画了一半。

思路：多少行for一次，然后在里面空格和星号for一次。

```php
for($i=0;$i<=3;$i++){
    for($j=0;$j<=3-$i;$j++){
        echo '&nbsp;';  
    }
    for($k=0;$k<=2*$i;$k++){
        echo '*';   
    }
    echo '<br/>';       
}
```


2. 冒泡排序，C里基础算法，从小到大对一组数排序。

思路：这题从小到大，第一轮排最小，第二轮排第二小，第三轮排第三小，依次类推……
```php
$arr = array(3, 2, 1);
$n = count($arr);
//每循环一次，就跑一趟后面的排序
for($j=0; $j<$n-1; $j++) {
//对后面没排好的，循环查找出最大（最小）的，进行一趟排序
    for($i=$j; $i<$n-1; $i++) {
        if($arr[$j] > $arr[$i+1]) {
            $t = $arr[$j];
            $arr[$j] = $arr[$i+1];
            $arr[$i+1] = $t;
        }
    }
}
print_r($arr);
```


3. 杨辉三角，用PHP写。

思路：每一行的第一位和最后一位是1，没有变化，中间是前排一位与左边一排的和，这种算法是用一个二维数组保存，另外有种算法用一维数组也可以实现，一行一行的输出，有兴趣去写着玩下。

1
1   1
1   2   1
1   3   3   1
1   4   6   4   1
1   5 10 10   5   1

```php
//每行的第一个和最后一个都为1，写了6行
for($i=0; $i<6; $i++) {
    $a[$i][0]=1;
    $a[$i][$i]=1;
}
//出除了第一位和最后一位的值，保存在数组中
for($i=2; $i<6; $i++) {
    for($j=1; $j<$i; $j++) {
      $a[$i][$j] = $a[$i-1][$j-1]+$a[$i-1][$j];
    }
}
//打印
for($i=0; $i<6; $i++){
    for($j=0; $j<=$i; $j++) {
    echo $a[$i][$j].'&nbsp;';
    }
    echo '<br/>';
}
````

4. 在一组数中，要求插入一个数，按其原来顺序插入，维护原来排序方式。

思路：找到比要插入数大的那个位置，替换，然后把后面的数后移一位。
```php
$in = 2;
$arr = array(1,1,1,3,5,7);
$n = count($arr);
//如果要插入的数已经最大，直接打印
if($arr[$n-1] < $in) {
    $arr[$n+1] = $in; print_r($arr);
    }
for($i=0; $i<$n; $i++) {
//找出要插入的位置
    if($arr[$i] >= $in){
        $t1= $arr[$i];
        $arr[$i] = $in;
//把后面的数据后移一位
        for($j=$i+1; $j<$n+1; $j++) {
            $t2 = $arr[$j];
            $arr[$j] = $t1;
            $t1 = $t2;
    }
//打印
    print_r($arr);
    die;
    }
}
```

5. 对一组数进行排序（快速排序算法）。

思路：通过一趟排序分成两部分，然后递归对这两部分排序，最后合并。
```php
function q($array) {
    if (count($array) <= 1) {return $array;}
//以$key为界，分成两个子数组
    $key = $array[0];
    $l = array();
    $r = array();
//分别进行递归排序，然后合成一个数组
    for ($i=1; $i<count($array); $i++) {
    if ($array[$i] <= $key) { $l[] = $array[$i]; }
    else { $r[] = $array[$i]; }
}
    $l = q($l);
    $r = q($r);
    return array_merge($l, array($key), $r);
}
$arr = array(1,2,44,3,4,33);
print_r( q($arr) );
```

6. 在一个数组查找你所需元素（二分查找算法）。

思路：以数组中某个值为界，再递归进行查找，直到结束。
```php
function find($array, $low, $high, $k){
    if ($low <= $high){
    $mid = intval(($low+$high)/2);
        if ($array[$mid] == $k){
        return $mid;
    }elseif ($k < $array[$mid]){
        return find($array, $low, $mid-1, $k);
        }else{
        return find($array, $mid+1, $high, $k);
        }
    }
    die('Not have...');
}
//test
$array = array(2,4,3,5);
$n = count($array);
$r = find($array,0,$n,);
```

7. 合并多个数组，不用array_merge()，题目来于论坛。

思路：遍历每个数组，重新组成一个新数组。
```php
function t(){
    $c = func_num_args()-1;
    $a = func_get_args();
    //print_r($a);
    for($i=0; $i<=$c; $i++){
        if(is_array($a[$i])){
            for($j=0; $j<count($a[$i]); $j++){
                $r[] = $a[$i][$j];
            }
        } else {
            die('Not a array!');
        }
    }
    return $r;
}
//test
print_r(t(range(1,4),range(1,4),range(1,4)));
echo '<br/>';
$a = array_merge(range(1,4),range(1,4),range(1,4));
print_r($a);
```

8. 牛年求牛：有一母牛，到4岁可生育，每年一头，所生均是一样的母牛，到15岁绝育，不再能生，20岁死亡，问n年后有多少头牛。（来自论坛）

```php
function t($n) {
        static $num = 1
        for($j=1; $j<=$n; $j++){
                if($j>=4 && $j<15) {$num++;t($n-$j);}
                if($j==20){$num--;}
         }
          return $num;
}
//test
echo t(8);
```

