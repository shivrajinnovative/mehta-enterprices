$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,  // Enable autoplay
        autoplayTimeout: 3000,  // Set autoplay interval (in milliseconds)
        autoplayHoverPause: true,  // Pause on hover
                responsive: {
            0: {
                items: 1,
                nav:true
            },
            600: {
                items: 3,
                nav:true
            },
            1000: {
                items:4,
                nav:true
            }
        }
    });
});