$(document).ready(function(){
    // Function to load more products
    function loadMoreProducts() {
      // Show loading
      $('#loading').show();
      setTimeout(function() {
        $(".product-item:hidden").slice(0, 6).fadeIn("slow");
        if($(".product-item:hidden").length === 0) {
            observer.disconnect(); 
            $('#loading').hide(); 
        }
      }, 2000); // Simulated delay of 1 second (adjust as needed)
    }
  
    // Show initial set of products
    $(".product-item").slice(0, 6).show();
  
    // Intersection Observer API setup
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                loadMoreProducts();
            }
        });
    }, options);
  
    // Start observing the bottom of the page
    observer.observe(document.querySelector('#loading'));
});


