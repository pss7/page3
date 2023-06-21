$(function () {


    var swiper = new Swiper('.blog_slide_wrap .swiper-container', {
        slidesPerView: '1',
        slidesPerGroup: 1,
        loop : true,
        speed: 800,
        navigation: {
            nextEl: '.blog_slide_wrap .swiper-button-next',
            prevEl: '.blog_slide_wrap .swiper-button-prev',
        },
        breakpoints: {
            1199: {

            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 8,
            },
   
        }
    });

    /* 블로그 상세 */
    var ww = $(window).width();
    var mySwiper = undefined;
    
    function initSwiper() {
    
      if (ww < 769 && mySwiper == undefined) {
        mySwiper = new Swiper(".blog_wrap .blog_detail_wrap .blog_new_content .swiper-container", {
          slidesPerView: 'auto',
          simulateTouch: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
      } else if (ww >= 769 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
      }
    }
    
    initSwiper();
    
    $(window).on('resize', function () {
      ww = $(window).width();
      initSwiper();
    });


});