$(document).ready(function() {
    $('.menu_trigger').click(function() {
        $('#basic_menu').slideToggle(500);
        $('.nav_kind').click(function () {
            $('.nav_kind_view').css('display','block !important');
        })
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('nav ul').removeAttr('style');
        }
    });//end resize

    $(function () {
        $('#myAffix').width($('#left').width());
        $(window).resize(function () {
            $('#myAffix').width($('#left').width());
        });
    });// end static search

    $(function () {
        $('#modal_date_popup').click(function () {
            $('.popup_date').fadeIn(300)
        });

    });

    $(document).click(function (event) {
        if ($(event.target).closest('#modal_date_popup').length || $(event.target).closest('.popup_date').length) return;
        $('.popup_date').fadeOut(500)
        event.stopPropagation();
    });//end model window date

    $('.content_item').mouseover(function () {
        $('.item_info_assessment').show(1000)
    });


});//end ready

