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


});