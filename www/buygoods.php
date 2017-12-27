<?php 
require_once("config.php");
$username = $_GET["username"];//接收参数
$goodsid = $_GET["goodsid"];
$goodsnum = $_GET["goodsnum"];

$var_sql = " INSERT  into buygoods(username,goodsid,goodsnum) VALUES('$username','$goodsid','$goodsnum')";//书写要数据库中执行的sql语言
mysql_query("set character set 'utf8'");//对字符进行编码
mysql_query($var_sql);

?>
