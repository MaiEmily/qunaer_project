/*
* @Author: Administrator
* @Date:   2018-06-28 18:56:21
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-08 00:33:14
*/
$(function(){
	$(".toplink li").eq(0).hover(function(){
			$(".drop_down").show();
			$('.d-toplink-border').css('border-color','#ddd');
			$(this).children('a').css("color","#ff8200");
			$(this).children('i').removeClass('iconfont icon-moreunfold').addClass('iconfont icon-less');
		},function(){
			$('.d-toplink-border').css('border-color','transparent');
			$(".drop_down").hide();
			$(this).children('a').css("color","#555");
			$(this).children('i').removeClass('iconfont icon-less').addClass('iconfont icon-moreunfold');
		});

$(".main_right_login input").click(function(){
		$(this).siblings().addClass('id-way');
		$(this).parent().siblings().children('label').removeClass('id-way');
	
	
});
// 右边界切换
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

});