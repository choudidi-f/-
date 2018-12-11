window.onload = function(){
		$.ajax({
					url: "../data/menu.json",
					success: function(arr){
						for(var i = 0; i < arr.length; i++){
							$(`<li class = 'goods_item'>
								<div class = "goods_pic">
									<img src="${arr[i].img}" alt="">
								</div>
								<div class = 'goods_title'>
									<p>【天梭】天梭力洛克系列机械手表</p>
								</div>
								<div class = 'number_'>
									<p>T0064071603300</p>
								</div>
								<div class = 'money_title'>
									<p>￥4,2000</p>
								</div>
								<div class = 'sc'>
									<div id = "${arr[i].id}" class = 'sc_btn'>立即购买</div>
								</div>
							</li>`)
							.appendTo($('.goods_box ul'));
							}
						
						}
				})
	}