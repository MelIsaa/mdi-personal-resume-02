$(document).ready(function(){
    // Get the initial position of the nav bar
    let stickyNavTop = $('.nav').offset().top;
    
    // Decide whether the navbar should stick
    let stickyNav = function() {
        let scrollTop = $(window).scrollTop();
        
        if(scrollTop > stickyNavTop) { // if we're beyond the top
            $('.nav').addClass('sticky'); // make sticky
        } else {
            $('.nav').removeClass('sticky'); // undo sticky
        }
    };
    
    stickyNav();
    // Run it every time the page is scrolled
    $(window).scroll(function() {
        stickyNav();
    });
});