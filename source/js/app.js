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
  tabs();
  swapBigImg();
  projectsTabLinkSwiper();
  initMaskNumber();
  mfpVideo();
  // selectChoiceZabor();
});

function mfpVideo() {
  var video = $('.js-popup-video');
  if(video) {
    video.magnificPopup({
      type: 'iframe',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
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
function tabs() {
  var tab = document.querySelector('.js-tab');
  var link = document.querySelectorAll('.js-tab .js-tab-link');
  
  if (tab) {
    tab.addEventListener('click', function(e) {
      
      if(e.target.classList.contains('js-tab-link')) {
        var index = e.target.getAttribute('data-index');
        var content = document.querySelectorAll('.js-tab-content');
        content.forEach(function(item, idx) {
          link[idx].classList.remove('active');
          item.classList.remove('active');
        });
        e.target.classList.add('active');
        content[index].classList.add('active');
      }
    });
    link[0].click();
    tabArrow(link);
  }
}

function tabArrow(link) {
  var linkArray = Array.from(link);
  var arrow = document.querySelector('.js-tab-arrow');
  if(arrow) {
    arrow.addEventListener('click', function(e) {
      if(e.target.classList.contains('js-tab-prev')) {
        link.forEach(function(item, idx) {
          if (item.classList.contains('active')) {
            if (idx != 0) {
              link[idx-1].click();
            }
          }
        });
      }
      if (e.target.classList.contains('js-tab-next')) {
        linkArray.every(function(item, idx) {
          if (item.classList.contains('active')) {
            if (idx != link.length -1) {
              link[idx+1].click();
              return false;
            }
          } else {
            return true;
          }
        });
      }
    })
  }
}


function initSimplebar() {
  if (document.documentElement.offsetWidth < 768 && document.getElementById('myElement')) {
    var simpleBarInit = new SimpleBar(document.getElementById('myElement'), { autoHide: false });
  }
}
function initSelectric() {
  $(".js-select").selectric();
}

function initMaskPhone() {
  $(".js-phone").mask("+7 (000) 000-00-00");
}

function initMaskNumber() {
  var number = document.querySelectorAll('.js-number');
  if(number) {
    number.forEach(function(item) {
      var numberMask = IMask(
        item,
        {
          mask: Number,
          min: 0,
          max: 100000,
          thousandsSeparator: ' '
        });
    })
  }
}

function selectChoiceZabor() {
  var zabor = document.querySelector('.js-view-zabor');
  zabor.addEventListener('change', function(e) {
    console.log(e);
    console.log(e.target.value);
  });
}

function projectsTabLinkSwiper() {
  var mySwiper = new Swiper('.js-projects-tab-link', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: ".single-projects__link-btn-next",
      prevEl: ".single-projects__link-btn-prev"
    }
  });

  var swiper = new Swiper('.js-ex-portf-slider', {
    slidesPerView: '3',
    spaceBetween: 30,
    loop: false,
    simulateTouch: false,
    navigation: {
      nextEl: ".single-projects__link-btn-next",
      prevEl: ".single-projects__link-btn-prev"
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1
      }
    }
  });
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
  var btn = document.querySelector('.js-mob-menu');
  btn.addEventListener("click", function(e) {
    var menu = document.querySelector('.js-menu');
    if (menu.style.display !== 'block') {
      menu.style.display = 'block';
      e.target.classList.add('active');
    } else {
      menu.style.display = 'none';
      e.target.classList.remove('active');
    }
  });
}

function closeMenu() {
  var close = document.querySelector('.js-close');
  var btn = document.querySelector('.js-mob-menu');
  var menu = document.querySelector('.js-menu');
  close.addEventListener('click', function() {
    if (menu.style.display !== 'block') {
      menu.style.display = 'block';
      btn.classList.add('active');
    } else {
      menu.style.display = 'none';
      btn.classList.remove('active');
    }
  });

  window.onkeydown = function(event) {
    if (event.keyCode == 27) {
      btn.classList.remove('active');
      menu.style.display = 'none';
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

// вызывается в коде html
function sliderReviews(item) {
  var mass = item;

  var swiper = new Swiper('.js-reviews', {
    lazy: true,
    spaceBetween: 20,
    pagination: {
      el: '.reviews__pag',
      clickable: true,
      renderBullet: function (index) {
        return '<span class="swiper-pagination-bullet ' + mass[index].class +  '" style="background-image: url(' + mass[index].img + ')"></span>';
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


function swapBigImg() {
  var wrapBig = document.querySelectorAll('.js-change-big-img');
  if (wrapBig) {
    wrapBig.forEach(function(item) {
      var bigImg = item.querySelector('.js-img-big img');
      var smallImg = item.querySelector('.js-img-small');
      var allImg = item.querySelectorAll('.js-img-small img');
      allImg[0].classList.add('active');
      smallImg.addEventListener('click', function(e) {
        
        if(!e.target.classList.contains('js-img-small')) {
          allImg.forEach(function(item) {
            item.removeAttribute('class');
          });
          e.target.classList.add('active');
          var src = e.target.getAttribute('src');
          bigImg.setAttribute('src', src);
        }
      });
    });
  }
}