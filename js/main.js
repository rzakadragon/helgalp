'use strict'

jQuery(document).ready(function ($) {
    $('.secondary').hide()
    $('.show-all').hide()
    $('.btn-more').show()

    $('.place-group .btn-more').on('click', function () {
        /** show .secondary places and 'show-all' btn */
        var container = $(this).parents('.place-group')
        container.find('.secondary').show()
        container.find('.show-all').show()

        /** hide the button */
        $(this).hide()
    })

    /** scroll to contacts whin click on call-to-action btn **/
    $(".call-to-action").click(function() {
    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
        }, 1000);
    });

})

var arr