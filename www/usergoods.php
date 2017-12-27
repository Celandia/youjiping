<?php 
require_once("config.php");

$username = $_GET["username"];

$var_sql = "select * from goods where username ='$username'";//书写要数据库中执行的sql语言

mysql_query("set character set 'utf8'");//对字符进行编码

$result = mysql_query($var_sql);//执行查询语句 并且获取查询语句的结果


$list = array();//表示一个集合
while($item = mysql_fetch_row($result)){
    $temp = array();
    $temp["id"] =$item[0];
    $temp["username"]= $item[1];
    $temp["goodsid"] = $item[2];
    $temp["goodsnum"] = $item[3];
    $list[] = $temp;
}
echo json_encode($list);
 ?>
 