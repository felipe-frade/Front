$(document).ready(function(){
	$('.ok').on('click', function(){
		$('.fundo').css('width', '100%');
		$('.fundo').css('transition', '1000ms');
	});

	$('.ok').on('focusout', function(){
		$('.fundo').css('width', '0%');
		$('.fundo').css('transition', '1000ms');
	});

	function show(elem){
		if($(elem) && $(elem).offset() != null){ return $(window).scrollTop() > $(elem).offset().top + $(elem).height(); }
		else{ return null; }
	};

	function notShow(elem){
		if($(elem) && $(elem).offset() != null){ return $(window).scrollTop() <= $(elem).offset().top + $(elem).height(); }
		else{ return null; }  
	};

	$(window).scroll(function(){
	  	if (show($('#oi11'))) {
	  		$('.sumida').css('left', '0%');
		}
		if (notShow($('#oi11'))) {
	  		$('.sumida').css('left', '-100%');
		}
	});

	$('#pequeno-1').on('click', function(){
		$(".circulo-grande").removeClass("dentro");
		$(".circulo1").addClass("dentro");
	});

	$('#pequeno-2').on('click', function(){
		$(".circulo-grande").removeClass("dentro");
		$(".circulo2").addClass("dentro");
	});

	$('#pequeno-3').on('click', function(){
		$(".circulo-grande").removeClass("dentro");
		$(".circulo3").addClass("dentro");
	});

	$('#pequeno-4').on('click', function(){
		$(".circulo-grande").removeClass("dentro");
		$(".circulo4").addClass("dentro");
	});

	$('#pequeno-12').on('click', function(){
		$(".circulo-grande2").removeClass("dentro2");
		$(".circulo12").addClass("dentro2");
	});

	$('#pequeno-22').on('click', function(){
		$(".circulo-grande2").removeClass("dentro2");
		$(".circulo22").addClass("dentro2");
	});

	$('#pequeno-32').on('click', function(){
		$(".circulo-grande2").removeClass("dentro2");
		$(".circulo32").addClass("dentro2");
	});

	$('#pequeno-42').on('click', function(){
		$(".circulo-grande2").removeClass("dentro2");
		$(".circulo42").addClass("dentro2");
	});  
});
