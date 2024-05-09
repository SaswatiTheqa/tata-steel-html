const productItems = document.querySelectorAll('.product-item');

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

    function filterProducts() {
        const selectedValue = this.value;
        productItems.forEach(function(item) {
            item.style.display = 'none';
        });
        const itemsArray = Array.from(document.querySelectorAll('.' + selectedValue));
        if (itemsArray.length < 6){
            observer.disconnect(); 
            $('#loading').hide(); 
        }
        
        itemsArray.forEach(function(item) {
            item.style.display = 'block';
        });

    };
    document.querySelector('#selectRegion').addEventListener('change', filterProducts);
    


  
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

// document.querySelector('#selectRegion').addEventListener('change', function() {
//     // var selectedValue = this.value;
//     // var productItems = document.querySelectorAll('.product-item');
//     // productItems.forEach(function(item) {
//     //     item.style.display = 'none';
//     // });
//     // document.querySelectorAll('.' + selectedValue).forEach(function(item) {
//     //     item.style.display = 'block';
//     // });
//     console.log("abc")
// });

