$(function(){
	
	//刚开始文档加载时的动画
	//-------
	$('.zhanwei').slideUp(1000);
	
	//右上角菜单栏	
	$('.order').hover(function(){
		console.log("order")		
		$('.order i').addClass('arr_2');	
		$('.order p').addClass('order_p_border')
		$('.order ul').stop().show();
	},function(){
		
		$('.order i').removeClass('arr_2');	
		$('.order p').removeClass('order_p_border')
		$('.order ul').stop().hide();
	})	
	

	//页面每加载一次，导航栏上方小图片，随机一个出现
	var n=parseInt(Math.random()*($('.nav_img img').length));
	$('.nav_img img').eq(n).css('opacity', 1).siblings().css('opacity', 0);
	
	
	//导航栏子级显示	
	var timer2;
	$('.nav>ul li').hover(function(){
		clearTimeout(timer2);
		var index1=$(this).attr('index');
		if(index1!=-1){

			$(this).addClass('current_background').siblings().removeClass('current_background');
			$('.subnav').eq(index1).stop().show().siblings('.subnav').stop().hide();
			$('.subnav').eq(index1).stop().show().siblings('.subnav').css({'top':$('.nav').height()})
		}else{
			$('.nav>ul li').removeClass('current_background');
			$('.subnav').stop().hide();
		}
	},function(){
		
		timer2=setTimeout(function(){
			$('.nav>ul li').removeClass('current_background');
			$('.subnav').stop().hide();			
		},1)
		
	})
	
	$('.subnav').hover(function(){
		clearTimeout(timer2);
		$(this).stop().show();
		
	},function(){
		$('.nav>ul li').removeClass('current_background');
		$('.subnav').stop().hide();			
	})
	// 轮播图
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
			
			$('.sowing-list li').eq(si).css('border-color','#ff7100');
			$('.sowing-list li').eq(si).siblings().css('border-color','#bbb');
			
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
		$(this).css('border-color','#ff7100');
		$(this).siblings().css('border-color','#bbb');
		var j=$(this).index();
		$('.sowing-con li').eq(j).fadeIn(1500);
		$('.sowing-con li').eq(j).siblings().fadeOut();

	});

		// 鼠标上移，背景改变颜色
		$(".con-container li").hover(function(){
			$(this).children().children().children('.ts-film-bottom').stop().animate({'bottom':'20'},600);
			$(this).children().children().children('.ts-film-inner').stop().animate({'bottom':'20'},600);
			$(this).children().children('.ts-film').css('background', 'rgba(0,0,0,0.4)');
			$(this).children().children().children('.ts-film-inner').css('opacity', '0');
			$(this).children().children('.ts-film').children().children('.bao-safty').stop().show();
			$(this).children().children('.ts-film').children().children('.ts-film-safty').css({'font-size':'14px','color':'#fff'});
			
			console.log('hehe');
		},function(){
			$(this).children().children().children('.ts-film-bottom').stop().animate({'bottom':'-190'},600);
			$(this).children().children().children('.ts-film-inner').css('opacity', '0.8');
			$(this).children().children().children('.ts-film-inner').stop().animate({'bottom':'-210'},600);
			$(this).children().children('.ts-film').children().children('.bao-safty').stop().hide();
			$(this).children().children('.ts-film').css('background', 'rgba(0,0,0,0)');
			$(this).children().children('.ts-film').children().children('.ts-film-safty').css({'font-size':'16px','color':'#333'});
			
		});



		$('.wrap-h').hover(function(){
			$(this).children('.wrap-code').stop().animate({'left':'0'},600);
		},function(){
			$(this).children('.wrap-code').stop().animate({'left':'-174'},600);
		})
		$(".toplink li").eq(0).hover(function(){
			$(".drop_down").show();
			$(this).children('.d-toplink-border').css({"width":"101","border-width":"1px","border-style":"solid","border-color":"#ddd"});
			$(this).children('.d-toplink-border').children('a').css({"color":"#ff8200"});
			$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-moreunfold').addClass('iconfont icon-less').css('color','#ff8200');
		},function(){
			$(this).children('.d-toplink-border').css({"color":"#ff8200"});
			$(this).children('.d-toplink-border').css({"width":"101","border-width":"1px","border-style":"solid","border-color":"transparent"});
			$(".drop_down").hide();
			$(this).children('.d-toplink-border').children('a').css("color","#ddd");
			$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-less').addClass('iconfont icon-moreunfold').css('color','#999');
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


		})


