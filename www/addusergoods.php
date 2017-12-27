<?php 
require_once("config.php");


$username = $_GET["username"];//接收参数
$goodsid = $_GET["goodsid"];
$goodsnum = $_GET["goodsnum"];

if(!usernameIsEixst($username)){
	$var_sql = " INSERT  into goods(username,goodsid,goodsnum) VALUES('$username','$goodsid','$goodsnum')";//书写要数据库中执行的sql语言
	mysql_query("set character set 'utf8'");//对字符进行编码
	mysql_query($var_sql);
}else{
	$sqlgoodsid = "select count(*) from goods where username = '$username' and goodsid = '$goodsid'";//判断id是否存在
	$resultid = mysql_query($sqlgoodsid);
	$rowid = mysql_fetch_row($resultid);//获取里面的结果
	if($rowid[0]){//goodsid已经存在,更新商品数量
	    $var_new_goodsnum = "update goods set goodsnum ='$goodsnum' where username = '$username' and goodsid = '$goodsid'";
		mysql_query($var_new_goodsnum);

	}else{//goodsid不存在
	    $var_sqlid = " INSERT  into goods(username,goodsid,goodsnum) VALUES('$username','$goodsid','$goodsnum')";
	    mysql_query($var_sqlid);
	}
}



function usernameIsEixst($username)
{
  $sql = "select count(*) from goods where username = '$username'";
    mysql_query("set character set 'utf8'");//对字符进行编码
    $result= mysql_query($sql);//执行查询语句 并且获取查询语句的结果

    $row = mysql_fetch_row($result);//获取里面的结果

    if($row[0]){//该用户已经存在
          return true;      
    }else{//该用户不存在
        return false;
    }

}
?>
