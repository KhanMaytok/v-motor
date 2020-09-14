window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-139245785-2');
$(window).on('load', function(event) {
    $('.menu-sidebar').removeAttr('style')
    $('.header-box-mega').removeAttr('style')
    $('.menu-overlay').removeAttr('style')
    $('.menu-overlay2').removeAttr('style')
    $('.wrap-load').addClass('load')
});
$(function(){
    $('#load__svg .st0_logo').each(function(index, el) {
        $(el).css('animation-delay', +index/8+'s');    
    });
    $('.header-item').each(function(index, el) {
        $(el).css('transition-delay', +index/8+'s');    
    });
    $('.header-click ').on('mouseenter', function(event) {

        $('.menu-overlay2').toggleClass('active');
    });
    $('.header-click').on('mouseleave', function(event) {
        $('.menu-overlay2').toggleClass('active');
        
    });

    // $('.header-cnt-ayuda').mouseup(function (e){
    //     var container = $(".header-toggle");

    //     if (!container.is(e.target) // if the target of the click isn't the container...
    //         && container.has(e.target).length === 0) // ... nor a descendant of the container
    //     {
    //         $('.menu-overlay').click();
    //     }
    // });
    if ($('body').hasClass('css-home')) {
        $(window).on('scroll', function () {
            var st = $(this).scrollTop(),
                height_b1 = $('.b1').height();


            if ($(window).width() > 767) {

                $('.header-figure').css('transform', 'translateY(-'+st+'px)').removeClass('last-header');
                $('.header').removeClass('last-header');
                if (st >= height_b1) {
                   
                    $('.header-figure').css('transform', 'translateY(-'+height_b1+'px)');
                    $('.header').addClass('last-header');
                }
            }else{
                
                $('.header-figure ').removeAttr('style');
            }
        });
        
    }

    $('.b2-cnt-head .b2-head-filter').on('click', function(event) {
        event.preventDefault();
        $('.b2-cnt-head li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
    $('.header-idioma').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.header-idiomaBox').find('ul').slideToggle(250);
    });

    var header_text = $('.b8-responsive').length;
    if (header_text > 0) {
        var my_text = $('li.active .b8-link').text()
        $('.b8-responsive').text(my_text)

        $('.b8-responsive').on('click', function(event) {
            event.preventDefault();
            $('.b8-ulBox').toggleClass('active');
        });
    }
    var bannerText_bg = $('.general_bannerText figure').length;
    if (bannerText_bg > 0) {
        function medidas_banner(){
            var urlimg = $('.general_bannerText figure').attr('data-img'),
                img = urlimg.split(','),
                screen = $(window).width(),
                bgi = 'background-image:url(',
                cierre = ')';

            // insertando imagen segun medida
            if (screen > 768) {
                $('.general_bannerText figure').attr('style', bgi+img[0]+cierre);
            };
            if (screen <= 768) {
                $('.general_bannerText figure').attr('style', bgi+img[1]+cierre);
            };
            $(window).on('load', function(event) {
                $('.general_bannerText .general_text').addClass('active')
            });
            $(window).on('scroll', function () {
                st_rango = $(window).height()/1.5,
                    st_2 = $(this).scrollTop() / st_rango,
                    st_2 = st_2/0.6, 
                    opacity_st = 1 - st_2
                if (opacity_st < 1) {
                    $('.general_bannerText figure ').css('opacity', opacity_st);
                    $('.general_bannerText_cnt').css('opacity', opacity_st);
                    if (opacity_st < 0.1) {
                        $('.general_bannerText figure ').css('opacity', '0');
                        $('.general_bannerText_cnt').css('opacity', '0');
                    }
                }
                if ($(this).scrollTop() < 2) {
                    $('.general_bannerText figure ').css('opacity', '1');
                    $('.general_bannerText_cnt').css('opacity', '1');
                }
            
            });
        }
        medidas_banner();
        $(window).resize(function(event) {
            medidas_banner();
        });
    }
    

    //validacion global
    $("form").validationEngine('attach', {
        promptPosition : "topLeft",
        autoHidePrompt: true,
        autoHideDelay: 4000,
        binded: false,
        scroll: false,
        validateNonVisibleFields: true
    });            

    //validacion form suscripcion
    $(".btn-enviar-suscripcion").click(function(e) {
        e.preventDefault();
        var item = $(this);
        var form = item.closest('form');
        var valid = form.validationEngine('validate');
        
        if (!valid){
        }else{
            item.attr("disabled", true);
            correo_suscripcion = $("#correo_suscripcion").val();
            localStorage.setItem("correo_suscripcion", correo_suscripcion);
            window.location.href = "/suscripcion/";
        }
    });
});
