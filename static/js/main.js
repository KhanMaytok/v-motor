app = {
	validar: function(element) {
		var $element = $(element);
		$("body").on("keypress", element, function(event) {
			var patternLetter = $(this).attr("data-expresion");
			if (patternLetter == "number") {
				patternLetter = /\d{1,9}$/g
			} else if (patternLetter == "text") {
				patternLetter = /([A-Za-zñÑáéíóúÁÉÍÓÚ\s]+)/ 
			}
			var inputValue = event.keyCode || event.charCode;
			// console.log(inputValue)
			// 8 delet 37 direccion izq, 39 direccion derecha, 46 supr
			if(inputValue!=8 && inputValue!=37 && inputValue!=39 && inputValue!=46){
				var charStr = String.fromCharCode(inputValue);
				!patternLetter.test(charStr) ? event.preventDefault() : console.log("correcto")				
			}

		})
	}
};
	
var inputs = document.getElementsByClassName('form-input');
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup',function() {
		if(this.value.length>=1){
			this.nextElementSibling.classList.add('fijar');
		}else{
			this.nextElementSibling.classList.remove('fijar');
		}
	});
	inputs[i].addEventListener("change", function() {
		if(this.value == ""){
			this.nextElementSibling.classList.remove('fijar');
		}else{
			this.nextElementSibling.classList.add('fijar');
		}
	});
}
$(function(){      
	if ($(".validKeypress").length > 0) { //validador number - text form
		app.validar(".validKeypress")
	}      
	var menu_data = $('.menu-sidebar').attr('data-menu');

	if (menu_data == 'right-in') {
	    $('body').removeClass('left-in');
	    $('body').removeClass('left-in');
	    $('body').addClass('right-in');
	}


    function height_header(){
    	var height_header_sub = 0
    	if ($(window).width() <= 1024) {
    		height_header_sub = 60;
    		
    	}else{
    		height_header_sub = 70;
    		
    	}
    	// CUANDO EL MENU SIDEBAR ESTA DEBAJO DEL HEADER
        //$('.cnt-wrapper').css('padding-top', height_header_sub); 


        ScrollTop = 0;
        // CUANDO EL MENU SIDEBAR ESTA DEBAJO DEL HEADER
    	// $(window).on('scroll', function(event) {
    	// 	ScrollTop = $(window).scrollTop();
    	// 	/* Act on the event */
    	// 	if (ScrollTop <= 10 && ScrollTop === 0) {
    	// 		height_header_sub = $('.header').height();
    	// 		$('.cnt-wrapper').css('padding-top', height_header_sub); 
    	// 		// console.log(height_header_sub)
    	// 		// console.log('dsadsadsa',ScrollTop)
    	// 	}
    	// });
        
    }
    height_header();
    $(window).on('load', function() {height_header();});
    $(window).on('resize', function() {height_header();});
    // $(window).on('scroll', function() {height_header();});
/* BASE */
	if ($(".validKeypress").length > 0) { //validador number - text form
		app.validar(".validKeypress")
	}
	/* FECHA FOOTER */
	var fecha = new Date();
	var ano =fecha.getFullYear();
	$('#id_year').text(ano)

	/* MENU RESPONSIVE */
	//se clona 'menu-list' para poder tener mas flexibilidad y control
	$('.f-redes').clone().insertAfter('.menu-sidebar-cnt .menu-links');
	$('.header-idiomaBox').clone().prependTo('.menu-sidebar-cnt');
	$('.menu-list').clone().prependTo('.menu-sidebar-cnt').addClass('menu-responsive').removeClass('menu-list');

	$('.menu-mobile-open').click(function(){
		$(this).addClass('active');
		$('.menu-mobile-close').addClass('active');
		$('.menu-sidebar').addClass('active');
		$('.menu-overlay').addClass('active');
		$('.wrapper').addClass('active');
		$('.footer').addClass('active');
		$('body').addClass('active');
		$('.menu-sidebar-cnt .link-css').each(function(index, el) {
            $(el).css('transition-delay', +index/20+'s');    
        });
	});

	// funcion  para cerrar menu responsive
	function cerrar_nav() {
		$('.menu-sidebar').removeClass('active');
		$('.menu-overlay').removeClass('active');
		$('.menu-mobile-close').removeClass('active');
		$('.menu-mobile-open').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.footer').removeClass('active');
		$('body').removeClass('active');
		$('.menu-sidebar-cnt a').removeAttr('style')
	};

	//click en boton cerrar y overlay
	$('.menu-mobile-close').click(function() {
		cerrar_nav();
	});

	$('.menu-overlay').click(function() {
		cerrar_nav();
	});


	//para cerrar el menu responsive en caso hagan resize, o giren la tablet o celular con el menu responsive abierto
		//detectando moviendo de ipad y tablet
	function readDeviceOrientation() {
	    switch (window.orientation) {
	    case 0:
	        break;
	    case 180:
	        break;
	    case -90:
	        break;
	    case 90:
	        break;
	    }
	}
	//detectando tablet, celular o ipad
	function detectMobil() {
        var isMobile = !1;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge|maemo|midp|mmp|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows(ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-||_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt|kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-||o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = !0
        }
        return isMobile
    }

	//detectando tablet, celular o ipad
	dispositivo_movil = detectMobil();
	if ( dispositivo_movil ) {
			function readDeviceOrientation() {
			    if (Math.abs(window.orientation) === 90) {
			        // Landscape
			      	cerrar_nav();
			    } else {
			    	// Portrait
			    	cerrar_nav();
			    }
			}
			window.onorientationchange = readDeviceOrientation;
			console.log('estas en ambiente mobil');
	}else{
		$(window).resize(function(event) {
			var estadomenu = $('.menu-responsive').width();
			if(estadomenu != 0){
				cerrar_nav();
			}
		});
		console.log('estas en ambiente desktop o pc');
	};

		// Ancla scroll - AGREGAR CLASE DEL ENLACE
	$('.ancla').click(function() {
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
			var targetOffset = $target.offset().top - 65;
			$('html,body').animate({scrollTop: targetOffset}, 1000);
			return false;
			}
		}
	});

	// Reseteando cajas de texto administrables
	$('.no-style *').removeAttr('style');


	// Menu responsive traslucido con scrolling
	var altoScroll = 0
	$(window).scroll(function() {
		altoScroll = $(window).scrollTop(),
		alto_window = $(window).height()/3;
		if (altoScroll > 80) {
			$('.header').addClass('scrolling');
		}else{
			$('.header').removeClass('scrolling');
		};
	});

	if ($('body').hasClass('css-comparador')) {
		$('.b36-value-column').eq(0).addClass('active');
	};


/* --- FIN BASE --- */
});
