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
	
	
	
	
	//左侧栏
	$('.sidebar_left ul li').click(function(){
		$(this).children('a').addClass('current').parent().siblings().children('a').removeClass('current');
		
		var index=$(this).index();
		
		$('.sidebar_right .sidebar_content').eq(index).show().siblings().hide();
		
		
	})
	
	/*------------- -----------------------------------机票*/
	
	$('.sidebar_c1 .sidebar_content_nav_n li').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');
		
		$('.sidebar_c1 .sidebar_content_main>div').eq($(this).index()).show().siblings().hide();
	})
	
	/*--------国内机票 */
	$('input[name="radio1"]').click(function(){
		var index=$(this).index();
		if(index==0){
			sidebar_cm($('.sidebar_cm1 .sidebar_content_main_info .sidebar1_date'),0);  //调用函数
			
		}else if(index==2){
			sidebar_cm($('.sidebar_cm1 .sidebar_content_main_info .sidebar1_date'),2);  //调用函数
			
		}
		
	})

	/*-------国际.港澳台机票 */
	$('input[name="radio11"]').click(function(){
		var index=$(this).index();
		if(index==0){
			$('.sidebar_cm2 .sidebar_content_main_info>div').show();
			$('.smart_search, .multipass,.clear_').hide();
			sidebar_cm($('.sidebar_cm2 .sidebar_content_main_info .sidebar1_date'),0);  //调用函数
			
		}else if(index==2){
			$('.sidebar_cm2 .sidebar_content_main_info>div').show();
			$('.smart_search, .multipass,.clear_').hide();
			sidebar_cm($('.sidebar_cm2 .sidebar_content_main_info .sidebar1_date'),2);  //调用函数	
		}else if(index==4){
			$('.sidebar_cm2 .sidebar_content_main_info>div').hide();
			$('.smart_search, .clear_').show();
		}else{
			$('.sidebar_cm2 .sidebar_content_main_info>div').hide();
			$('.multipass, .clear_').show();
		}
		
	})


	/*--------------日期*/
	$('.sidebar_content_main_info .sidebar1_date').click(function(){
		
		$(this).parent().siblings('.sidebar_content_main_radio').children('input')[1].checked=true;

		sidebar_cm($(this),2); //调用函数
																																																									
	})


	function sidebar_cm(e,index){
			if(index==0){
				e.removeClass('return1');
				e.children('input').val('');
				e.children('p').html('');
			}else if(index==2){
				e.addClass('return1');
				e.children('input').val('2018-06-18');
				e.children('p').html('后天');
			}
	}



	
	/*-----交换*/
	$('.sidebar1_change').click(function(){

		var temp1=$(this).siblings('.sidebar1_go_reach').eq(0).children('input').val();
		var temp2=$(this).siblings('.sidebar1_go_reach').eq(1).children('input').val();
		$(this).siblings('.sidebar1_go_reach').eq(0).children('input').val(temp2);
		$(this).siblings('.sidebar1_go_reach').eq(1).children('input').val(temp1);
	})



	/*----------------------------------------酒店*/
	$('.sidebar_c2 .sidebar_content_nav_n li').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');
		
		$('.sidebar_c2 .sidebar_content_main>div').eq($(this).index()).show().siblings().hide();
	})

	/*----------------------------------------度假*/
	$('.sidebar_c4 .sidebar_content_nav_n li').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');

		if($(this).index()==4){
			$('.sidebar_c4 .sidebar_content_main>div').eq(($(this).index()-1)).show().siblings().hide();
			$('.sidebar_c4 .sidebar_content_footer>ul').eq(($(this).index()-1)).show().siblings().hide();
		}else{
			$('.sidebar_c4 .sidebar_content_main>div').eq($(this).index()).show().siblings().hide();
			$('.sidebar_c4 .sidebar_content_footer>ul').eq($(this).index()).show().siblings().hide();
		}
		
		
	})


	/*----------------------------------------门票*/
	$('.sidebar_c5 .sidebar_content_nav_n li').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');

		$('.sidebar_c5 .sidebar_content_main>div').eq($(this).index()).show().siblings().hide();
		$('.sidebar_c5 .sidebar_content_footer>ul').eq($(this).index()).show().siblings().hide();
		
		
	})

	/*----------------------------------------团购*/
	/*----------便捷查找酒店*/
	$('.sidebar_c6 .sidebar6_footer_nav span').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');

		$('.sidebar_c6 .sidebar6_footer_main>ol').eq($(this).index()).show().siblings().hide();
		
		
	})
	/*----------------------------------------车车*/

	$('.sidebar_c7 .sidebar_content_nav_n li').click(function(){
		$(this).children('a').addClass('current');
		$(this).siblings().children('a').removeClass('current');

		$('.sidebar_c7 .sidebar_content_main>div').eq($(this).index()).show().siblings().hide();
		$('.sidebar_c7 .sidebar_content_footer>img').eq($(this).index()).show().siblings().hide();
			
	})
	
	$('input[name="radio3"]').click(function(){
		var index=$(this).index();
		if(index==0){
			$('.sidebar7_cm1 .sidebar_content_main_info>div').show();
			$('.sidebar7_train, .artport').hide();
			
		}else if(index==2){
			$('.sidebar7_cm1 .sidebar_content_main_info>div').hide();
			$('.artport, .clear_').show();	
		}else if(index==4){
			$('.sidebar7_cm1 .sidebar_content_main_info>div').show();
			$('.sidebar7_plane, .artport').hide();
		}else{
			$('.sidebar7_cm1 .sidebar_content_main_info>div').show();
			$('.sidebar7_plane, .artport').hide();
		}
		
	})
	

	
	/*----------------------------------------自由行*/
	$('input[name="radio4"]').click(function(){
		var index=$(this).index();
		if(index==0){
			$('.sidebar_c8 .sidebar_content_main_info .sidebar8_return').show();			
		}else if(index==2){
			$('.sidebar_c8 .sidebar_content_main_info .sidebar8_return').hide();
			
		}
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//-------------------------------discount  特惠
	$('.discount .content_title ul li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.discount_content').eq($(this).index()).show().siblings().hide();
		
	})
	
	//----------------------------------轮播图
	var timer2=null;
		var num=0;

		function go(){
			clearInterval(timer2);
			timer2=setInterval(function(){
				num++;	
				if(num>5){
					num=0;
					$('#banner_pic').css({'left':-945*num});
					
					setTimeout(function(){
						num=1;

						lis_pic($('ol#banner_ol li').eq(num),num);//圆圈的背景颜色和图片切换

					},0.0001)

				}else{
					
					if(num==5){
						lis_pic($('ol#banner_ol li').eq(0),num);//圆圈的背景颜色和图片切换
					}else{
						lis_pic($('ol#banner_ol li').eq(num),num);//圆圈的背景颜色和图片切换
					}					
				}			
			},1500);
		}

		go();
		
		$('.banner').hover(function(){
			console.log("hhah")
			clearInterval(timer2);
		},function(){
			go();
		})
		
		//圆圈		
		$('ol#banner_ol li').click(function(){
			num=$(this).index();
			lis_pic($(this),num);//圆圈的背景颜色和图片切换
		})

		//圆圈的背景颜色和图片切换
		function lis_pic(e,n){
			
			e.addClass('current').siblings().removeClass('current');
			$('#banner_pic').animate({'left':-945*n});

		}
		
		
		//---------------------超值酒店团购推荐 导航栏
		$('.hotel .content_title ul li').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.hotel .content_right ul').eq($(this).index()).show().siblings().hide();
		})
		
		
		//---------------------旅游攻略
		//------
		$('.content_right_wrap .left').hover(function(){
			$('.content_right_wrap .left .box_con').stop().animate({'bottom':'0px'})			
			
		},function(){
			$('.content_right_wrap .left .box_con').stop().animate({'bottom':'-60px'})			
		})
		
		$('.content_right_wrap .right ul>li').hover(function(){
			$(this).children('.box_con').stop().animate({'bottom':'0px'})			
			
		},function(){
			$(this).children('.box_con').stop().animate({'bottom':'-60px'})			
		})
		
		//----旅游攻略 导航栏
		$('.trip .content_title ul li').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.content_right_wrap').eq($(this).index()).show().siblings().hide();
		})
		
		
		//-------------------------骆驼书
		$('.book_content ul li').hover(function(){
			$(this).children('.book_details').stop().show();
		},function(){
			$(this).children('.book_details').stop().hide();
		})
		//----骆驼书 导航栏
		
		$('.book .content_title ul li').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.book_content').eq($(this).index()).show().siblings().hide();
		})
		
		
		
		
		/*--------------------------footer*/
		$(".toplink li").eq(0).hover(function(){
					$(".drop_down").show();
					$(this).children('.d-toplink-border').css({"width":"106","border-width":"1px","border-style":"solid","border-color":"#ddd"});
					$(this).children('.d-toplink-border').children('a').css({"color":"#ff8200"});
					$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-moreunfold').addClass('iconfont icon-less').css('color','#ff8200');
			},function(){
					$(this).children('.d-toplink-border').css({"color":"#ff8200"});
					$(this).children('.d-toplink-border').css({"width":"106","border-width":"1px","border-style":"solid","border-color":"transparent"});
					$(".drop_down").hide();
					$(this).children('.d-toplink-border').children('a').css("color","#999");
					$(this).children('.d-toplink-border').children('i').removeClass('iconfont icon-less').addClass('iconfont icon-moreunfold').css('color','#999');
			});

			$(".main_right_login input").click(function(){
					$(this).siblings().addClass('id-way');
					$(this).parent().siblings().children('label').removeClass('id-way');
	
	
			});
		

})