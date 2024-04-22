$(document).ready(function () {
    // ===========   slider-students-feeling slider
    var swiper1 = new Swiper(".slider-banner .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        navigation: {
            nextEl: '.slider-banner .swiper-button-next',
            prevEl: '.slider-banner .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      
        
      });

    // ===========   insta-feed slider

      var swiper1 = new Swiper(".testimoni-video .swiper-container", {
        slidesPerView: 4.02,
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerView: "auto",
        navigation: {
            nextEl: '.testimoni-video .swiper-button-next',
            prevEl: '.testimoni-video .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // breakpoints: {
        //           0: { slidesPerView: 1.2, spaceBetween: 20, },
        //           440: { slidesPerView: 1.6, spaceBetween: 20, },
        //           575: { slidesPerView: 2.1, spaceBetween: 20, },
        //           767: { slidesPerView: 2.3, spaceBetween: 30, },
        //           1024: { slidesPerView: 3.2, spaceBetween: 30, },
        //           1366: { slidesPerView: 3.02, spaceBetween: 30, },
        //       }
        
      });
    
    //   scrollTop
    $("#scrollTop").click(function () {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });



    
      $(".tool-menu.navbar-toggler").on("click", function () {
          $(this).toggleClass('open')
          $(".tool-menu.navbar-toggler .text").text($(".tool-menu.navbar-toggler .text").text() == 'Menu' ? 'Close' : 'Menu');
      });



      
    //   provinceGo
    const provinceGo = () => {
        const selectVal = document.getElementById('provinceSelect').value;
        if(selectVal !== ''){
            window.location.href = selectVal+ '.html';
        }
    };
    document.querySelector('#provinceGo').addEventListener('click', provinceGo);


    
    


});






