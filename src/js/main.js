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

// $(window).scroll(function(event){
//     last_known_scroll_position = window.scrollY;
//     switch last_known_scroll_position {
//         case:
//     }
//
// })



