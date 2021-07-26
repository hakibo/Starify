$(window).scroll(function() {
    var height = $(window).scrollTop();
    var width = $(window).width();

    if(width > 1200 && height  >= 120) {
        $('#top-navbar').removeClass('d-block').fadeIn(1000);
        $('#scroll-navbar').removeClass('d-none').addClass('d-block');
    } else{
        $('#top-navbar').removeClass('d-none').fadeIn(1000);
        $('#scroll-navbar').removeClass('d-block').addClass('d-none');
    }
});