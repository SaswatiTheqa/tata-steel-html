$(document).ready(function(){
    var showClass = "product-item";
    $("."+showClass).slice(0, 6).show();
    
    // Function to load more products
    function loadMoreProducts() {
        $('#loading').show();
      // Show loading
      setTimeout(function() {
        $("."+showClass+":hidden").slice(0, 3).fadeIn("slow");
        if($("."+showClass+":hidden").length === 0 ) {
            $('#loading').hide();
        }
      }, 1000); // Simulated delay of 1 second (adjust as needed)
    }
  
    $('#selectRegion').on('change', function(){        
        $('.product-item').hide() // Hide all product items
        const selectedValue = this.value
        showClass = selectedValue
        if(showClass !== ""){
          loadMoreProducts()  
        }
    });
  
    // Intersection Observer API setup
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };
  
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                loadMoreProducts();
            }
        });
    }, options);
  
    // Start observing the bottom of the page
    observer.observe(document.querySelector('#loading'));
});

