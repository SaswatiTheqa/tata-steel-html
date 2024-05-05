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

// phone call  end


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

if ($('.testimonial-section').length > 0) {
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

  $(document).ready(function(event){
    $('.applicaltion-select select').on('change', function(){
      const $this = $(this);
      $('.product-item').hide();
      $('.'+$this.val()).show()
      // if($this.val !== "" ){
      // }

    });


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

  });


  $(document).ready(function(){
    // Function to load more products
    function loadMoreProducts() {
      // Show loading indicator
      $('#loading').show();
      // Simulate loading delay (remove this in actual implementation)
      setTimeout(function() {
        $(".product-item:hidden").slice(0, 6).fadeIn("slow");
      //  $('#loading').hide(); // Hide loading indicator
        if($(".product-item:hidden").length === 0) {
            observer.disconnect(); 
            $('#loading').hide(); 
        }
      }, 2000); // Simulated delay of 1 second (adjust as needed)
    }
  
    // Show initial set of products
    // $(".product-item").slice(0, 6).show();
  
    // Intersection Observer API setup
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // isLoading = true;
                loadMoreProducts();
            }
        });
    }, options);
  
    // Start observing the bottom of the page
    observer.observe(document.querySelector('#loading'));
  });