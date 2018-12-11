define(['parabola','jquery'],function(parabola, $){
	function ballMove(startNode){
					$("#ball").css({
						left: $(startNode).offset().left,
						top: $(startNode).offset().top,
						display: "block"
					})

					var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
					var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;
					//配置参数
					var bool = new Parabola({
						el: "#ball",
						targetEl: null,
						offset: [offsetX, offsetY],
						curvature: 0.0005,
						duration: 400,
						callback:function(){
						$("#ball").css('display', 'none');
				}
			})

		bool.start();
	}
	return {
		ballMove: ballMove
	}
})