 //头部二级菜单
    function nav(){
        var p=null;
        $("#nav_bar>ul>li").hover(function(){
            if($(this).hasClass("brand")){
                $("#nav_bar_cont").hide();
                $(this).children("p").fadeIn("400").end().siblings().children("p").hide();
                $(this).children("a").css("color","#e74c3c").end().siblings().children("a").css("color","#666");
                return false;
            }
            $("#nav_bar_cont").slideDown(400);
            $(this).children("ol").clone().appendTo($("#nav_bar_cont").empty());
            $(this).children("p").fadeIn("400").end().siblings().children("p").hide();
            $(this).children("a").css("color","#e74c3c").end().siblings().children("a").css("color","#666");
        })
        $("#nav_bar").hover(function(){
            clearTimeout(p);
        },function(){
            clearTimeout(p);
            p=setTimeout(function(){
                $("#nav_bar_cont").slideUp(600,function(){
                    $("#nav_bar>ul>li p").hide();
                    $("#nav_bar>ul>li>a").css("color","#666");
                });
            },400)
        })

        $(window).scroll(function () {
            var srolly = window.scrollY;
            if(srolly >= 71){
                $(".nav_bar_container").css("position","fixed");
                $(".scroll_shop").css("display", "block");
                $(".contact").css("display","none")
            }else{
                $(".nav_bar_container").css("position","relative");
                $(".scroll_shop").css("display", "none");
                $(".contact").css("display","block")
            }
        })
    }

 //返回顶部
    function toptip(){
        var mineight=parseInt($(window).height());
        //出现
        $(window).on("scroll",function(){
            var nowHeight=parseInt($(window).scrollTop());
            if(nowHeight>mineight){
                $("#backT").show();
                $("#Contact_service").show();
                $("#backT").on("click",function(){
                    $(window).scrollTop(0);
                    $(this).children().stop();
                    $(this).html("<img src='img/backT.png'>")
                });
                return false;
            }else{
                $("#backT").hide();
                $("#Contact_service").hide();
                return false;
            }
        });
        $("#Contact_service").hover(function(){
            $(this).find("img").fadeOut(200,function(){
                $(this).children().stop();
                $("#Contact_service").html("<p>联系客服</p>");
                $("#Contact_service").children("p").fadeIn(200);
            });
        },function(){
            $(this).find("p").fadeOut(200,function(){
                $(this).children().stop();
                $("#Contact_service").html("<img src='img/Contact_service.png'>")
                $(this).find("img").hide().fadeIn(200);
            });
        });
        $("#Contact_service").click(function () {
            window.location.href = "../register.html"
        })
        //返回顶部
        $("#backT").hover(function(){
            $(this).find("img").fadeOut(200,function(){
                $(this).children().stop();
                $("#backT").html("<p>返回顶部</p>");
                $("#backT").children("p").fadeIn(200);
            });
        },function(){
            $(this).find("p").fadeOut(200,function(){
                $(this).children().stop();
                $("#backT").html("<img src='img/backT.png'>")
                $(this).find("img").hide().fadeIn(400);
            });
        })
    }

 //跳转到购物车
 //isuser();
 //function isuser(){
 //    var hrefgoods = window.location.search;
 //    var username = hrefgoods.split("&")[0].split("=")[1];//?id=6  ?username=17612772510&id=6 ?username=17612772510
 //    if(hrefgoods.indexOf("username") == -1){
         $(".nav_bar_container a:not(.no)").attr("href","goodslist.html");
 //        $(".shopping_bag").append("<a href='shoppingcar.html' target='_blank' title='购物袋'></a>");
 //        $("#nav_bar").append("<a href='shoppingcar.html' class='scroll_shop' id='scroll_shop' target='_blank' title='购物袋'></a>")
 //    }else{
 //        $(".nav_bar_container a").attr("href","goodslist.html?username="+username);
 //        $(".shopping_bag").append("<a href='shoppingcar.html?username="+username+"' target='_blank' title='购物袋'></a>")
 //        $("#nav_bar").append("<a href='shoppingcar.html?username="+username+"'class='scroll_shop' id='scroll_shop' target='_blank' title='购物袋'></a>")
 //    }
 //}


 //记录用户名

 var storage = window.sessionStorage;
 var username = storage.getItem("tel");
 if(username){
     //$(".user_center a").attr("title","退出登录");
     $(".user_center").prepend("<a class='person' title='个人中心'></a>");
     $(".user_center").append("<div id='user_center_cont'><span></span><ul><li><h3>"+username+"</h3></li><li><a>我的订单</a></li><li><a>我的收藏</a></li><li><a href='login.html' id='logout'>退出登录</a></li></ul></div>");
     //个人中心弹出
     showperson();


 }else{
     $(".user_center").prepend("<a href='login.html' title='登录'></a>");
 }


 //清除登录用户名
 $(".user_center").on("click","#logout", function () {
     storage.removeItem("tel");
 });




//登录成功后个人中心显示
 function showperson(){
     var d=null;
     $(".user_center").hover(function(){
         clearTimeout(d);
         $(this).children("div").fadeIn(400);
     },function(){
         //离开购个人中心弹窗隐藏
         clearTimeout(d);
         d=setTimeout(function(){
             $("#user_center_cont").fadeOut(400);
         },400)
     })
 }























