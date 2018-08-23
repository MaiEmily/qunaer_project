/*
* @Author: admin
* @Date:   2018-06-25 13:48:49
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-08 15:57:52
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

	var timers=null;
	var i=0;
	function gointo(){
		timers=setInterval(function(){
			i=i+1;
			if(i>3){
				i=0;
				// $('.mmove>ul').stop().animate({'top':-20*(i)},500);
				$('.mmove_ffirst').css('top',-19*i+'px');
				setTimeout(function(){
					i=1;
					$('.mmove_ffirst').stop().animate({'top':-19*i},500);
				},0.000000001);
			}else{

				$('.mmove_ffirst').stop().animate({'top':-19*i},500);
			}
		},1000);
	}
	gointo();
	$('.cometrue').hover(function(){
		clearInterval(timers);
	},function(){
		gointo();
	});
	$('.keyword input').focus(function(){
		$(this).val(' ');
		$('.hot_search').show();
		$(this).css({'border-top-color':'#ff6f00','border-right-color':'#ff6f00','border-left-color':'#ff6f00','border-bottom':'none'
	});

	});
	$('.hot_search').click(function(){
		$(this).show();
	});
	$('.keyword').children('label').click(function(){
		$('.hot_search').hide();
		$('.keyword input').css({'border-color':'#c1c1c1','border-width':1,'border-style':'solid'
	});
		if($('.keyword input').val()==' '){
			
			$('.tkeyword').css('display','block');
			$('.keyword input').val('');
			$('.keyword input').attr('placeholder','请输入目的地主题或关键词');
		}else if($('.keyword input').val('')){
			$('.tkeyword').css('display','block');
		}
	});
	$('.keyword').children('tkeyword').click(function(){
		$('.hot_search').hide();
	});
	$('.keyword').click(function(){
			// $(this).children('.hot_search').hide();
			return false;
		});
	$('')

	$(document).click(function(){
		$('.hot_search').hide();
		$('.keyword input').css({'border-color':'#c1c1c1','border-width':1,'border-style':'solid'
	});
		if($('.keyword input').val()==' '){
			$('.tkeyword').css('display','block');
			$('.keyword input').val('');
			$('.keyword input').attr('placeholder','请输入目的地主题或关键词');
		}else if($('.keyword input').val()){
			
			$('.tkeyword').css('display','block');
		}
	});
	$('.key_start div i').click(function(){
		$(this).parent().removeClass().addClass('keyra')
		$(this).parent().siblings('div').removeClass('keyra').addClass('keydate');
		console.log('333');
	});
	$('.trip div i').click(function(){
		$(this).parent().removeClass().addClass('keyra')
		$(this).parent().siblings('div').removeClass('keyra').addClass('keydate');
		console.log('333');
	});
	$('.cli div i').click(function(){
		$(this).parent().removeClass().addClass('keyra')
		$(this).parent().siblings('div').removeClass('keyra').addClass('keydate');
		console.log('333');
	});
	/*------------------------ 高级搜索--------------------------------*/
	$('.topsearch').click(function(){
		$('.hash_main').toggle();
	});
	var rtimer;
	var rtimer1;
	var flag=0;
	var x;
	var y=[];
	$(".left-sub-show").hover(function() {
		x=this;
		clearTimeout(rtimer1);
		rtimer=setTimeout(function(){
			
			$(x).siblings().children('.ctrue').hide();
			$(x).children('.ctrue').show();
			$(x).siblings().children('.con-hide').hide();
			$(x).children('.con-hide').show();
			$(x).siblings(".left-sub-show").children('.sm-click').removeClass('sign-more-change').addClass('sign-more');
			$(x).children('.sm-click').removeClass('sign-more').addClass('sign-more-change');
			$(x).css({'border-bottom-color':'#00bcd4','border-top-color':'#00bcd4'});
			$(x).siblings('.left-sub-show').css({'border-color':'#efefef','border-width':'1px','border-style':'solid'});
		},200);
		
	}, function() {
		clearTimeout(rtimer);
		y=this;
		rtimer1=setTimeout(function(){
			$(y).children('.ctrue').hide();
			$(y).siblings().children('.ctrue').hide();
			$(y).css({'border-color':'#efefef','border-width':'1px','border-style':'solid'});
			$(y).siblings(".left-sub-show").css({'border-color':'#efefef','border-width':'1px','border-style':'solid'});
			$(y).siblings(".left-sub-show").children('.sm-click').removeClass('sign-more-change').addClass('sign-more');
			$(y).children('.sm-click').removeClass('sign-more-change').addClass('sign-more');
			$(y).siblings().children('.con-hide').hide();
			$(y).children('.con-hide').hide();
			
		},100)
	});	
	/* --------------------------tab栏-------------------------*/
	$('.sub').click(function(){
		var i=$(this).index();
			// 改变兄弟元素左边框的颜色
			$(this).siblings().children('a').css('border-left-color','#e6e6e6')
			// 改变兄弟元素上边框
			$(this).siblings().children('a').removeClass('sub-on');
			//添加点击样式
			$(this).children('a').addClass('sub-on');
			$(this).children('a').css('border-left-color','#ffe0b3');
			$(this).siblings().eq(2).children('a').css('border-right-color','#e6e6e6');
			//改变点击的下一个左边框的颜色
			$(this).siblings().eq(i).children('a').css('border-left-color','#ffe0b3');
			if(i==3){
				$(this).children('a').css('border-right-color','#ffe0b3');
			}else{
				$(this).children('a').css('border-right-color','#e6e6e6');
			}
			if(i==0){
				$(this).siblings().eq(0).children('a').children('i').removeClass('iconpng-note');
				$(this).siblings().eq(1).children('a').children('i').removeClass('iconpng-buy');
				$(this).siblings().eq(2).children('a').children('i').removeClass('iconpng-transfer');
				$(this).children('a').children('i').addClass('iconpngfly');
				$('.play-tab-bottom').children('div').eq(0).css('display','block');
				$('.play-tab-bottom').children('div').eq(1).css('display','none');
				$('.play-tab-bottom').children('div').eq(2).css('display','none');
				$('.play-tab-bottom').children('div').eq(3).css('display','none');
				console.log(i);
			}else if(i==1){
				$(this).siblings().eq(0).children('a').children('i').removeClass('iconpngfly');				
				$(this).siblings().eq(1).children('a').children('i').removeClass('iconpng-buy');
				$(this).siblings().eq(2).children('a').children('i').removeClass('iconpng-transfer');
				$(this).children('a').children('i').addClass('iconpng-note');
				$('.play-tab-bottom').children('div').eq(0).css('display','none');
				$('.play-tab-bottom').children('div').eq(1).css('display','block');
				$('.play-tab-bottom').children('div').eq(2).css('display','none');
				$('.play-tab-bottom').children('div').eq(3).css('display','none');
				console.log(i);
			}else if(i==2){
				$(this).siblings().eq(0).children('a').children('i').removeClass('iconpngfly');
				$(this).siblings().eq(1).children('a').children('i').removeClass('iconpng-note');
				$(this).siblings().eq(2).children('a').children('i').removeClass('iconpng-transfer');
				$(this).children('a').children('i').addClass('iconpng-buy');
				$('.play-tab-bottom').children('div').eq(0).css('display','none');
				$('.play-tab-bottom').children('div').eq(1).css('display','none');
				$('.play-tab-bottom').children('div').eq(2).css('display','block');
				$('.play-tab-bottom').children('div').eq(3).css('display','none');
				console.log(i);
			}else if(i==3){
				$(this).siblings().eq(0).children('a').children('i').removeClass('iconpngfly');
				$(this).siblings().eq(1).children('a').children('i').removeClass('iconpng-note');
				$(this).siblings().eq(2).children('a').children('i').removeClass('iconpng-buy');
				$(this).children('a').children('i').addClass('iconpng-transfer');
				$('.play-tab-bottom').children('div').eq(0).css('display','none');
				$('.play-tab-bottom').children('div').eq(1).css('display','none');
				$('.play-tab-bottom').children('div').eq(2).css('display','none');
				$('.play-tab-bottom').children('div').eq(3).css('display','block');
				console.log(i);
			}
			
		})
	$('.play-tab-bottom-title a').click(function(){
		$(this).addClass('ptb-a-act');
		$(this).siblings('a').removeClass('ptb-a-act');
	});
	$('.play-tab-bottom-title1 a').click(function(){
		$(this).addClass('ptb-a-act1');
		$(this).siblings('a').removeClass('ptb-a-act1');
	})
	$('.play-tab-bottom-title a').click(function(event) {
		var i=$(this).index();
		if(i==0){
			$('.play-tab-bottom-detail').children('div').eq(1).css('display','block');
			$('.play-tab-bottom-detail').children('div').eq(2).css('display','none');

		}else{
			$('.play-tab-bottom-detail').children('div').eq(1).css('display','none');
			$('.play-tab-bottom-detail').children('div').eq(2).css('display','block');

		}
	});
	$('.play-tab-bottom-title1 a').click(function(event) {
		var i=$(this).index();
		if(i==0){
			$('.appear-list').children('div').eq(1).css('display','block');
			$('.appear-list').children('div').eq(2).css('display','none');

		}else{
			$('.appear-list').children('div').eq(1).css('display','none');
			$('.appear-list').children('div').eq(2).css('display','block');

		}
	});

	/*----------------------轮播图---------------------------*/
	var sowtimer=null;
	var si=0;

	function goto(){
		clearInterval(sowtimer);
		sowtimer=setInterval(function(){
			si++;
			if(si>4){
				si=0;
			}
			$('.sowing-con li').eq(si).fadeIn(400);
			$('.sowing-con li').eq(si).siblings().fadeOut();
			
			$('.sowing-list li').eq(si).css('background','#ff7100');
			$('.sowing-list li').eq(si).siblings().css('background','#bbb');
			
		},3000);
	}
	goto();
	$('.sowing').mouseenter(function(){
		clearInterval(sowtimer);
	});
	$('.sowing').mouseleave(function(){
		goto();
	});
	
	$('.sowing-list li').click(function(){
		$(this).css('background','#ff7100');
		$(this).siblings().css('background','#bbb');
		var j=$(this).index();
		$('.sowing-con li').eq(j).fadeIn(1500);
		$('.sowing-con li').eq(j).siblings().fadeOut();

	});
	$('.litt-menu a').click(function(){
		$(this).addClass('lm-cur').siblings().removeClass('lm-cur');
		var i=$(this).index();
		$('.season-hot-right ul').eq(i).show().siblings('ul').hide();
		console.log('haha');
	});
	$('.l-fly-menu a').click(function(){
		$(this).addClass('lf-film-cur').siblings().removeClass('lf-film-cur');
		var i=$(this).index();
		$('.l-fly-trip-right ul').eq(i).show().siblings('ul').hide();
		console.log('haha');
	});
	$(window).scroll(function(e){
		if($(this).scrollTop()>980){
			$('.go-top').css('display','block');
		}else{
			$('.go-top').css('display','none');
		}
	});
	$('.go-top').click(function(e){
		$('html,body').animate({'scrollTop':0},1000);
	});

	//右上角菜单栏
	$('.order').mouseenter(function(){
		$('.order i').addClass('arr_2');	
		$('.order p').addClass('order_p_border')
		$('.order ul').show();
	})
	$('.order').mouseleave(function(){
		$('.order i').removeClass('arr_2');	
		$('.order p').removeClass('order_p_border')
		$('.order ul').hide();
	})	
	
	//页面每加载一次，导航栏上方小图片，随机一个出现
	var n=parseInt(Math.random()*($('.nav_img img').length));
	$('.nav_img img').eq(n).show().siblings().hide();
	
	
	//导航栏子级显示	
	var timer1;
	$('.nav>ul li').hover(function(){
		clearTimeout(timer1);
		var index1=$(this).attr('index');
		if(index1!=-1){
			$(this).addClass('current_background').siblings().removeClass('current_background');
			$('.subnav').eq(index1).stop().show().siblings('.subnav').stop().hide();
		}else{
			$('.nav>ul li').removeClass('current_background');
			$('.subnav').stop().hide();
		}
	},function(){
		
		timer1=setTimeout(function(){
			$('.nav>ul li').removeClass('current_background');
			$('.subnav').stop().hide();			
		},1)
		
	})
	
	$('.subnav').hover(function(){
		console.log($(this).height())
		clearTimeout(timer1);
		$(this).stop().show();
			
	},function(){
		console.log($(this).height())
		$('.nav>ul li').removeClass('current_background');
		$('.subnav').stop().hide();			
	});


});









