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
    });

});//end ready

