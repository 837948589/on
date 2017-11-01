$(".header a").hover(function(e){
	var e=e||event;
	//e.stopPropagation();
	$(this).css({"color":"#c41f3a","text-decoration":"underline"})
},function(){
	$(this).css({"color":"#8c8c8c","text-decoration":"none"})
});

//二级菜单
$(".subMenuT,.subMenuB,.subCode").hover(function(){
	$(this).find("div").css("display","block")
},function(){
	$(this).find("div").css("display","none")
});

//侧边栏
$(".cart,.shoucang,.serve,.backtop").hover(function(){
	$(this).css("background","#94193f")
},function(){
	$(this).css("background","")
});

$(".user,.code").hover(function(){
	$(this).css("background","#94193f").find("div").css("display","block");
},function(){
	$(this).css("background","").find("div").css("display","none");
});
//点击关闭
$(".login i").click(function(){
	$(this).parent().css("display","none")
})
//nav
$(".nav li:not(li:eq(0))").hover(function(){
	$(this).find("a").css("color","#94193f")
},function(){
	$(this).find("a").css("color","#303030")
});



