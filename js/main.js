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
})

var arr