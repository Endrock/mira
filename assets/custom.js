jQuery.noConflict();

/************Main**Top*Menu******************************/


jQuery(function ($) {
  $.noConflict();
  var html = $('html, body'),
    navContainer = $('.nav-container'),
    navToggle = $('.nav-toggle'),
    navDropdownToggle = $('.has-dropdown');

  // Nav toggle
  navToggle.on('click', function (e) {
    var $this = $(this);
    e.preventDefault();
    $this.toggleClass('is-active');
    navContainer.toggleClass('is-visible');
    html.toggleClass('nav-open');
  });

  // Nav dropdown toggle
  navDropdownToggle.on('click', function () {
    var $this = $(this);
    $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
  });

  // Prevent click events from firing on children of navDropdownToggle
  navDropdownToggle.on('click', '*', function (e) {
    e.stopPropagation();
  });
});

jQuery(document).ready(function ($) {
  $('.dropdown').hover(function () {
    $(this).addClass('open');
    $(this).find('.dropdown').stop(true, true).delay(0).fadeIn(0);
  }, function () {
    $(this).removeClass('open');
    $(this).find('.dropdown').stop(true, true).delay(0).fadeOut(0);
  });



  //$(".top-head-right").unbind('mouseenter mouseleave');

  $(".top-head-right").hover(
    function () {
      $(".order-now-menu-box").show();
      $("body").addClass('bg-overlay');
    }, function () {
      $(".order-now-menu-box").hide();
      $("body").removeClass('bg-overlay');
    }
  );

  $(".btn-order-now").click(function () {
    $(".order-now-menu-box").show();
    $("body").addClass('bg-overlay');
  });

  $(".order-now-close").click(function () {
    $(".order-now-menu-box").hide();
    $("body").removeClass('bg-overlay');
  });

  $('.order-now-menu-box .dropdown-menu-submenu').hide();
  var body_width = $("body").width();
  if (body_width > 1024) {
    $(".order-now-menu-box .has-submenu").hover(
      function () {
        $(this).find(".dropdown-menu-submenu").show();
      }, function () {
        $(this).find(".dropdown-menu-submenu").hide();
      }
    );
  }

  // Mobile shop menu show hide
  $(".order-now-menu-box .has-submenu").click(function () {
    $('.order-now-menu-box .dropdown-menu-submenu').hide();
    $(this).find(".dropdown-menu-submenu").toggle();
  });

  // Mobile footer menu show hide
  $(".ft-menu").click(function () {
    $('.ft-menu').not(this).removeClass("footer-menu-open");
    $(this).toggleClass("footer-menu-open");
  });



});

/**************** Video Popup **********************/
jQuery(document).ready(function ($) {
  $('.mira_video').on('click', function () {
    //$('.template_section_video_light_box').fadeIn();
    $('.template_section_video_light_box').attr("style", "display: block !important");
    var src = 'https://www.youtube.com/embed/' + $(this).data('video');
    $('.template_section_video_light_box iframe').attr('src', src);
  });

  $('.template_section_video_light_box .close_light_box').on('click', function () {
    $('.template_section_video_light_box').fadeOut(function () {
      $('.template_section_video_light_box iframe').attr('src', '');
    });
  });
});

/** Mira Popup start **/
jQuery(document).ready(function ($) {
  $('.open_mira_popup').on('click', function () {
    //$('.mira_content_popup').fadeIn();
    $('.mira_content_popup').attr("style", "display: block !important");
  });

  $('.mira_content_popup .close_light_box').on('click', function () {
    $('.mira_content_popup').fadeOut(function () {
    });
  });
});
/** Mira Popup end **/

jQuery(document).ready(function ($) {
  $('#experts-mira-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 600,
    //autoplayTimeout:1000,
    //autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1024: {
        items: 1
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#resent-post-slider-four').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#expert-teacher-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1024: {
        items: 2
      },
      1025: {
        items: 3
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#experts-mira-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1024: {
        items: 1
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#stories-slider-col').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1024: {
        items: 1
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#client-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 3
      },
      767: {
        items: 3
      },
      1024: {
        items: 4
      }

    }
  })
});


jQuery(document).ready(function ($) {
  $('#exseed-review-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#success_story_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }

    }
  })
});

// Desktop stuff start
jQuery(document).ready(function ($) {
  if ($(window).width() >= 768) {
      startDesktopCarousel($);
    // For product part
    $(".mobile-price").remove();
  }
});

function startDesktopCarousel($) {
  $('.shop-all-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      1024: {
        items: 3
      }

    }
  })
}
// Desktop slider end

// Mobile slider start
jQuery(document).ready(function ($) {
  if ($(window).width() < 768) {
    startMobileCarousel($);
  }
});

function startMobileCarousel($) {
  $('#compare-plan-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      767: {
        items: 1
      },
      1024: {
        items: 3
      }

    }
  });

  $('#mira-app-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      767: {
        items: 1
      },
      1024: {
        items: 3
      }

    }
  });
  $('#panorama-test-steps-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      767: {
        items: 1
      },
      1024: {
        items: 3
      }

    }
  });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
}
// Mobile slider end


jQuery(document).ready(function ($) {
  $('#medical-advisors').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 4
      }

    }
  })
});
jQuery(document).ready(function ($) {
  $('#doctors-team').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 4
      }

    }
  })
});
jQuery(document).ready(function ($) {
  $('#fertility-clinics').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 2,
        autoplay: true
      },
      767: {
        items: 2
      },
      1024: {
        items: 5
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#product-column-4-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 2,
        autoplay: true
      },
      767: {
        items: 2
      },
      1024: {
        items: 4
      }

    }
  })
});

jQuery(document).ready(function ($) {
  $('#success-stories-column-4-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        autoplay: true
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }

    }
  })
});
jQuery(document).ready(function ($) {
  $('#doctors-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 600,
    //autoplayTimeout:1000,
    //autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1024: {
        items: 1
      }

    }
  })
});

/******/
jQuery(document).ready(function ($) {

  $('.slideInTop').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInDown',
    offset: 0
  });
  $('.slideLeft').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInLeft',
    offset: 0
  });
  $('.slideRight').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInRight',
    offset: 0
  });
  $('.zoomInBox').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: 0
  });
  $('.flipY').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInY',
    offset: 0
  });
  $('.flipX').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 0
  });
  $('.lightIn').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedIn',
    offset: 0
  });

  $('.lightOut').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedOut',
    offset: 0
  });

  $('.RubberBand').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated rubberBand',
    offset: 0
  });

  $('.FadeIn').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 0
  });
  $('.FadeInUpBig').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUpBig',
    offset: 0
  });
  $('.FadeUp').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 0
  });
  $('.animate6').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 100
  });
  $('.fadeLeft').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });
  $('.fadeRight').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
  });
  $('.animate9').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUpBig',
    offset: 100
  });
  $('.animate10').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDownBig',
    offset: 100
  });
});
/******/

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

jQuery(document).ready(function ($) {
  $(window).trigger('scroll'); // init the value

  $("#order_now_button,.order_now_button").click(function () {
    $('html,body').animate({
      scrollTop: $(".product-form__submit").offset().top - 200
    }, 'slow');
  });

  $(".subscription_button").click(function () {
    $('html,body').animate({
      scrollTop: $(".product-form__submit").offset().top - 300
    }, 'slow');
  });


  // Scrolled to Referral widget on Reward page
  var utm_alternate_medium = getUrlVars()["utm-target-section"];
  if (utm_alternate_medium == "referral") {
    setTimeout(function () {
      $('html,body').animate({
        scrollTop: $(".yotpo-widget-referral-widget").offset().top - 0
      }, 'slow');
    }, 4000);
  }

});


jQuery(document).ready(function ($) {
  $('.home-design-gallary').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 79,
    itemMargin: 0,
    directionNav: true,
    //asNavFor: '.slider-gallary'
  });



});


jQuery(document).ready(function ($) {
  $('.home-design-gallary').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 79,
    itemMargin: 0,
    directionNav: true,
    //asNavFor: '.slider-gallary'
  });


});

jQuery(document).ready(function ($) {
  // Set up the toggle effect:
  $('.show-hide-link').on('click', function (e) {
    $('.show-hide-desc').toggle();
    $('.show-hide-link').toggle();
    e.preventDefault();
  });

});


jQuery(document).ready(function ($) {
  // Configure/customize these variables.
  var showChar = 134;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Read More";
  var lesstext = "Less More";


  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});

// Confirm wands terms and condition load more
jQuery(document).ready(function ($) {
  $(".cw-condition-load-more").click(function () {
    $(this).hide();
    $('.pre-order-sec .heading-1').css('margin-top', '-68px');
    $('.pre-order-text').addClass('hidden');

  });

  // Video popup for order page
  //Template section video 
  $('.video-home-sec .open_video').on('click', function () {
    $('.template_section_video_light_box').fadeIn();
    var src = 'https://www.youtube.com/embed/' + $(this).data('video');
    $('.template_section_video_light_box iframe').attr('src', src);
  });
  //Template section video END

  //Template section video light box
  $('.template_section_video_light_box .close_light_box').on('click', function () {
    $('.template_section_video_light_box').fadeOut(function () {
      $('.template_section_video_light_box iframe').attr('src', '');
    });
  });
});

// Add UTM parameter to the Mira app start


jQuery(document).ready(function ($) {
  var u = navigator.userAgent;
  //var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  //var isApp = u.indexOf('MiraAPP') > -1
  if (isIOS && u.indexOf('MiraAPP') > -1) {
    $(".hide_ios").hide();
  }






  if (navigator.userAgent.indexOf('MiraAPP') > -1) {

    $('body').find('a').each(function () {
      var url = $(this).attr('href');
      if (url !== undefined && url.indexOf("@") == -1) {
        if (url.indexOf("?") == -1) {
          var utm_source = '?utm_source=mira-app&utm_medium=mobile';
        } else {
          var utm_source = '&utm_source=mira-app&utm_medium=mobile';
        }
        //$(this).attr( 'href', url + utm_source );
        //var post_url = $(this).attr('href');

      }
    });
  }
});
// Add UTM parameter to the Mira app end

jQuery(document).ready(function ($) {
  setTimeout(function () {
    $('.rebuy-addon input[type=checkbox]').change(function () {
      var shopify_add_to_cart_price = $('.price .price-item--regular').data("price");
      if (this.checked) {
        $('.rebuy-addon__subtotal').hide();
        var rebuy_addon_subtotal = $('.rebuy-addon__subtotal-value .rebuy-money span:nth-child(2), .rebuy-addon__subtotal-value .rebuy-money.sale span:nth-child(2)').text().trim();
        var rebuy_addon_subtotal_splited = rebuy_addon_subtotal.split(' ');
        var rebuy_addon_subtotal_num = rebuy_addon_subtotal_splited[0].slice(1);
        var rebuy_addon_subtotal_numeric = rebuy_addon_subtotal_num.replace(",", ".");

        var shopify_subtotal_splited = shopify_add_to_cart_price.split(' ');
        var currency_symbol = shopify_add_to_cart_price.charAt(0);
        var currency_code = shopify_subtotal_splited[1];
        var shopify_subtotal_splited_num = shopify_subtotal_splited[0].slice(1);
        var shopify_subtotal_splited_numeric = shopify_subtotal_splited_num.replace(",", ".");

        var subtotal_sum = parseFloat(rebuy_addon_subtotal_numeric) + parseFloat(shopify_subtotal_splited_numeric);
        if (typeof currency_code === "undefined") {
          var final_subtotal = currency_symbol + subtotal_sum.toFixed(2);
        } else {
          var final_subtotal = currency_symbol + subtotal_sum.toFixed(2) + ' ' + currency_code;
        }
        $('.price .price-item--regular').text(final_subtotal);
      } else {
        $('.price .price-item--regular').text(shopify_add_to_cart_price);
      }
    });
  }, 4000);
});

/* jQuery(document).ready(function($) {
    $('body').on('click', '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {
      if ($('#agree').is(':checked')) {
        $(this).submit();
      }
      else {
        //alert("You must agree with the terms and conditions of sales to check out.");
        //$('#cart_disclaimer-error').css("display", "flex");
        $('#cart_disclaimer-error').css('display', 'flex');
        $('#agree').focus();
        return false;
      }
    });
  }); */

/*jQuery(document).ready(function($) {
      
  // For Product variation - product page
  $('.custom-price-select').click(function(){
    $(this).toggleClass('custom-price-select-open');
  })
  
  var default_text = $(".select-value").text(); 
  setTimeout(function(){
    //$('.fancy-dropdown').val(default_text).trigger('change');
  }, 500);
  
  $('.custom-price-select ul li').click(function(){
    var default_text = $(".select-value").text();   
    var li_text = $(this).text();
    $(".select-value").text(li_text);
    $(this).text(default_text);
    console.log(li_text);
    $('.fancy-dropdown').val(li_text).trigger('change');
  });

});*/

jQuery(document).ready(function ($) {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //var pass_format = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
  var pass_format = /^(.{8,30}$)/;

  $("#register_submit").click(function () {
    var error_count = 0;
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var customer_email = $("#RegisterForm-email").val();
    var customer_password = $("#RegisterForm-password").val();

    $("#create_customer input").removeClass("input--error");
    $("#create_customer .input-error-message").hide();
    if (first_name == "") {
      $("#first_name").addClass("input--error");
      $("#first_name-error").show();
      error_count = 1;
      //return false;
    }
    if (customer_email == "" || !customer_email.match(emailformat)) {
      $("#RegisterForm-email").addClass("input--error");
      $("#customer_email-error").show();
      error_count = 1;
      //return false;
    }
    if (customer_password == "" || !customer_password.match(pass_format)) {
      $("#RegisterForm-password").addClass("input--error");
      $("#customer_password-error").show();
      error_count = 1;
      //return false;
    }
    if (!$("#RegisterForm-terms").is(":checked")) {
      $("#RegisterForm-terms").addClass("input--error");
      $("#RegisterForm-terms-error").show();
      error_count = 1;
    }
    if (error_count) { return false; }
  });

  $("#recover_submit").click(function () {
    var error_count = 0;
    var customer_email = $("#RecoverEmail").val();


    $("#RecoverEmail").removeClass("input--error");
    $("#recover_email-error").hide();

    if (customer_email == "" || !customer_email.match(emailformat)) {
      $("#RecoverEmail").addClass("input--error");
      $("#recover_email-error").show();
      error_count = 1;
      //return false;
    }

    if (error_count) { return false; }
  });


});