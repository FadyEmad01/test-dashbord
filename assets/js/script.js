var options = {
  series: [
    {
      name: "اسبوع",
      data: [2, 15, 3, 22, 15, 12, 10, 22, 12, 18, 8, 10],
    },
    {
      name: "شهر",
      data: [0, 20, 10, 2, 3, 25, 10, 15, 2, 20, 5, 12],
    },
  ],
  colors: ["#67E8F9", "#C280EB"],

  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    min: 0,
    max: 25,
    categories: [5, 10, 15, 20, 25, 30],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
let toggle = document.querySelector(".page .toggle");
let toggleUl = document.querySelector(".sidebar .toggle-ul");
let sidebar = document.querySelector(".sidebar");
let list = document.querySelector(".sidebar ul");

toggle.addEventListener("click", () => {
  sidebar.style.width = "230px";
  sidebar.style.padding = "10px 10px 0 0";
  sidebar.style.position = "fixed";
});
toggleUl.addEventListener("click", () => {
  sidebar.style.width = 0;
  sidebar.style.padding = 0;
});
window.onresize = () => {
  if (window.innerWidth >= 850) {
    sidebar.style.width = "230px";
    sidebar.style.padding = "10px 10px 0 0";
    sidebar.style.position = "fixed";
  } else {
    sidebar.style.width = 0;
    sidebar.style.padding = 0;
    sidebar.style.position = "fixed";
  }
};
// let addButton = document.querySelector(".add-file");
// let form = document.getElementById("form");
// let file = document.querySelector(".files").innerHTML;
// addButton.addEventListener("click", function () {
//   let fileform = document.createElement("div");
//   fileform.innerHTML = `
//   <div class="files">
//     <div class="head">
//       <h5>الملفات</h5>
//     </div>
//     <div class="body">
//       <span>اضافة ملف</span>
//       <input type="file" id="upload" hidden />
//       <label for="upload">
//         <div class="image">
//           <img src="images/upload.png" alt="" />
//         </div>
//         <p>اسحب ملف او قم بالضغط لاضافة ملف</p>
//       </label>
//     </div>
//     <div class="address">
//       <label for="">العنوان الفرعي</label>
//       <input type="text" />
//     </div>
//     <div class="description">
//       <label for="">العنوان الفرعي</label>
//       <textarea name="description" id="description"></textarea>
//     </div>
//   </div>
// `;
//   form.appendChild(fileform);
// });

document.addEventListener('DOMContentLoaded', function() {
  var currentPage = window.location.href;

  var sidebarLinks = document.querySelectorAll('.sidebar ul li a');

  sidebarLinks.forEach(function(link) {
      if (link.href === currentPage) {
          link.classList.add('active');
      }
  });
});

// ===== Swipers =====
var swiper = new Swiper("#Projects .swiper", {
  // slidesPerView: 3,
  // spaceBetween: 10,
  // effect: "coverflow",
  // loop: true,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  effect: "coverflow",
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    // type: 'progressbar',
    // type: 'fraction',
    // clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  },
  grabCursor: true,
  // autoplay: {
  //   delay: 3000,
  // },
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  reverseDirection: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: false,
  },
});