<?php 
require_once("config.php");

$username = $_GET["username"];//接收参数
$goodsid = $_GET["goodsid"];

$var_sql = "delete from issend where username ='$username' and goodsid ='$goodsid'";//书写要数据库中执行的sql语言

mysql_query($var_sql);//对应的数据库执行$var_sql语句

?>