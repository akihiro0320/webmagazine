var mySwiper = new Swiper ('.slider1', {
    // ここからオプション
    loop: true,
		effect: 'fade',
		autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var mySwiper = new Swiper('.slider2', {
	effect: 'coverflow',
	slidesPerView: 3,
  loop: true,
	autoplay: {
		delay: 10000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 80 ) {
			$('header').addClass('is-animation');
		} else {
			$('header').removeClass('is-animation');
		}

	});
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 80 ) {
      $('.subtitle').addClass('is-animation_2');
    } else {
      $('.subtitle').removeClass('is-animation_2');
    }

  });
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 80 ) {
      $('.sitename').addClass('is-animation_3');
    } else {
      $('.sitename').removeClass('is-animation_3');
    }

  });
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 80 ) {
      $('.drawer-toggle').addClass('is-animation_4');
    } else {
      $('.drawer-toggle').removeClass('is-animation_4');
    }

  });
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 80 ) {
      $('.drawer-hamburger-icon').addClass('is-animation_5');
    } else {
      $('.drawer-hamburger-icon').removeClass('is-animation_5');
    }

  });



});
