"use strict";
$(document).ready(function () {
  // documentReady
    // ===========   slider-students-feeling slider
    var swiper1 = new Swiper(".banner-section-home .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
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

      var swiper2 = new Swiper(".testimonial-section .swiper-container", {
        // slidesPerView: 4.6,
        spaceBetween: 24,
        // centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.testimonial-section .swiper-button-next',
            prevEl: '.testimonial-section .swiper-button-prev'
        },
        pagination: {
          el: ".testimonial-section .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
                  0: { spaceBetween: 10, },
                  440: { spaceBetween: 16, },
                  
                  767: { spaceBetween: 16, },
                  1199: { spaceBetween: 24, },
                 
              }
        
      });
    
    //   scrollTop
    $("#scrollTop").click(function () {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });

  // select2
    if ($('.select2').length > 0) {
      // $(".select2").select2({
      //   placeholder: $(this).attr('placeholder'),
      //   // placeholder: "Select a state",
      //   // allowClear: Boolean($(this).data('allow-clear')),
      // });
      $('select').each(function () {
        $(this).select2({
          placeholder: $(this).attr('placeholder'),
          allowClear: Boolean($(this).data('allow-clear')),
        });
      });
    }

    // enquiry-radio-list
    if ($('.enquiry-form').length > 0) {
      $('.enquiry-radio-list input[type="radio"]').click(
          function () {
              const inputValue =  $(this).attr("value");
              const targetBox =  $("." + inputValue);
              $(".radio-open-box").not(targetBox).hide();
              $(targetBox).show();
          }
      );
      $('.type-list input[type="radio"]').click(
          function () {
              const inputValue =  $(this).attr("value");
              const targetBox =  $("." + inputValue);
              $(".type-text-box").not(targetBox).hide();
              $(targetBox).show();
          }
      );
      
    }




    
      // pagination-container
      // var items = $(".event-list .event-item");
      // var numItems = items.length;
      // var perPage = 6;
      // items.slice(perPage).hide();
      // if ($('.event-list').length > 0) {
      //   $('#pagination-container').pagination({
      //       items: numItems,
      //       itemsOnPage: perPage,
      //       prevText: "<i class='fa-solid fa-chevron-left'></i>",
      //       nextText: "<i class='fa-solid fa-chevron-right'></i>",
      //       onPageClick: function (pageNumber) {
      //           var showFrom = perPage * (pageNumber - 1);
      //           var showTo = showFrom + perPage;
      //           items.hide().slice(showFrom, showTo).show();
      //       }
      //   });
      // }
      
    // pagination-container end
   


    $('#newsSelect').on('change', function(){
        const $this = $(this);
        $('.event-item').hide();
        $('.'+$this.val()).show();
    });

    

   $('#recentSelect').on('change', function(){
        const  $this = $(this);
        $('.event-item').hide();
        $('.'+$this.val()).show();
    });

   
  // documentReady end
  });

   // phone call 
  const phoneCall = document.getElementById("phone-call");
  const phoneScrollFunc = function() {
      let y = window.scrollY;
      let windowHeight = window.innerHeight;
      let documentHeight = document.body.clientHeight;
      // Calculate the bottom position
      let bottomPosition = documentHeight - windowHeight - y;
      if (bottomPosition < 5) {
        phoneCall.className = "phone-call show";
      } 
      else {
        phoneCall.className = "phone-call";
      }
  };

 window.addEventListener("scroll", phoneScrollFunc);
 // phone call  end


 $(document).ready(function () {
  $('.enquiry-form .btn-step').click(function () {
      const target = $(this).data('bs-target');
      $('.nav-link').removeClass('active');
      $('button[data-bs-target="' + target + '"]').addClass('active');
      $('.tab-pane').removeClass('show active');
      $(target).addClass('show active');
  });
});
