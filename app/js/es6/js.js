$(document).ready(function () {

    // Custom select
    $('.select').styler({
        onSelectOpened:	function() {
            $('.jq-selectbox__dropdown > ul').mCustomScrollbar({
                scrollInertia: 100
            });
        },
        onSelectClosed:	function() {
            $('.jq-selectbox__dropdown > ul').mCustomScrollbar('destroy');
        },
        selectSmartPositioning: false,
        selectVisibleOptions: 7,
    }); 

    // Custom range
    $('.level_desc_item').on('click', function (e) {
        e.preventDefault();
        
        var r = $(this).closest('.level'),
            v = $(this).data('level'),
            i = $('.js_level');

        r.removeClass().addClass('level l' + v), i.val(v);
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

    // Input labels animation
    $('.row-inner').on('click', function () {
        var i = $(this).find('input[type="text"]');
        if (i.length && i.val() === '') {
            $(this).addClass('opened');
            setTimeout(function(){
                i.focus();
            }, 300);
        } 
    });
    $('input[type="text"]').on('blur', function () {
        var p = $(this).parent('.opened'), v = $(this).val();
        p.length && !v && p.removeClass('opened');
    });
    $('input[type="text"]').on('keyup', function () {
        var p = $(this).parent('.row-inner'), v = $(this).val();
        if (p.length && v !== '') {
            p.addClass('filled');
        } else if (p.length && v === '') {
            p.removeClass('filled');
        }
    });

    (function() {

        var currentScrollTop = 0;
        
        function scroll() {
        
            currentScrollTop = $('html').scrollTop();

            if (currentScrollTop > 100) {$('.menu_trigger').addClass('black');}
            else {$('.menu_trigger').removeClass('black');}
        
        }
        
        $('.menu_trigger').length && window.addEventListener('scroll', scroll);

    })();

});