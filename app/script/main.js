$(document).ready(function() {
    $('.menu_trigger').click(function() {
        $('nav ul').slideToggle(500);
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
    });// end static seatch

    $(function () {
        $('#modal_date_popup').click(function () {
            $('.popup_date').fadeIn(300)
        });

    });

    $(document).click(function (event) {
        if ($(event.target).closest('#modal_date_popup').length || $(event.target).closest('.popup_date').length) return;
        $('.popup_date').fadeOut(500)
        event.stopPropagation();
    })

});//end ready

