// Slows the background image scroll speed of the main bg picture

$(window).scroll(function() {
   
    var wScroll = $(this).scrollTop();
    
    $("#welcome-message").css({
       "transform" : "translate(0px, "+ wScroll /6 + "%)" 
    });
    
});