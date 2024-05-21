const eventOptions = {
  valueNames: [
    "eventTitle",
    "datePosted",
    "eventDetailslink",
    "productType",
  ],
  
  page: 6,
  pagination: {
    innerWindow: 2,
    left: 1,
    right: 1,
    paginationClass: "pagination"
  },
  item: "<li><span class='eventTitle'></span><span class='datePosted'></span></li>"
  
  // item: function(values) {
  //   return `<div class="col-12 col-sm-6 col-lg-4 mb-48 event-item"><div class="cards events-cards p-0"><div class="cards-img"><figure><img src="${values.eventImgSrc}" alt=""></figure></div><div class="cards-body position-relative"><h3 class="fs-6 mb-2 fw-semibold eventTitle">${values.eventTitle}</h3><div class="productType">${values.productType}</div></div><div class="cards-footer position-relative"><p class="text-uppercase fw-semibold datePosted"></p><a href="${values.eventDetailslink}" class="btn round-btn"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a></div></div></div>`;
  // }
              
};

// var values = [
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2016-08-19",
//     eventDetailslink:"#"
//   },
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2016-08-15",
//     eventDetailslink:"#"
//   },
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2023-08-19",
//     eventDetailslink:"#"
//   },
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2014-02-17",
//     eventDetailslink:"#"
//   },
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2014-05-17",
//     eventDetailslink:"#"
//   },
//   {
//     eventTitle: "MD’s visit TSL North Channel Partner meet Eveniet rational",
//     eventImgSrc: "assets/images/Article-feature-01.webp",
//     datePosted: "2016-08-19",
//     eventDetailslink:"#"
//   },

// ]

const eventList = new List("event-section", eventOptions);
eventList.sort("datePosted", {
  order: "desc"
});

$('#recentSelect').change(function () {
  const selection = this.value;
  if (selection === "Recent") {
    eventList.sort("datePosted", {
      order: "desc"
    });
  } 
  else {
    eventList.sort("datePosted", {
      order: "asc"
    });
  }
});

$(".next-pagination").on("click", function () {
  const list = $(".pagination").find("li");
  $.each(list, function (position, element) {
    if ($(element).is(".active")) {
      $(list[position + 1]).trigger("click");
    }
  });
});

$(".prev-pagination").on("click", function () {
  const list = $(".pagination").find("li");
  $.each(list, function (position, element) {
    if ($(element).is(".active")) {
      $(list[position - 1]).trigger("click");
    }
  });
});

$('#eventType').change(function () {
  const selection = this.value;
  if (selection) {
    eventList.filter(function (item) {
      return (item.values().productType == selection);
    });
  } 
  else {
    eventList.filter();
  }
});



