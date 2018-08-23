/*
* @Author: admin
* @Date:   2018-06-19 14:19:13
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-29 19:43:30
*/
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
	
	//切换地址时
	//-------------内容更换
	$('.change_place_content ul li a').click(function(){
		$('.change_name').html($(this).html());
	})
		
	//点击事件
	var arr=[];
	var m=0;
	$('.change>div:first-of-type').click(function(e){

		$('.change .change_place').toggle();

		if(m==0){
			for(var i=0;i<$('.change .change_place_title ul li').length;i++){
				
				var v=$('.change .change_place_content ul li').eq(i).position().top;
				arr.push(v);
			}
			m=1;
		}		
	})

	$('.change').click(function(e){
		e.stopPropagation()		
	})
	
	$(document).click(function(){
		$('.change .change_place').hide();
	})
		
	$('.change_place_content').scroll(function(){
		for(var i=$('.change_place_title ul li').length;i>=0;i--){
			if($('.change_place_content').scrollTop()>=arr[i]){
				$('.change_place_title ul li').eq(i).children('a').addClass('active');
				$('.change_place_title ul li').eq(i).siblings().children('a').removeClass('active');
				return false;
			}				
		}
	})
	
	
	$('.change .change_place_title ul li').click(function(){
		
		$(this).children('a').addClass('active')
		$(this).siblings().children('a').removeClass('active');
		var v=arr[$(this).index()];
		
		$('.change .change_place_content').animate({'scrollTop':v})
	})
	
	
	//更多
	//more1 more2

	var arr_more1=[];
	var arr_more2=[];
	var m_more1=0;
	var m_more2=0;
	var flag=0;

	$('.more_click>div:first-of-type').click(function(e){
		if($(this).parent().hasClass('more1')){
			flag=1;
			$(this).siblings().toggle();
			$('.more2').children('.change_place').hide();
			$('.change .change_place').hide();

			if(m_more1==0){
				for(var i=0;i<$('.more1 .change_place_title ul li').length;i++){
					
					var v=$('.more1 .change_place_content ul li').eq(i).position().top;
					arr_more1.push(v);

					m_more1=1;
				}
			}
		}else{
			flag=2;
			$(this).siblings().toggle();
			$('.more1').children('.change_place').hide();
			$('.change .change_place').hide();

			if(m_more2==0){
				for(var i=0;i<$('.more2 .change_place_title ul li').length;i++){
					
					var v=$('.more2 .change_place_content ul li').eq(i).position().top;
					arr_more2.push(v);

					m_more2=1;
				}
			}
		}
		
		
	})
	$('.more_click').click(function(e){
		e.stopPropagation()		
	})
	
	$(document).click(function(){
		$('.more_click .change_place').hide();
	})
	
	$('.more_click .change_place_content').scroll(function(){
		for(var i=$('.more_click .change_place_title ul li').length;i>=0;i--){
			var v;
			if(flag==1){
				v=arr_more1[i];
			}else{
				v=arr_more2[i];
			}
			if($('.more_click .change_place_content').scrollTop()>=v){
				$('.more_click .change_place_title ul li').eq(i).children('a').addClass('active');
				$('.more_click .change_place_title ul li').eq(i).siblings().children('a').removeClass('active');
				return false;
			}				
		}
	})



	$('.more_click .change_place_title ul li').click(function(){
		$(this).children('a').addClass('active')
		$(this).siblings().children('a').removeClass('active');
		var v;
		if(flag==1){ //more1
			v=arr_more1[$(this).index()];		
		}else{ //more2
			v=arr_more2[$(this).index()];
		}
		
		$(this).parent().parent().siblings('.change_place_content').animate({'scrollTop':v})
	})
	
	
	//more3
	$('.more3').click(function(){
		var li_height=$('.situation>ul>li:nth-of-type(4)').outerHeight()-1;
		var p_height=$('.situation>ul>li:nth-of-type(4) p').outerHeight();
		if(li_height!=p_height){
			$('.situation>ul>li:nth-of-type(4)').animate({'height':p_height});
		}else{
			$('.situation>ul>li:nth-of-type(4)').animate({'height':52+'px'});
		}
		
	})
		
		

	
	//条件 填写价格区间时
	$('.sure input').click(function(){
		$('.sure').addClass('active');
		
	})
	$('.sure i').click(function(){
		$('.sure').removeClass('active');
	})
	
	//条件 选择陷阱红包时	
	$('.condition>ul:nth-of-type(1)>li:nth-of-type(5) i').click(function(){
		$(this).addClass('active');
		
	})
	
	//-------------------------------------------------------------分页
	//------初始
	var total=$('.product_info>ul>li').length; //总数据个数
	var each_page=6;	//每页显示6条数据
	var total_page1=Math.ceil(total/each_page); //总页数
	var current_page=1; //当前的页码	
	product_show();//调用函数 商品展示
	
	$('.product_page b').hide();
	$('.pre').hide();
	
	$('.total_page').html(total_page1);
	$('.a6,.a7,.a8').hide();
	
	if(total_page1>(parseInt($('.a8').html())-1)){
		console.log('hhahah')
		$('.dot2').show();
	}else{
		$('.dot2').hide();
	}

	//---------------点击事件
	
	$('.product_page a').click(function(){		
		
		if(!isNaN($(this).html())){ //点击页数时
			var temp_page=parseInt($(this).html());//获取当前点击的页数
			if(current_page!=temp_page){ //点击的不是当前页数时，
				
				current_page=temp_page;
				change_page(temp_page);//调用函数		
			}	
			
			
		}else{  //点击“上一页”、“下一页”时
			console.log($(this).html())
			if($(this).html()=='上一页'){
				current_page=current_page-1;
				change_page(current_page);//调用函数
				
			}else{
				current_page=current_page+1;
				change_page(current_page);//调用函数
				
			}
		}
		
		
			
	})
	
	//商品展示右上角的“上一页”、“下一页”
	$('.page_top').click(function(){
		if($(this).children('span').html()=='上一页'){
			if(current_page!=1){
				current_page=current_page-1;
				change_page(current_page);//调用函数
			}			
		}else{
			if(current_page!=total_page1){
				current_page=current_page+1;
				change_page(current_page);//调用函数
			}	
		}
		
		
	})
	
	function product_show(){
		$('.product_info>ul>li').hide();
		for(var i=(current_page-1)*each_page;i<current_page*each_page;i++){
			$('.product_info>ul>li').eq(i).show();
		}
	}
	
	
	
	function change_page(c_page){
		
		if(c_page<=6 ){
			$('.btn').eq(c_page-1).addClass('current').siblings('.btn').removeClass('current'); //按钮变色
					
		}else if(c_page==total_page1-2){
			$('.a7').addClass('current').siblings('.btn').removeClass('current'); //按钮变色
		}else if(c_page==total_page1-1) {
			$('.a8').addClass('current').siblings('.btn').removeClass('current'); //按钮变色
		}else if(c_page==total_page1) {
			$('.total_page').addClass('current').siblings('.btn').removeClass('current'); //按钮变色
		}else{
			$('.a6').addClass('current').siblings('.btn').removeClass('current'); //按钮变色
		}
		
		//“上一页”按钮的显示
		if(c_page>=2){
			$('.pre').show();
		}else{
			$('.pre').hide();
		}
		//“下一页”按钮的显示
		if(c_page==total_page1){
			$('.next').hide()
		}else{
			$('.next').show();
		}
		
		if(c_page>=4){
			$('.a6').show();
		}else{
			$('.a6').hide();
		}
				
		if(c_page>=5){
			$('.a7').show();
		}else{
			$('.a7').hide();
		}
		if(c_page>=6){
			$('.a8').show();
		}else{
			$('.a8').hide();
		}	
		if(c_page<=6){
			for(var i=1;i<=8;i++){
				$('.btn').eq(i-1).html(i);
			}
		}
				
		if(c_page>=7 &&c_page<=total_page1-3){
					
			$('.a4').html(c_page-2);
			$('.a5').html(c_page-1);
			$('.a6').html(c_page);
			$('.a7').html(c_page+1);
			$('.a8').html(c_page+2);					
		}
		if(c_page>=7){
			$('.dot1').show();					
		}else{
			$('.dot1').hide();
		}
		if(c_page<=total_page1-4){
			$('.dot2').show();
		}else{
			$('.dot2').hide();
		}
				
		if(c_page==total_page1){
			$('.a4').html(c_page-5);
			$('.a5').html(c_page-4);
			$('.a6').html(c_page-3);
			$('.a7').html(c_page-2);
			$('.a8').html(c_page-1);					
		}
		if(c_page==total_page1-2){
			$('.a4').html(c_page-3);
			$('.a5').html(c_page-2);
			$('.a6').html(c_page-1);
			$('.a7').html(c_page);
			$('.a8').html(c_page+1);					
		}	
			
		
		$('.now_page').html(current_page);
		if(current_page==1){
			$('.lastpage').parent().addClass('active');
		}else{
			$('.lastpage').parent().removeClass('active');
		}
		if(current_page==total_page1){
			$('.nextpage').parent().addClass('active');
		}else{
			$('.nextpage').parent().removeClass('active');
		}
		
		product_show();//调用函数 商品展示
				
		
	}
	
	
	//footer
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
	
	
	
	//回到顶部
	$('.help ul li:nth-of-type(4)').click(function(e){
		e.stopPropagation();
		$('html,body').stop().animate({'scrollTop':0},600);
	})
						

})