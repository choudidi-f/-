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
					 	 
				/*pic_div.onmouseout = function () {
					  span_move.style.display = 'none';
					  big_div.style.display = 'none';
				}*/
				
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

				$(function(){

				var oB1 = document.getElementById("b1");
				var oDesc = document.getElementById("desc");

					oB1.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB1.onmousemove = function(event){
						var e = event || window.event;
					}
					oB1.onmouseout = function(){
						
						oDesc.style.display = "none";
					}
			
		
			})		

//下拉菜单
		
			//官网推荐 下拉菜单
			$.ajax({
					url:"../data/menu--1.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>

								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	

								<div class = 'goods_img1'>
									<img src="${arr[i].img1}" alt="">
								</div>
							</li>`)
							.appendTo($('.goods_box-')).eq(i);
							}						
						}
					})		
		});


		//男士
		$(function(){
				var oB2 = document.getElementById("b2");
				var oDesc = document.getElementById("desc1");

					oB2.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB2.onmousemove = function(event){
						var e = event || window.event;
					}
					oB2.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu---2.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box1')).eq(i);
							}
						
						}
					})
			});

			//女士
		$(function(){
				var oB3 = document.getElementById("b3");
				var oDesc = document.getElementById("desc2");

					oB3.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB3.onmousemove = function(event){
						var e = event || window.event;
					}
					oB3.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu---2.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box2')).eq(i);
							}
						
						}
					})
			});

		//产品分类
		$(function(){
				var oB4 = document.getElementById("b4");
				var oDesc = document.getElementById("desc3");

					oB4.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB4.onmousemove = function(event){
						var e = event || window.event;
					}
					oB4.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu2.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_pic1'>
									${arr[i].title1}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box3')).eq(i);
							}
						
						}
					})
			});

		//场合
		$(function(){
				var oB5 = document.getElementById("b5");
				var oDesc = document.getElementById("desc4");

					oB5.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB5.onmousemove = function(event){
						var e = event || window.event;
					}
					oB5.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu3.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box4')).eq(i);
							}
						
						}
					})
			});

		//功能
		$(function(){
				var oB6 = document.getElementById("b6");
				var oDesc = document.getElementById("desc5");

					oB6.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB6.onmousemove = function(event){
						var e = event || window.event;
					}
					oB6.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu4.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box5')).eq(i);
							}
						
						}
					})
			});

		//价格区间
		$(function(){
				var oB7 = document.getElementById("b7");
				var oDesc = document.getElementById("desc6");

					oB7.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB7.onmousemove = function(event){
						var e = event || window.event;
					}
					oB7.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu5.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box6')).eq(i);
							}
						
						}
					})
			});

		//品牌专区
		$(function(){
				var oB8 = document.getElementById("b8");
				var oDesc = document.getElementById("desc7");

					oB8.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB8.onmousemove = function(event){
						var e = event || window.event;
					}
					oB8.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu6.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box7')).eq(i);
							}
						
						}
					})
			});

			//客户服务
			$(function(){
				var oB9 = document.getElementById("b9");
				var oDesc = document.getElementById("desc8");

					oB9.onmouseover = function(event){
						var e = event || window.event;
						oDesc.style.display = "block";
					}
					oB9.onmousemove = function(event){
						var e = event || window.event;
					}
					oB9.onmouseout = function(){
						//让div隐藏
						oDesc.style.display = "none";
					
					}

				$.ajax({
					url:"../data/menu9.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_title'>
								<div class = "goods_pic">
									${arr[i].title}
								</div>
								<div class = 'goods_img'>
									<img src="${arr[i].img}" alt="">
								</div>	
							</li>`)
							.appendTo($('.goods_box8')).eq(i);
							}
						
						}
					})
			});		
