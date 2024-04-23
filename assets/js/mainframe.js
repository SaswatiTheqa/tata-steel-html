$(document).ready(function () {
    // ===========   slider-students-feeling slider
    var swiper1 = new Swiper(".banner-section-home .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        navigation: {
            nextEl: '.banner-section-home .swiper-button-next',
            prevEl: '.banner-section-home .swiper-button-prev'
        },
        pagination: {
          el: ".banner-section-home .swiper-pagination",
          clickable: true,
        },
      
        
      });

    // ===========   insta-feed slider

      var swiper1 = new Swiper(".testimonial-section .swiper-container", {
        slidesPerView: 4.6,
        spaceBetween: 24,
        // centeredSlides: true,
        // slidesPerView: "auto",
        navigation: {
            nextEl: '.testimonial-section .swiper-button-next',
            prevEl: '.testimonial-section .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  0: { slidesPerView: 1.2, spaceBetween: 20, },
                  440: { slidesPerView: 1.6, spaceBetween: 20, },
                  575: { slidesPerView: 2.1, spaceBetween: 20, },
                  767: { slidesPerView: 2.3, spaceBetween: 30, },
                  1024: { slidesPerView: 3.2, spaceBetween: 30, },
                  1366: { slidesPerView: 3.02, spaceBetween: 30, },
              }
        
      });
    
    //   scrollTop
    $("#scrollTop").click(function () {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });



});






