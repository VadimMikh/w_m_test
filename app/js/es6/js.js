$(document).ready(function () {

    // Custom select
    $('.select').styler({
        selectSearch: true,
        selectSearchLimit: 5,
        selectSmartPositioning: false
    }); 

    // Custom range
    $('.level_desc_item').on('click', function (e) {
        e.preventDefault();
        
        var r = $(this).closest('.level'),
            v = $(this).data('level'),
            i = $('.js_level');

        r.removeClass().addClass('level l'+v), i.val(v);
    });

    // Anchor animate
    $('a[href^="#"]').on('click', function(){
        var el = $(this).attr('href');
        $('html, body').animate({
        scrollTop: $(el).offset().top - 50}, 1000);
        $('html').removeClass('menu_opened');
        return false;
    });

    // Mobile menu trigger
    $('.menu_trigger').on('click', function (e) {
        e.preventDefault();
        $('html').toggleClass('menu_opened');
    });
    $('.layer').on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('menu_opened');
    });

    (function() {

        var currentScrollTop = 0;
        
        function scroll() {
        
            currentScrollTop = $('body').scrollTop();
        
            if (currentScrollTop > 100) {$('.menu_trigger').addClass('black');}
            else {$('.menu_trigger').removeClass('black');}
        
        }
        
        window.addEventListener('scroll', scroll);

    })();

});