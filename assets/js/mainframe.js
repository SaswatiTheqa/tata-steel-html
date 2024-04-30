$(document).ready(function () {
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

      var swiper1 = new Swiper(".testimonial-section .swiper-container", {
        // slidesPerView: 4.6,
        spaceBetween: 24,
        // centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.testimonial-section .swiper-button-next',
            prevEl: '.testimonial-section .swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
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




// phone call 
var myID = document.getElementById("phone-call");

var myScrollFunc = function() {
  var y = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  // Calculate the bottom position
  var bottomPosition = documentHeight - windowHeight - y;
  // You can adjust the value (10 in this case) for a different sensitivity
  if (bottomPosition < 15) {
    myID.className = "phone-call-wrap show";
  } else {
    myID.className = "phone-call-wrap";
  }
};

window.addEventListener("scroll", myScrollFunc);




    var items = $(".event-list .event-item");
    var numItems = items.length;
    var perPage = 6;
    items.slice(perPage).hide();
    if ($('.event-list').length > 0) {
      $('#pagination-container').pagination({
          items: numItems,
          itemsOnPage: perPage,
          prevText: "<i class='fa-solid fa-chevron-left'></i>",
          nextText: "<i class='fa-solid fa-chevron-right'></i>",
          onPageClick: function (pageNumber) {
              var showFrom = perPage * (pageNumber - 1);
              var showTo = showFrom + perPage;
              items.hide().slice(showFrom, showTo).show();
          }
      });
    }





  // select2
  if ($('.select2').length > 0) {
      $(".select2").select2();
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



});
if ($('[data-fancybox]').length > 0) {
  $('[data-fancybox]').fancybox({
    // Options will go here
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop            : true,
    // keyboard        : true,
    toolbar         : false,
    // animationEffect : false,
    // arrows          : true,
    clickContent    : false
  });
}



// $(function () {
//   $(".col-md-4").slice(0, 3).show();
//   $("body").on("click touchstart", ".load-more", function (e) {
//     e.preventDefault();
//     $(".col-md-4:hidden").slice(0, 3).slideDown();
//     if ($(".col-md-4:hidden").length == 0) {
//       $(".load-more").css("visibility", "hidden");
//     }
//     $("html,body").animate(
//       {
//         scrollTop: $(this).offset().top
//       },
//       1000
//     );
//   });
// });