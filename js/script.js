$( document ).ready(function() {

let $buttonPrev = $('.button_prev'),
    $buttonCancel = $('.button_cancel'),
    $buttonNext = $('.button_next'),
    $buttonLogin = $('.button_login');

$buttonLogin.on('click', function() {
    $('.wrapper').addClass('wrapper_dark');
    $(this).hide();
    $('.form').show(200);
});

$buttonCancel.on('click', function() {
    $('.wrapper').removeClass('wrapper_dark');
    $('.form').hide();
    $('.button_login').show(200);
});

$buttonPrev.on('click', function() {
    let $thisSection = $('.section.showed'),
        thisData = $thisSection.data('section');
        if ($buttonPrev && thisData < 2) {
            $('.wrapper').removeClass('wrapper_dark');
            $('.form').hide();
            $('.button_login').show(200);
        }
        if ( thisData > 1 ) {
            getSectionElementByDataId(thisData).removeClass('showed');
            getSectionElementByDataId(--thisData).addClass('showed');
        }
        if ( thisData < 3 ) {
            $('.button_next_div').removeClass('dis-none');
            $('.button_next_btn').addClass('dis-none');
        }
        // move line-arrow
        if ( thisData > 1 && thisData < 3 ) { 
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab3').addClass('margin-l_tab2'); 
        } 
        else if ( thisData > 2 ) {
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab2').addClass('margin-l_tab3'); 
        }
        else {
            $(".line-arrow").removeClass('margin-l_tab2 margin-l_tab3').addClass('margin-l_tab1'); 
        }
});

$buttonNext.on('click', function() {
    let $thisSection = $('.section.showed'),
        thisData = $thisSection.data('section');
        if ( thisData < 3 ) {
            getSectionElementByDataId(thisData).removeClass('showed');
            getSectionElementByDataId(++thisData).addClass('showed');
        }
        if ( thisData > 2 ) {
            $('.button_next_div').addClass('dis-none');
            $('.button_next_btn').removeClass('dis-none');
        }
        // move line-arrow
        if ( thisData > 1 && thisData < 3 ) { 
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab3').addClass('margin-l_tab2'); 
        } 
        else if ( thisData > 2 ) {
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab2').addClass('margin-l_tab3'); 
        }
        else {
            $(".line-arrow").removeClass('margin-l_tab2 margin-l_tab3').addClass('margin-l_tab1'); 
        }
});

$('.button_next_btn').on('click', function() {
   alert('sent');
});

$('.tab').on('click', function() {
    let $prevSection = $('.section.showed'),
        sectionId = $(this).attr('data-section');
        if ( getSectionElementByDataId(sectionId)[0] !== $prevSection[0] ) {
            getSectionElementByDataId(sectionId).addClass('showed');
            $prevSection.removeClass('showed');
        }
        // move line-arrow
        if ( sectionId > 1 && sectionId < 3 ) { 
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab3').addClass('margin-l_tab2'); 
        } 
        else if ( sectionId > 2 ) {
            $(".line-arrow").removeClass('margin-l_tab1 margin-l_tab2').addClass('margin-l_tab3'); 
        }
        else {
            $(".line-arrow").removeClass('margin-l_tab2 margin-l_tab3').addClass('margin-l_tab1'); 
        }
});

function getSectionElementByDataId(dataSectionId) {
    return $('.section'+dataSectionId);
}

//check password

$(".field__input_password").on('blur', function() {
    if ($(".field__input_password").val().length >= 6) {
        $('.field__img-check_true').addClass('dis-block');
        $('.field__img-check_false').removeClass('dis-block');
    } else if ($(".field__input_password").val().length > 0 && $(".field__input_password").val().length < 6) { 
        $('.field__img-check_false').addClass('dis-block');
        $('.field__img-check_true').removeClass('dis-block'); 
    }
 });

// check email

$('.field_email input[type=email]').on('blur', function () {
    let $email = $(this).val();
    if ($email.length > 0
    && ($email.match(/.+?\@.+/g) || []).length !== 1) {
        $('.field__text_error').addClass('dis-flex');
    } else {
        $('.field__text_error').removeClass('dis-flex');
  }
});


});
