
$(document).ready(function () {
    // alert('hi');

    $(".our-work ul li .hover").hide();
    $(".our-work ul li").hover(function () {
        $(this).find('.hover').animate({
            height: 'toggle'
        }, 290, function () {
        });
    }, function () {
        $(this).find('.hover').delay(100).animate({
            height: 'toggle'
        }, 290, function () {
        });
    });


    $("header nav ul li ul").css("display", "none");
    $("header nav ul li").hover(function () {

        $(this).addClass('active');

        $(this).find('ul').animate({ height: 'toggle' }, 290, function () { });

        //$(this).find('ul').fadeIn(500, function () {
        //    $(this).find('ul').css("display", "block").fadeIn(100);

        //});

    }, function () {

        $(this).removeClass('active');
        $(this).find('ul').animate({ height: 'toggle' }, 290, function () { });
        //$(this).find('ul').delay(300).fadeOut(500, function () {
        //    $(this).find('ul').delay(300).css("display", "none").fadeOut(100);
        //});
    });

    $('#gallery-thumb').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 11,
        //itemMargin: 3,
        asNavFor: '#content-inner'
    });

    $('#content-inner').flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 700,
        pauseOnHover: true,
        sync: "#gallery-thumb",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    $("#mobile").hide();
    $(".btn-menu").click(function () {
        $("#mobile").slideDown(); 
    });
});
 