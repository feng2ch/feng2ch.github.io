$(function(){
	var k=$(window).height();
	
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({
		navigation:true,
		navigationPosition:"left",

		afterLoad:function(anchorLink,index){
			$(".next").fadeOut();
			if(index==2){
				$(".search").show().animate({"right":370},1500,"easeOutBack",function(){
					$(".search-words").animate({"opacity":1},400,function(){
						$(".search").hide();
						$(".search-02-1").show().animate({"height":30,"right":250,
							"bottom":452},500, function(){
								 
							});
						$(".goods-441-218").show().animate({"height":200,"width":440,"left":270},500);
						$(".words-02").animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						})
					})
				})

			}
		},
		onLeave:function(index,nextIndex,direction){
			if(index==2&&nextIndex==3){

			$(".shirt01").show().animate({"bottom":-(k-250),"width":210,"height":170,"left":370},2000
				,function(){
					$(".img-01-a").animate({"opacity":1},500,function(){
						$(".btn-01-a").animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						});
						
					})
			});
		    $(".cover").show();
		}
		if(index==3&&nextIndex==4){
			$(".shirt-02-207-166").hide();
			$(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function(){
				$(this).hide();  
				$(".carli").show();
				$(".car").animate({"left":1800},3000,"easeInElastic",function(){
					$(".note").show();
					$(".note-img,.words-04-a").animate({"opacity":1},700,function(){
						$(".next").fadeIn();
					});
				});
			});
		}

	

		if(index==4&&nextIndex==5){
			$(".hand-05").animate({"bottom":50},1000,function(){
				    $(".mouse-05-a").fadeIn();
					$(".t1f-05").animate({"bottom":20},300,function(){
					$(".order-05").animate({"opacity":1},300,function(){
						$(".words-05").addClass("words-05-a");
						$(".next").fadeIn();
					});

				})
			});
		}

		if(index==5&&nextIndex==6){
			$(".t1f-05").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function(){
				$(".t1f-05").hide();
			});
			$(".box").animate({"left":"38%"},1400);
			$(".box").animate({"top":600},1400,function(){
				$(".box").hide();
                  $(".section6").animate({"backgroundPositionX":"100%"},2000,function(){
                  	$(".man").animate({"height":300,"bottom":116},1500,function(){
                  		$(".man").animate({"left":"48%"},1200,function(){
                  			$(".door").animate({"opacity":1},200,function(){
                  				$(".women").show().animate({"left":"68%","height":276,"bottom":116},1400,function(){
                  					$(".qsh").show();
                  					$(".next").fadeIn();
                  				});
                  			});
                  		});
                  		
                  	});

                  	});
                  $(".words-06-a").show().animate({"left":"47%"},2000);
                  	
                    
                  });
                  
			}
		if(index==6&&nextIndex==7){
		       setTimeout(function(){
		       	$(".star").animate({"width":110},300,function(){
		       		$(".good-07").animate({"opacity":1},300);
		       		$(".next").fadeIn();
		       	});
		       },2000);

              
		}


		$(".beginShopping").hover(function(){
			$(".btn-08-a").toggle();
		});
		//获取浏览器对象document 获得鼠标移动mousemove
		$(document).mousemove(function(event){
			var x=event.pageX-$(".hand-08").width()/2;
			var y=event.pageY+10;
			var minY=k-520;
			if(y<minY){
				y=minY;
			}
			$(".hand-08").css({"left":x,"top":y});
			});
		$(".again").click(function(event){
			$.fn.fullpage.moveTo(1);
			$("img,.move").attr("style","");
		});


	},

	});
});