'use strict';

document.addEventListener("DOMContentLoaded", function() {
  initSelectric();
  initMaskPhone();
  initSlider();
  openMenuMob();
  closeMenu();
  initPopup();
  popupImg();
  photoSlider();
  initSimplebar();
  articeSlider();
});

function initSimplebar() {
  if (document.documentElement.offsetWidth < 768 && document.getElementById('myElement')) {
    var dd = new SimpleBar(document.getElementById('myElement'), { autoHide: false });
  }
}
function initSelectric() {
  $(".js-select").selectric();
}

function initMaskPhone() {
  $(".js-phone").mask("+7 (000) 000-00-00");
}

function initSlider() {
  var mySwiper = new Swiper(".js-slider", {
    navigation: {
      nextEl: ".slider__arrow-next",
      prevEl: ".slider__arrow-prev"
    }
  });

  var myMaterial = new Swiper(".js-materials", {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".materials__arrow-next",
          prevEl: ".materials__arrow-prev"
        }
      },

      768: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".materials__arrow-next",
          prevEl: ".materials__arrow-prev"
        }
      }
    }
  });
}

function openMenuMob() {
  var btn = document.querySelector(".js-mob-menu");
  btn.addEventListener("click", function(e) {
    var menu = document.querySelector(".js-menu");
    if (menu.style.display !== "block") {
      menu.style.display = "block";
      e.target.classList.add("active");
    } else {
      menu.style.display = "none";
      e.target.classList.remove("active");
    }
  });
}

function closeMenu() {
  var close = document.querySelector(".js-close");
  var btn = document.querySelector(".js-mob-menu");
  var menu = document.querySelector(".js-menu");
  close.addEventListener("click", function(e) {
    if (menu.style.display !== "block") {
      menu.style.display = "block";
      btn.classList.add("active");
    } else {
      menu.style.display = "none";
      btn.classList.remove("active");
    }
  });

  window.onkeydown = function(event) {
    if (event.keyCode == 27) {
      btn.classList.remove("active");
      menu.style.display = "none";
    }
  };
}

function initPopup() {
  var popup = $('.js-popup');

  if(popup) {
    popup.magnificPopup({
      type: 'inline',
      preloader: false,
      showCloseBtn: false,
      callbacks: {
        open: function() {
          $('body').addClass('popup');
        },
        
        close: function() {
          $('body').removeAttr('class');
        },
      }
    });
  }
}

function popupImg() {
  var popup = $('.js-popup-img');
  popup.magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });
}

function photoSlider() {
  if (document.documentElement.offsetWidth < 768) {
    var mySwiper = new Swiper(".js-photo-slider", {
      centeredSlides: true,
      slidesPerView: 2.4,
    });
  }
}

function sliderReviews(item) {
  var mass = item;

  var swiper = new Swiper('.js-reviews', {
    lazy: true,
    spaceBetween: 20,
    pagination: {
      el: '.reviews__pag',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="swiper-pagination-bullet reviews__pag-item" style="background-image: url(' + mass[index] + ')"></span>';
      },
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });
}

function articeSlider() {

  var slider = document.querySelector('.js-article-slider');

  if (slider) {
    var galleryThumbs = new Swiper('.js-article-thumbs', {
      spaceBetween: 15,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 4,
      breakpoints: {
        992: {
          slidesPerView: 3
        },
        767: {
          slidesPerView: 2
        }
      }
    });
    var galleryTop = new Swiper('.js-article-slider', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 4,
      navigation: {
        nextEl: '.article__control-btn_next',
        prevEl: '.article__control-btn_prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }

}