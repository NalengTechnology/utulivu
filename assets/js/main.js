(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
    -------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.sigma_preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Cart Trigger
  -------------------------------------------------------------------------------*/
  $(".sigma_cart-trigger").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass('cart-open');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".sigma_search-trigger").on('click', function(e) {
    e.preventDefault();
    $(".sigma_search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
  -------------------------------------------------------------------------------*/
  $(".aside-trigger-right").on('click', function() {
    var $el = $(".sigma_aside-right-panel");
    $el.toggleClass('open');
    if ($el.hasClass('open')) {
      setTimeout(function() {
        $el.find('.sidebar').fadeIn();
      }, 300);
    } else {
      $el.find('.sidebar').fadeOut();
    }
  });

  $(".aside-trigger-left").on('click', function() {
    $(".sigma_aside-left").toggleClass('open');
  });

  $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Custom scroll bars
  -------------------------------------------------------------------------------*/
  $('.sigma_dropdown-scroll').slimScroll({
    height: 300,
    position: "right",
    size: "5px",
    color: "#dcdcdc",
    opacity: 1,
    wheelStep: 5,
    touchScrollStep: 50,
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
    -------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.popup-vimeo').magnificPopup({
    type: 'iframe'
  });
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  /*-------------------------------------------------------------------------------
  ion Range Sliders (Price filter)
  -------------------------------------------------------------------------------*/
  $(".js-range-slider").ionRangeSlider();

  $('.sigma_product-single-thumb')
    .wrap('<span style="display:inline-block" class="sigma_product-single-zoom"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  $(".sigma_countdown-timer").each(function() {
    var $this = $(this);
    $this.countdown($this.data('countdown'), function(event) {
      $(this).text(
        event.strftime('%D days %H:%M:%S')
      );
    });
  });

  /*-------------------------------------------------------------------------------
  Checkout Notices
  -------------------------------------------------------------------------------*/
  $(".sigma_notice a").on('click', function(e) {
    e.preventDefault();

    $(this).closest('.sigma_notice').next().slideToggle();
  });

  /*-------------------------------------------------------------------------------
  Daily deals slider
  -------------------------------------------------------------------------------*/
  $(".deals-slider, .sigma_testimonials").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Testimonials slider
  -------------------------------------------------------------------------------*/
  $(".sigma_testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    customPaging : function(slider, i) {
        return '<div class="sigma_round-dot">'+
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197 197" enable-background="new 0 0 197 197" xml:space="preserve">'+
            '<circle class="sigma_round-dot-stroke" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
            '<circle class="sigma_round-dot-circle" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
          '</svg>'+
        '</div>';
    },
  });

  /*-------------------------------------------------------------------------------
  Daily deals slider
  -------------------------------------------------------------------------------*/
  $(".sigma_grid-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Other mentions slider
  -------------------------------------------------------------------------------*/
  $(".sigma_other-mentions-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.sigma_other-mentions .slider-prev'),
    nextArrow: $('.sigma_other-mentions .slider-next'),
    dots: false,
    autoplay: false,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Banner slider (Home v1)
  -------------------------------------------------------------------------------*/
  $(".banner-1 .sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    prevArrow: $('.banner-1 .slider-prev'),
    nextArrow: $('.banner-1 .slider-next'),
    customPaging : function(slider, i) {
        return '<div class="sigma_round-dot">'+
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197 197" enable-background="new 0 0 197 197" xml:space="preserve">'+
            '<circle class="sigma_round-dot-stroke" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
            '<circle class="sigma_round-dot-circle" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
          '</svg>'+
        '</div>';
    },
    responsive: [{
        breakpoint: 991,
        settings: {
          dots: false,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Banner slider (Home v2)
  -------------------------------------------------------------------------------*/
  $(".banner-2 .sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
  });

  /*-------------------------------------------------------------------------------
  Banner slider (Home v3)
  -------------------------------------------------------------------------------*/
  $(".banner-3 .sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.banner-3 .slider-prev'),
    nextArrow: $('.banner-3 .slider-next'),
    dots: false,
  });

  /*-------------------------------------------------------------------------------
  Fresh Arrivals
  -------------------------------------------------------------------------------*/
  $(".sigma_fresh-arrivals-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.sigma_fresh-arrivals .slider-prev'),
    nextArrow: $('.sigma_fresh-arrivals .slider-next'),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Upsells
  -------------------------------------------------------------------------------*/
  $(".sigma_upsells-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.sigma_upsells .slider-prev'),
    nextArrow: $('.sigma_upsells .slider-next'),
  });

  /*-------------------------------------------------------------------------------
  Verses
  -------------------------------------------------------------------------------*/
  $(".sigma_verse-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    customPaging : function(slider, i) {
        return '<div class="sigma_round-dot">'+
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 197 197" enable-background="new 0 0 197 197" xml:space="preserve">'+
            '<circle class="sigma_round-dot-stroke" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
            '<circle class="sigma_round-dot-circle" stroke-linecap="round" cx="98.5" cy="98.6" r="97.5"></circle>'+
          '</svg>'+
        '</div>';
    },
  });

  /*-------------------------------------------------------------------------------
  Blog
  -------------------------------------------------------------------------------*/
  $(".sigma_related-slider").each(function(){

    var $this = $(this);

    $this.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      prevArrow: $this.closest('.sigma_related-posts').find('.slider-prev'),
      nextArrow: $this.closest('.sigma_related-posts').find('.slider-next'),
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  });

  /*-------------------------------------------------------------------------------
  Causes
  -------------------------------------------------------------------------------*/
  $(".sigma_causes-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: true,
    prevArrow: $('.sigma_causes-shortcode .slider-prev'),
    nextArrow: $('.sigma_causes-shortcode .slider-next'),
  });

  /*-------------------------------------------------------------------------------
  Rounded Pie chart
  -------------------------------------------------------------------------------*/
  $(function() {
    $('.section-visible').bind('inview', function( event, visible, visiblePartX, visiblePartY ) {
      if (visible) {
        $('.chart').easyPieChart({
          //your configuration goes here
          easing: 'easeOut',
          delay: 3000,
          barColor: '#ff9044',
          trackColor: '#F0F2F3',
          scaleColor: false,
          lineWidth: 5,
          trackWidth: 5,
          size: 130,
          animate: 2000,
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
        $(this).unbind('inview');
      }
    });
  });
  /*-------------------------------------------------------------------------------
  video-slider
  -------------------------------------------------------------------------------*/
  $(".sigma_video-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
  });

  /*-------------------------------------------------------------------------------
  event-slider
  -------------------------------------------------------------------------------*/
  $(".sigma_event-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    vertical: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.sigma_event-box .slider-prev'),
    nextArrow: $('.sigma_event-box .slider-next'),
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Add / Subtract Quantity
  -------------------------------------------------------------------------------*/
  $(".qty span").on('click', function() {
    var qty = $(this).closest('.qty').find('input');
    var qtyVal = parseInt(qty.val());
    if ($(this).hasClass('qty-add')) {
      qty.val(qtyVal + 1);
    } else {
      return qtyVal > 1 ? qty.val(qtyVal - 1) : 0;
    }
  })

  /*-----------------------------------
    Back to Top
    -----------------------------------*/
  $('.sigma_back-to-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // init wow js
  new WOW().init();

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

  //On resize events
  $(window).on('resize', function() {


  });

})(jQuery);
