$(document).ready(function() {

	//TYPEIT ANIMATION
	$('#header-slogan-typing').typeIt({
	     strings: ["Junior Front-End Developer", "Łukasz Pawłowicz - Portfolio"],
	     speed: 80,
	     breakLines: false,
	     autoStart: false,
	     loop: true
	});

	//CAROUSEL OPTIONS
	$('#quote-carousel').carousel({
	    pause: true,
	    interval: 4000,
	});

	//MOUSEMOVE PARALLAX
	var $scene = $("header"),
        $elem = $(".image-parallax")
        oldMousePositionX = 0,
        oldMousePositionY = 0;

    $elem.each(function(){
        $(this).css({
            "left": $(this).data("x"),
            "top": $(this).data("y"),
            "z-index": $(this).data("z")
        });
    });

    $scene.on("mouseenter", function(event){
        oldMousePositionX = event.offsetX;
        oldMousePositionY = event.offsetY;
    });

    $scene.on("mousemove", function(event){
        // console.log("mouseleave");
        var currentMousePositionX = event.offsetX;
           var currentMousePositionY = event.offsetY;
        
        // console.log(mouseMoveX, mouseMoveY);
        if ($(event.target).hasClass("element")) {
            currentMousePositionX += $(this).css("left");
            currentMousePositionY += $(this).css("top");
        }

        mouseMoveX = currentMousePositionX - oldMousePositionX;
        mouseMoveY = currentMousePositionY - oldMousePositionY;

        $elem.each(function() {
            var actualX = parseInt($(this).css("left")),
                actualY = parseInt($(this).css("top")),
                speed = parseFloat($(this).data("speed"));

            $(this).css({
                left: actualX + mouseMoveX * speed + "px",
                top: actualY + mouseMoveY * speed + "px"
            });

        });
        oldMousePositionX = currentMousePositionX;
        oldMousePositionY = currentMousePositionY;
    });

    //HOVER ANIMATION - TECHNOLOGY
    var $studyImage1 = $(".first-image");
    var $studyImage2 = $(".second-image");
    var $studyImage3 = $(".third-image");
    var $studyText = $("#study-section").find("p");
    var $techText = "Curabitur et dapibus leo. Donec eleifend pharetra sem, et interdum nunc semper vel. Sed interdum magna eu faucibus faucibus. Nulla varius faucibus arcu, eget aliquet tortor sollicitudin ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sollicitudin felis quis varius porta. Donec sit amet diam a elit pulvinar pretium.";
    console.log($studyText.text());

    $studyImage1.on("mouseenter", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text("World").fadeIn();
		});
	});
    $studyImage1.on("mouseleave", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text($techText).fadeIn();
		});
	});
	$studyImage2.on("mouseenter", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text("World").fadeIn();
		});
	});
    $studyImage2.on("mouseleave", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text($techText).fadeIn();
		});
	});
	$studyImage3.on("mouseenter", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text("World").fadeIn();
		});
	});
    $studyImage3.on("mouseleave", function() { 
    	$studyText.fadeOut(function() {
  			$(this).text($techText).fadeIn();
		});
	});

});