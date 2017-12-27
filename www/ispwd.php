<?php 
require_once("config.php");

$tel = $_GET["tel"];

$sql = "select pwd from userinfo where tel = '$tel'";
mysql_query("set character set 'utf8'");//对字符进行编码
$result= mysql_query($sql);//执行查询语句 并且获取查询语句的结果


$list = array();//表示一个集合
while($item = mysql_fetch_row($result)){
    $temp = array();
    $temp["pwd"] =$item[0];
    $list[] = $temp;
}
echo json_encode($list);

 ?>