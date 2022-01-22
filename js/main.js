$('.burger').on('click', function() {
        $('.mob-menu').toggle();
    });

$('.close').on('click', function() {
        $('.mob-menu').toggle();
    });

$(function () {
        $(window).scroll(function() {
            $('.benefits-wrapper').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.benefits-wrapper_magin').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
         $(window).scroll(function() {
            $('.protectiom-wrapper').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.location-wrapper').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
});