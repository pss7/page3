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
    $('.com_select_box .com_select .view li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
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

    /* 이용약관 */
    $('.com_text_wrap.st .text_box > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.com_text_wrap.st .text_box .text').slideUp();
        } else {
            $(this).addClass('active');
            $('.com_text_wrap.st .text_box .text').slideDown();
        }
        return false;
    });
    $('.terms_content').hide();
    $('.terms_content').first().show();
    $('.com_text_wrap.st .com_tab1 li').click(function () {
        $('.com_text_wrap.st .com_tab1 li a').removeClass('active');
        $(this).children().addClass('active');

        var Idx = $(this).index();

        $('.terms_content').hide();
        $('.terms_content').eq(Idx).show();




    });



});