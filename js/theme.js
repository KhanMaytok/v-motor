/* ----------------------------- ToolTip -------------------------- */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
/* ---------------------------------------------------------------- */
/* --------------------------- Preloader -------------------------- */
;(function($) {
    "use strict";
    // Preloader
    function preloader(){
        if ( $('#preloader').length ){ 
            $(window).on("load", function (e) {
                $('#preloader').delay(200).fadeOut('slow');
                $('body').delay(200).css({'overflow':'visible'});
            })
        }
    };
    /*Function Calls*/ 
    preloader ();
})(jQuery);
/* ---------------------------------------------------------------- */
/* --------------- Visible toTop | NoVisible MenuTop -------------- */

var btnToTop = $('#toTop');
$(window).scroll(function() {
    var header = $(window).scrollTop();
    var HeightVisible = $(".section_slider").outerHeight();
    if (header > HeightVisible) {
        /* MenuTop */
        btnToTop.addClass('show');
    } else {
        /* MenuTop */
        btnToTop.removeClass('show');
    }
});
btnToTop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:1}, '100');
});
/* ---------------------------------------------------------------- */
/* -------------------------- TouchCarousel ----------------------- */
$(document).ready(function() {
    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {*/
        $(".carousel").swipe({
            swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') $(this).carousel('next');
                if (direction == 'right') $(this).carousel('prev');
            },
            allowPageScroll: "vertical"
        });
    /*}*/
});
/* ---------------------------------------------------------------- */
/* ------------------------- Efecto MegaMenu ---------------------- */
$('.is-hover a').on('mouseover', function () {
    var idy = parseInt($(this).attr("value"));
    /*
    $('.full-novisible:nth-child(' + idy + ')').addClass('full-visible');
    $('.full-novisible:nth-child(' + idy + ')').siblings().removeClass('full-visible');
    */
    if(idy==1){/*Todos */
        $('#catSedan').addClass('full-visible');
        $('#catDeportivos').addClass('full-visible');
        $('#catSuvCamionetas').addClass('full-visible');
        $('#catSedan').removeClass('full-novisible');
        $('#catDeportivos').removeClass('full-novisible');
        $('#catSuvCamionetas').removeClass('full-novisible');
    }else{
        if(idy==2){/*Sedan */
            $('#catSedan').addClass('full-visible');
            $('#catDeportivos').addClass('full-novisible');
            $('#catSuvCamionetas').addClass('full-novisible');

            $('#catSedan').removeClass('full-novisible');
            $('#catDeportivos').removeClass('full-visible');
            $('#catSuvCamionetas').removeClass('full-visible');
        }else{
            if(idy==3){/*Deportivos */
                $('#catSedan').addClass('full-novisible');
                $('#catDeportivos').addClass('full-visible');
                $('#catSuvCamionetas').addClass('full-novisible');
    
                $('#catSedan').removeClass('full-visible');
                $('#catDeportivos').removeClass('full-novisible');
                $('#catSuvCamionetas').removeClass('full-visible');
            }else{/*Camionetas */
                $('#catSedan').addClass('full-novisible');
                $('#catDeportivos').addClass('full-novisible');
                $('#catSuvCamionetas').addClass('full-visible');
    
                $('#catSedan').removeClass('full-visible');
                $('#catDeportivos').removeClass('full-visible');
                $('#catSuvCamionetas').removeClass('full-novisible');
            }
        }
    }
});
/* ---------------------------------------------------------------- */
/* 
    var idy = parseInt($(this).attr("value"));
    if(idy="0"){
        $('.full-novisible').addClass('full-visible');
        $('.full-novisible').siblings().removeClass('full-novisible');
    }else{
        $('.full-novisible:nth-child(' + idy + ')').addClass('full-visible');
        $('.full-novisible:nth-child(' + idy + ')').siblings().removeClass('full-visible');
    }
*/


/* -------------------------- Hover ----------------------- */
$(document).ready(function(){
    $("#Link01").hover(
        function(){
            $('#Seccion01').addClass('effect-blackimg');
        }, 
        function(){
            $('#Seccion01').removeClass('effect-blackimg');
        }
    );
    $("#Link02").hover(
        function(){
            $('#Seccion02').addClass('effect-blackimg');
        }, 
        function(){
            $('#Seccion02').removeClass('effect-blackimg');
        }
    );
    $("#Link03").hover(
        function(){
            $('#Seccion03').addClass('effect-blackimg');
        }, 
        function(){
            $('#Seccion03').removeClass('effect-blackimg');
        }
    );
    $("#Link04").hover(
        function(){
            $('#Seccion04').addClass('effect-blackimg');
        }, 
        function(){
            $('#Seccion04').removeClass('effect-blackimg');
        }
    );
});
/* ---------------------------------------------------------------- */
function same_width(){
    let target = $('#img_promociones').width();
    $('#p_promociones').width(target);
}

$(window).resize(function() {
    same_width();
});

