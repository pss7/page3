$(function () {

    /* 환경설정 */
    $('.setting_list li a').click(function () {
        if ($(this).hasClass('agree')) {
            $(this).removeClass('agree');
            $(this).find('span').text('동의하지 않음')
        } else {
            $(this).addClass('agree');
            $(this).find('span').text('동의함')
        }
    });

    $('.com_check_box input + .agree_chk').click(function () {

        if($('.com_btn2').hasClass('disabled')){
            $('.com_btn2').removeClass('disabled');
            $('.com_btn2').addClass('enable');

        }else{
            $('.com_btn2').addClass('disabled');
            $('.com_btn2').removeClass('enable');
        }
   
    });


});