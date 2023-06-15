$(function () {

    /* aos */
    $(window).on('load', function () {
        AOS.init({
            duration: 1500
        });
    });

    /* section1 */
    function count() {
        this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
    }

    $("#section1 .swiper-container").each(function () {
        this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;
        new Swiper(this, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            speed: 800,
            loop: false,
            navigation: {
                nextEl: '#section1 .swiper-button-next',
                prevEl: '#section1 .swiper-button-prev',
            },
            on: {
                init: count,
                slideChange: count
            }
        });
    });

    /* article1 */
    $('.tab_content_wrap .tab_content').hide();
    $('.tab_content_wrap .tab_content').first().show();
    $('#article1 .tab li').click(function () {
        $('#article1 .tab li').children().removeClass();
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.tab_content_wrap .tab_content').hide();
        $('.tab_content_wrap .tab_content').eq(Idx).show();
        return false;
    });

    /* aside */
    $('aside .box .branch > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.branch').children('.branch_list').slideUp();
        } else {
            $(this).addClass('active');
            $(this).parents('.branch').children('.branch_list').slideDown();

        }
        return false;
    });

    /* top */
    $('.top_btn').click(function () {

        $('html, body').animate({ scrollTop: 0 },
            300);

    })



    var ww = $(window).width();
    var mySwiper = undefined;
    
    function initSwiper() {
    
      if (ww < 1025 && mySwiper == undefined) {
        mySwiper = new Swiper("#article2 .swiper-container", {
          slidesPerView: 'auto',
          spaceBetween: 14,
          simulateTouch: true,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
        });
      } else if (ww >= 1025 && mySwiper != undefined) {
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