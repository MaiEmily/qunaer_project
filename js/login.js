/*
* @Author: Administrator
* @Date:   2018-06-28 18:56:21
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-07 10:54:52
*/
$(function(){
	/*------------------尾部-----------------------*/
	$(".toplink li").eq(0).hover(function(){
		$(".drop_down").show();
		$(this).children('.d-toplink-border').css({"width":"104","border-width":"1px","border-style":"solid","border-color":"#ddd"});
		$(this).children('.d-toplink-border').children('a').css({"color":"#ff8200"});
		$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-moreunfold').addClass('iconfont icon-less').css('color','#ff8200');
	},function(){
		$(this).children('.d-toplink-border').css({"color":"#ff8200"});
		$(this).children('.d-toplink-border').css({"width":"104","border-width":"1px","border-style":"solid","border-color":"transparent"});
		$(".drop_down").hide();
		$(this).children('.d-toplink-border').children('a').css("color","#999");
		$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-less').addClass('iconfont icon-moreunfold').css('color','#999');
	});
	/*-----------------------------表单字体------------------*/
	$(".main_right_login input").click(function(){
		$(this).siblings().addClass('id-way');
		$(this).parent().siblings().children('label').removeClass('id-way');


	});
	/*---------------------二维码电脑切换--------------------*/
	$('span.sclick').click(function(){
		if($(this).hasClass('main_right_change')){
			$(this).removeClass('main_right_change').addClass('main_right_change_pc');
			$('.main_right_con').css('display', 'none');
			$('.qr-code').css('display','block');
		}else{
			$(this).removeClass('main_right_change_pc').addClass('main_right_change');
			$('.qr-code').css('display', 'none');
			$('.main_right_con').css('display','block');
		}
	});
	$('.main_right_sign').hover(function(){
		$(this).children("i").removeClass('main_right_sign_icon').addClass('main_right_sign_icon_change');
	},function(){
		$(this).children("i").removeClass('main_right_sign_icon_change').addClass('main_right_sign_icon');
	});
	/*-------------------------换一张-------------------------------*/
	$('.chang-one-code').click(function(){
		$('.change-here-code').attr({'src':'../images/image01.jpg'})
	})
});