// Define the local JSON data
const jsonData = [
  {
    "id" : 1,
    "img": "assets/images/product_3.png",
    "name": "Silos"
  },
  {
    "id" : 2,
    "img": "assets/images/product_2.png",
    "name": "Grain Silo"
  },
  {
    "id" : 3,
    "img": "assets/images/product_2.png",
    "name": "Cooler Body"
  },
  {
    "id" : 4,
    "img": "assets/images/product_2.png",
    "name": "Dholak"
  },
  {
    "id" : 5,
    "img": "assets/images/product_2.png",
    "name": "Bread Baking Trey"
  },
  {
    "id" : 6,
    "img": "assets/images/product_2.png",
    "name": "Sewing Machine Cover"
  },

  {
    "id" : 7,
    "img": "assets/images/product_3.png",
    "name": "Silos 1"
  },
  {
    "id" : 8,
    "img": "assets/images/product_2.png",
    "name": "Grain Silo 1"
  },
  {
    "id" : 9,
    "img": "assets/images/product_2.png",
    "name": "Cooler Body 1"
  },
  {
    "id" : 10,
    "img": "assets/images/product_2.png",
    "name": "Dholak 1"
  },
  {
    "id" : 11,
    "img": "assets/images/product_2.png",
    "name": "Bread Baking Trey 1"
  },
  {
    "id" : 12,
    "img": "assets/images/product_2.png",
    "name": "Sewing Machine Cover 1"
  },

  // Add more data as needed
];

document.addEventListener("DOMContentLoaded", () => {
  // Set up the IntersectionObserver to load more images if the footer is visible.
  let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.5
  };
  // let countElement = document.querySelector(".product-row");
  // countElement.textContent = `Number of items: ${jsonData.length}`;

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector(".loading"));
  // An initial load of some data with loading delay
  getDataWithDelay();
});

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    console.warn("Something is intersecting with the viewport");
    getDataWithDelay();
  }
}

function getDataWithDelay() {
  // Add loading delay of 1 second (1000 milliseconds)
  setTimeout(() => {
    getData();
  }, 2000); // 1000 milliseconds = 1 second
}

// function getData() {
//   let main = document.querySelector(".product-row");
//   console.log("Fetching JSON data");
//   const uniqueUrls = [];
//   // Use the local JSON data instead of fetching it from a URL
//   jsonData.map(item => {
//     const productHTML = `
//     <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4 product-item">
//         <div class="product-box align-items-end position-relative">
//             <div class="pro-box-bg"></div>
//             <div class="product-img">
//               <figure class="mx-auto">
//                 <img src="${item.img}" alt="" class="product-image"/>
//               </figure>
//             </div>
//             <div class="product-body">
//                <h5 class="h5 fw-bold  mb-0">${item.name}</h5>
//                <button class="btn sitebtn btn-arrow btn-arrow-bg">KNOW MORE</button> 
//             </div>
//         </div>
//     </div>`;
      
//     main.insertAdjacentHTML('beforeend', productHTML);
//   });
// }

function getData() {
  let main = document.querySelector(".product-row");
  console.log("Fetching JSON data");

  // Filter out duplicate items based on their image URLs
  const uniqueData = [];
  const uniqueUrls = [];

  jsonData.forEach(item => {
    if (!uniqueUrls.includes(item.id)) {
      uniqueUrls.push(item.id);
      uniqueData.push(item);
    }
  });

  // Render unique product items
  uniqueData.forEach(item => {
    const productHTML = `
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4 product-item" id="${item.id}">
        <div class="product-box align-items-end position-relative">
            <div class="pro-box-bg"></div>
            <div class="product-img">
              <figure class="mx-auto">
                <img src="${item.img}" alt="" class="product-image"/>
              </figure>
            </div>
            <div class="product-body">
               <h5 class="h5 fw-bold  mb-0">${item.name}</h5>
               <button class="btn sitebtn btn-arrow btn-arrow-bg">KNOW MORE</button> 
            </div>
        </div>
    </div>`;
      
    main.insertAdjacentHTML('beforeend', productHTML);
  });
}