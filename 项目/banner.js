var Now=0;
$(".btn span").click(function(e){
	var e=e||event
	e.stopPropagation()?e.stopPropagation():e.cancelBubble;
	Now=$(this).index()-1;
	anim();
})
function anim(){
	if(Now==$(".banner ul li").size()-1){
		Now=0
	}else{
		Now++
	}
	$(".banner ul li").eq(Now).stop().animate({"opacity":1},500).siblings().stop().animate({"opacity":0},500);
	$(".btn span").eq(Now).addClass("on").siblings().removeClass("on");
}
$(".banner").mouseover(function(){
	 clearInterval(timer)
})
$(".banner").mouseout(function(){
	 timer=setInterval(anim,2000)
})
//立即执行
$(function(){
	 timer=setInterval(anim,2000)
})