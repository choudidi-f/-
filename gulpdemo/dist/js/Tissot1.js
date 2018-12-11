$(function(){
				var oBtns = $('#play').find('ol').find('li');
				var oUl = $('#play').find('ul');
				var olis = oUl.find('li');
				var now = 0;
				var timer = null;
				oBtns.click(function(){
					now = $(this).index();
					tab();
				})

				function tab(){
					oBtns.attr('class','');
					oBtns.eq(now).attr('class','active');
					oUl.stop().animate({top: -357 * now},500,function(){
						if(olis.size() - 1 == now){
							now = 0;
							oUl.css('top',0);
						}
					});
				}

				function timerInner(){
					now++;
					tab();
					if(now == olis.size() - 1){
						oBtns.eq(0).attr('class', 'active');
					}
				}
				timer = setInterval(timerInner,2000);

				$('#play').hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(timerInner,2000);
				})
				
				//注册
				

				$('#register_').css('width',184).css('height',40).css('background','#e4141d').css('color','white').css('border',0);
				$('#join').css('display','block').css('margin-top',23);
				$('#iphone').css('background','white');
				$('#emil').css('background','white');

				//登陆

				
				$('#btn').css('background','#e4141d').css('width',212)
				.css('margin-left',98).css('height',40).css('color','white')
				.css('border',0).css('margin-top',45).css('margin-bottom',55);
				$('#create_username').css('color','white').css('width',243)
				.css('height',40).css('margin-left',95).css('background','#e4141d')
				.css('border',0);
				$('#username').css('width',451).css('height',35);
				$('#password').css('width',451).css('height',35);
				$('#create_username').css('margin-top',39);
				
				//购物车
				$('#clear_car').css('width',100).css('height',40);

		
		
			})		
