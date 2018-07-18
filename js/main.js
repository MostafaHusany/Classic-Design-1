$(function() {
	
	// Dynamic resizing
	$(window).on("resize", function() {
		
		// Header Resizing
		$(".header").css("height", $(window).height());
		
		// Related to responsivd navbar display
		if($(this).width() > 900) {
			$(".navbar .links-wraper").css("display", "block");
		}
		else {
			$(".navbar .links-wraper").css("display", "none");
		}
		
		// Adjust Bxslider List Item Center
		$(".bxslider").each(function() {
			var height =  ($(window).height() - $(".bxslider li").height())/2;
			$(this).css("paddingTop", height);
		});
	});
	
	// Header Resizing
	$(".header").css("height", $(window).height());
	
	// Activating bxslider
	var slider = $(".bxslider").bxSlider({
		pager:false,
	});
	slider.startAuto();
	
	// Adjust Bxslider List Item Center
	$(".bxslider").each(function() {
		var height =  ($(window).height() - $(".bxslider li").height())/2;
		$(this).css("paddingTop", height);
	});
	
	// Link active action 
	$(".navbar .links li").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	// Link-i click action
	$(".navbar .links-i").on("click", function() {
		$(".navbar .links-wraper").toggle(1000);
	});
	
	// Smooth Scroll
	$(".navbar li").on("click", function() {
		var $sectionSelctor = $($(this).data("scroll"));
		$("html, body").animate({
			scrollTop: $sectionSelctor.offset().top //- 50
		}, 600);
	});
	
	
	/*
	var flag = true;
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 100) {
			if (flag){
				$(".navbar").css({position:"fixed",
										width: "100%",
										top: 0,
										background:"rgba(0,0,0,0.5)"
									}).fadeIn(1000).children().children().css("margin", "10px 0");
				flag = false;
			}
			
		} else {
			$(".navbar").css({position:"relative",
									width: "100%",
									top: 0,
									background:"rgba(0,0,0,0)"
								});
			flag = true;
		}
		
	});
	*/
	
	
	// Testimonial Custmized Fade Slider, using self invoke slider
	(function autoSlider() {
		$(".t-fade-slider .active").each(function() {
			if(!$(this).is(":last-child")){
				$(this).delay(1000).fadeOut(1000, function(){
					$(this).removeClass("active")
							 .next()
							 .fadeIn(1000)
							 .addClass("active");
					autoSlider();
				});
			} else {
				$(this).delay(1000).removeClass("active").fadeOut(1000, function() {
					$(".t-fade-slider li").eq(0)
												 .fadeIn()
												 .addClass("active");
					autoSlider();
				});
				//autoSlider();
			}
		});
	}());// end of the self envoked function
	
	// Testimonial slider with bxslider
	/*var slider = $(".t-fade-slider").bxSlider({
		pager:false,
	});
	slider.startAuto();
	*/
});
