/*
* @Author: Administrator
* @Date:   2018-07-07 10:52:32
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-08 00:54:36
*/
$(function(){
	$(".toplink li").eq(0).hover(function(){
		$(".drop_down").show();
		$('.d-toplink-border').css('border-color','#ddd');
		$(this).children('a').css("color","#ff8200");
		$(this).children('i').removeClass('iconfont icon-moreunfold').addClass('iconfont icon-less');
	},function(){
		$(".drop_down").hide();
		$('.d-toplink-border').css('border-color','transparent');
		$(this).children('a').css("color","#555");
		$(this).children('i').removeClass('iconfont icon-less').addClass('iconfont icon-moreunfold');
	})	
});