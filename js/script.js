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

        if ($('.com_btn2').hasClass('disabled')) {
            $('.com_btn2').removeClass('disabled');
            $('.com_btn2').addClass('enable');

        } else {
            $('.com_btn2').addClass('disabled');
            $('.com_btn2').removeClass('enable');
        }

    });

    /* 해지 */
    $('.membership_info').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().children('p').fadeOut();
        } else {
            $(this).addClass('active');
            $(this).next().children('p').fadeIn();
        }
    });
    $('.membership_info_box .close').click(function () {
        $('.membership_wrap p').fadeOut();
        $('.membership_wrap .membership_info').removeClass('active');
    });
    $('.membership_wrap .com_select_box .com_select > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
    });

    /* 결제수단 변경 */
    $('.payment_method_list li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.payment_method_list li a').removeClass('active');
            $(this).addClass('active');

        }
    });

    /* 출퇴근 내역 */
    $('.com_rayout_list1 li .weekly a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().fadeOut();
        } else {
            $(this).addClass('active');
            $(this).next().fadeIn();
        }
    });

    /* 결제수단 변경 */
    $('.payment_method_list li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.payment_method_list li a').removeClass('active');
            $(this).addClass('active');

        }
    });

    /* 결제 */
    $('.payment_method_list li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.payment_method_list li a').removeClass('active');
            $(this).addClass('active');
        }
        return false;
    });




});