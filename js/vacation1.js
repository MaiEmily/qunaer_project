	$(function(){
		
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
	})

	})


