$(document).ready(function () {
  $(".search-post").click(function () {
    $(".search-form-top-right").toggle();
  });
  // right lang card dropdown click
  $(".menu-right-lang").click(function () {
    $(".dropdown-account").toggle();
  });
  // owl carousel js
  $(".owl-carousel").owlCarousel({
    margin: 30,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 6,
        nav: false,
        loop: false,
      },
    },
  });

  // adding css class bye click function
  $(".faq-btn").click(function () {
    $(".active").not(this).removeClass("active");
    $(this).toggleClass("active");
  });

  // swiper js start
  var swiper = new Swiper(".mySwiper", {
    freeMode: true,
    autoplay: {
      delay: 2500,
    },
    loop: true,
    pagination: {
      el: false,
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

const scrollTop = document.querySelector(".scrollTop");
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// adding css class on click function

const acl = document.querySelector(".faq-btn");

acl.forEach(accl, () => {
  accl.addEventListener("click", () => {
    accl.classList.add("active");
  });
});
