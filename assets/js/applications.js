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

    // Function to filter products based on region selection
    function filterProducts() {
        const selectedValue = this.value;
        $('.product-item').hide(); // Hide all product items
        
        const itemsToShow = $('.product-item.' + selectedValue); // Select items matching the selected region
        
        itemsToShow.slice(0, 6).fadeIn("slow"); // Show the first 6 items
        $('#loading').show();

        if (itemsToShow.length <= 6) {
            observer.disconnect(); 
            $('#loading').hide(); 
        }

    };
    
    // Event listener for region selection change
    $('#selectRegion').on('change', filterProducts);
  
    // Intersection Observer API setup
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                loadMoreProducts();
            }
        });
    }, options);
  
    // Start observing the bottom of the page
    observer.observe(document.querySelector('#loading'));
});
