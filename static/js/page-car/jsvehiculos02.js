
		$(window).on('load', function(event) {
			$('.b8-cnt').addClass('active')
							$('.b8').addClass('not-video')
					});
		$(function () {
			var textFirst = $('.b9-lanza:first-child').attr('data-name');
			$('.b9-textName span').text(textFirst)


			$(window).on('scroll', function () {
                st_rango = $(window).height()/1.5,
                    st_2 = $(this).scrollTop() / st_rango,
                    st_2 = st_2/1.2, 
                    opacity_st = 1 - st_2,
                    pos_b9 = $('.b9').offset().top;
                if (opacity_st < 1) {
                	if ($(window).width()> 1024) {

	                    $('.b8-figure ').css('opacity', opacity_st);
	                    $('.b8-cnt ').css('opacity', opacity_st);
	                    if (opacity_st < 0.1) {
	                        $('.b8-figure ').css('opacity', '0');
	                        $('.b8-cnt').css('opacity', '0');
	                    }
                	}else{
                		$('.b8-figure  ').css('opacity', '1');
                    	$('.b8-cnt ').css('opacity', '1');
                	}
                }
                if ($(this).scrollTop() < 2) {
                    $('.b8-figure  ').css('opacity', '1');
                    $('.b8-cnt ').css('opacity', '1');
                }
            	
                // console.log(pos_b9)
                if ($(this).scrollTop() > pos_b9) {
                	$('.b8-fixed-figure').addClass('active')
                }else{
                	$('.b8-fixed-figure').removeClass('active')

                }
            });
			$('.open-boxlight').boxlight();
			pos_fixed = $('.b8-fixed').offset().top
			$(window).on('scroll', function (event) {
				var Scroll_top = $(window).scrollTop();

				if (Scroll_top > pos_fixed) {
					$('.b8-fixed').closest('.b8-fixed-cnt').addClass('scrolling')
					$('.b8-fixed-figure').addClass('active')
				} else {
					$('.b8-fixed-cnt').removeClass('scrolling')
					$('.b8-fixed-figure').removeClass('active')
				}
			});

			var itemcarrusel_b8 = $('.b8-slide').length;

            if (itemcarrusel_b8 > 1 ) {
                $('.b8').removeClass('carrusel-desktop');
                $('.b8-slider').addClass('owl-carousel');
                $('.b8-slider').addClass('b8-owlcarousel');
                $('.b8-owlcarousel').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 1,
                    smartSpeed: 500,
                    autoplay: true,
                    animateIn: 'fadeIn',
                    animateOut: 'fadeOut',
                    // mouseDrag: false,
                    responsive: {
                        0: {
                            items: 1
                        }
                    }
                });

                
            }
            function medidasB1(){
				$('.b8-slide').each(function(index, el) {
					var urlimg = $(this).find('figure').attr('data-img');
					var img = urlimg.split(',');

					var screen = $(window).width();
					var bgi = 'background-image:url(';
					var cierre = ')';

					// insertando imagen segun medida
					if (screen > 768) {
						$(el).find('figure').attr('style', bgi+img[0]+cierre);
					};
					if (screen <= 768) {
						$(el).find('figure').attr('style', bgi+img[1]+cierre);
					};
				});
			};

			medidasB1();
			
	


			// var cantidad = $('.b9-slider li').length;
			function sliderOw() {
				$('.b9-slider').removeClass('grid')
				$('.b9-slider').addClass('owl-carousel');
				$('.b9-slider').addClass('b9-owl-carousel');
				$('.b9-owl-carousel').owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					autoplay: true,
					autoplayTimeout: 2000,
					smartSpeed: 500,
					navText: ['<span class="icon-flecha2"></span>', '<span class="icon-flecha3"></span>'],
					animateIn: 'fadeIn',
					animateOut: 'fadeOut',
					mouseDrag: false,
					responsive: {
						0: {
							items: 1
						}
					}
				});
			}
			function destroyOw() {
				$('.b9-slider').trigger('destroy.owl.carousel');
				$('.b9-slider').addClass('grid');
				$('.b9-slider').removeClass('owl-carousel');
				$('.b9-slider').removeClass('b9-owl-carousel');
			}
			sliderOw()
			$('.b9-colors li:first-child').addClass('active')





			$('.b9-colors .b9-lanza').on('click', function (event) {
				event.preventDefault();
				if (!$(this).hasClass('active')) {
					destroyOw();
					$('.b9-colors li').removeClass('active');
					$(this).addClass('active');

					var slide_data = $(this).attr('data-color'),
						b9_dataName = $(this).attr('data-name'),
						b9_slider_cnt = $('.b9-slider'),
						slide_tab = $('.b9-box-hiden li[data-color="'+slide_data+'"]').attr('data-url'),
						slide_count = $('.b9-box-hiden li[data-color="'+slide_data+'"]');

					// $('.b9-box-hiden li[data-color="'+slide_data+'"]').appendTo('.b9-slider');
					
					$('.b9-textName span').text(b9_dataName)
					$('.b9-slider li').appendTo('.b9-box-hiden');
					for (var s = 0; s < slide_count.length; s++) {
						
						var data_url = slide_count.eq(s).attr('data-url'),
							data_url2 = data_url.length;
						// console.log(data_url2)
						if (data_url2 > 1) {
							console.log('no hay')
							$('.b9-box-hiden li[data-color="'+slide_data+'"]').appendTo('.b9-slider');
							slide_count.eq(s).find('img').attr('src', data_url);
						}else{
							
							console.log('si hay')
						}
						// console.log(data_url)
					}

					sliderOw()
				}
			});

			var section_10  = $('.b10');
                section_10.waypoint(function(direction) {
                if (direction === 'down') {
                    $('.b10').addClass('active');
                }else {
                    
                }
            }, {
                offset:'40%'
            });

			function sliderOw_3() {
				var itemcarrusel_11 = $('.b11-item').length;
				if (itemcarrusel_11 > 4 || $(window).width() <= 1180) {
					$('.b11-slider').addClass('owl-carousel');
					$('.b11-slider').addClass('b11-owl-carousel');
					$('.b11-owl-carousel').owlCarousel({
						loop: false,
						margin: 30,
						nav: true,
						autoplay: false,
						navText: ['<span class="icon-flecha2"></span>', '<span class="icon-flecha3"></span>'],
						onInitialized: counterSlider1,
						responsive: {
							0: {
								items: 1
							},
							420: {
								items: 2
							},
							768: {
								items: 3
							},
							1024: {
								items: 4
							}
						}
					});
					function counterSlider1(event) {
						var dot_1 = $('.b11-slider .owl-dot'),
							dot_conut_1 = $('.b11-slider .owl-dot').length;
				        dot_1.each(function() {
				            var index_1 = $(this).index() + 1;
					        $(this).html(''+index_1+' de ' +dot_conut_1+'');
				        	
				        });
					};

				}
			}

			sliderOw_3();

			$(window).on('resize', function(event) {
                medidasB1();
                sliderOw_3();
                
            });

			var itemcarrusel_13 = $('.b13-slide').length;
			if (itemcarrusel_13 > 1) {
				$('.b13-slider').addClass('owl-carousel');
				$('.b13-slider').addClass('b13-owl-carousel');

				$('.b13-owl-carousel').owlCarousel({
					loop: false,
					margin: 0,
					nav: true,
					navText: ['<span class="icon-flecha2"></span>', '<span class="icon-flecha3"></span>'],
					items: 1,
					onInitialized: counterSlider2,
					smartSpeed: 500,
					autoplay: false,
					responsive: {
						0: {
							items: 1
						}
					}

				});
				function counterSlider2(event) {
					var dot_2 = $('.b13-slider .owl-dot'),
						dot_conut_2 = $('.b13-slider .owl-dot').length;
			        dot_2.each(function() {
			            var index_2 = $(this).index() + 1;
				        $(this).html(''+index_2+' de ' +dot_conut_2+'');
			        	
			        });
				};
			}
			$('.b14-center').on('click', function (event) {
				event.preventDefault();
				if (!$(this).hasClass('active')) {
					$('.b14-center').removeClass('active')
					$(this).addClass('active');

				} else {
					$(this).removeClass('active');
				}
			});

			var cantidad = $('.b14-slider .b14-item').length;

			function sliderOw_2() {
				$('.b14-slider').removeClass('grid')
				$('.b14-slider').addClass('owl-carousel');
				$('.b14-slider').addClass('b14-owl-carousel');
				$('.b14-owl-carousel').owlCarousel({
					loop: false,
					margin: 17,
					nav: true,
					autoplay: false,
					navText: ['<span class="icon-flecha2"></span>', '<span class="icon-flecha3"></span>'],
					onInitialized: counterSlider3,
					responsive: {
						0: {
							items: 1,
							margin: 30,
							center: true
						},
						480: {
							items: 2,
						},
						768: {
							items: 3
						},
						1024: {
							items: 4
						},
						1280: {
							items: 5
						}
					}
				});
				function counterSlider3(event) {
					var dot_3 = $('.b14-slider .owl-dot'),
						dot_conut_3 = $('.b14-slider .owl-dot').length;
			        dot_3.each(function() {
			            var index_3 = $(this).index() + 1;
				        $(this).html(''+index_3+' de ' +dot_conut_3+'');
			        	
			        });
				};
			}
			function destroyOw_2() {
				$('.b14-slider').trigger('destroy.owl.carousel');
				$('.b14-slider').addClass('grid');
				$('.b14-slider').removeClass('owl-carousel');
				$('.b14-slider').removeClass('b14-owl-carousel');
			}
			if (matchMedia) {
				var mq = window.matchMedia("(max-width: 1024px)");
				mq.addListener(WidthChange);
				WidthChange(mq);
			}
			// media query change
			function WidthChange(mq) {
				if (mq.matches) {
					// console.log('menor a 1000px');
					if ($('.b14-slider').hasClass('owl-carousel')) {
						// console.log('slider, ya existe');
					}
					else {
						// console.log('slider, aun no existe')
						sliderOw_2()
					}
				}
				else {
					// console.log('mayor a 1000px');
					if (cantidad >= 6) {
						destroyOw_2()
						sliderOw_2()
					}
					else {
						destroyOw_2()
					}
				};
			}
		});