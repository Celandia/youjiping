<?php 
@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");
$var_connet = mysql_connect("localhost","root","admin123456"); //根据用户名和密码 进入指定的地址
mysql_select_db("project",$var_connet);//然后到指定地址中找到要用的数据库
?>
 