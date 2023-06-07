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


});