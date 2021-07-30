$(document).ready(function(){

	//EFECTOS DEL MENU DEL HEADER

	$('.contenedor_logo_menu a').each(function(index,elemento){

		$(this).css({

			'top' : '-200px'

		});

		$(this).animate({ 'top' : '0'}, 1000);
	});

	$('.contenedor_logo_menu img').each(function(index,elemento){

		$(this).css({

			'opacity' : '0'

		});

		$(this).animate({ 'opacity' : '1'}, 2500);
	});
	
	//SCROLLEO DE PANTALLA con click a sección

	var acercaDe = $('#acercade').offset().top;
	var trabajos = $('#trabajos').offset().top;
	var contacto = $('#contacto').offset().top;
	var info = $('#informacion').offset().top;
	var irarriba = $('#inicio-logo').offset().top;

	$('#btn-acercade').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({

			scrollTop: acercaDe - 180
		},500);

	});

	$('#btn-trabajos').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({

			scrollTop: trabajos
		},500);

	});

	$('#btn-contacto').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({

			scrollTop: contacto
		},500);

	});

	$('#btn-info').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({

			scrollTop: info
		},500);

	});

	$('#btn-irarriba').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({

			scrollTop: irarriba
		},500);

	});	

	
	
});