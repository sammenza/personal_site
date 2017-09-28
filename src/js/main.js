$('.circle').hover(function(event) {
        var i = $('.circle').index(this);
        $('.nav-text').eq(i).removeClass('no-opacity').addClass('full-opacity');
    }, function(event) {
        var i = $('.circle').index(this);
        $('.nav-text').eq(i).removeClass('full-opacity').addClass('no-opacity');
});

$('.circle').click(function(event) {
    $('.circle').removeClass('active');
    $(this).addClass('active');
})

$(window).scroll(function(event){
    var last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position < $('#about').position().top) { $('.navbar-large').hide(); }
    if (last_known_scroll_position >= $('#about').position().top) {
        $('.navbar-large').show();
        $('.circle').removeClass('active');
        $('.circle').eq(0).addClass('active');
    }
    if (last_known_scroll_position > $('#skills').position().top) {
        $('.circle').removeClass('active');
        $('.circle').eq(1).addClass('active');
    }
    if (last_known_scroll_position > $('#experience').position().top) {
        $('.circle').removeClass('active');
        $('.circle').eq(2).addClass('active');
    }
    if (last_known_scroll_position > $('#work').position().top) {
        $('.circle').removeClass('active');
        $('.circle').eq(3).addClass('active');
    }
    if (last_known_scroll_position + $(window).height() >= $(document).height() - 100) {
        $('.circle').removeClass('active');
        $('.circle').eq(4).addClass('active');
    }
})

var navbarToggle = false;

$('.navbar-burger').click(function(event) {
    if (!navbarToggle) {
        $('.navbar-small-menu').css('max-height', 300);
        $('.navbar-small').addClass('shadow-1');
        $('.navbar-small').css('background-color', 'white');
        $('.navbar-small-menu ul li a').css('color', 'teal');
        navbarToggle = true;
    } else {
        $('.navbar-small-menu').css('max-height', 0);
        $('.navbar-small').removeClass('shadow-1');
        $('.navbar-small').css('background-color', 'transparent');
        $('.navbar-small-menu ul li a').css('color', 'transparent');
        navbarToggle = false;
    }
})

$('.navbar-small-menu ul li a').click(function(event) {
        $('.navbar-small-menu').css('max-height', 0);
        $('.navbar-small').removeClass('shadow-1');
        $('.navbar-small').css('background-color', 'transparent');
        $('.navbar-small-menu ul li a').css('color', 'transparent');
        navbarToggle = false;
})




