jQuery( document ).ready(function($) {
    const validate_inputs = $('.validate-input');
    const validate_select = $('.validate-select');
    const validate_checkbox = $('.validate-checkbox');
    if (validate_inputs) {
        $( document ).on('click', '.validate-submit', function(event) {
            for (let i = 0; i < validate_inputs.length; i++) {
                if( $(validate_inputs[i]).val().length === 0 ) {
                    $(validate_inputs[i]).addClass('error-field')
                    $("<span class='field-error-message'>This field is required.</span>").insertBefore(validate_inputs[i]);
                }
            }
            for (let i = 0; i < validate_checkbox.length; i++) {
                if( !$(validate_checkbox[i]).is(':checked') ) {
                    $(validate_checkbox[i]).addClass('error-field')
                    $("<span class='field-error-message'>This field is required.</span>").insertBefore(validate_checkbox[i]);
                }
            }
            for (let i = 0; i < validate_select.length; i++) {
                if( $(validate_select[i]).find(":selected").text() === "Select an Option") {
                    $(validate_select[i]).addClass('error-field')
                    $("<span class='field-error-message'>This field is required.</span>").insertBefore(validate_select[i]);
                }
            }
            const ele_form =  $(".validate-form");
            if(!ele_form.hasClass('validation-start')) {
                ele_form.addClass('validation-start');
            }
            if($('.error-field').length > 1) {
                $(this).attr("disabled", true);
            }
        });
        for (let i = 0; i < validate_inputs.length; i++) {
            $(validate_inputs[i]).on( 'keyup', function() {
                if( $(validate_inputs[i]).val().length === 0) {
                    if( $('.validate-form').hasClass('validation-start')) {
                        $(validate_inputs[i]).addClass('error-field');
                        $(validate_inputs[i]).prev().show();
                    }
                    if($('.error-field').length === 0) {
                        $('.validate-submit').removeAttr("disabled");
                    } else {
                        $('.validate-submit').attr("disabled", true);
                    }
                } else {
                    $(validate_inputs[i]).removeClass('error-field');
                    if( $(validate_inputs[i]).prev().hasClass('field-error-message')){
                        $(validate_inputs[i]).prev().hide();
                    } else {
                        $("<span class='field-error-message'>This field is required.</span>").insertBefore(validate_inputs[i]);
                    }
                    if($('.error-field').length === 0) {
                        $('.validate-submit').removeAttr("disabled");
                    }
                }
            });
        }
        for (let i = 0; i < validate_checkbox.length; i++) {
            $(validate_checkbox[i]).on( 'change', function() {
                if ($(validate_checkbox[i]).is(':checked')) {
                    $(validate_checkbox[i]).removeClass('error-field')
                    if ($(validate_checkbox[i]).prev().hasClass('field-error-message')) {
                        $(validate_checkbox[i]).prev().hide();
                    }
                } else {
                    $(validate_checkbox[i]).prev().show();
                }
            });
        }
        for (let i = 0; i < validate_select.length; i++) {
            $(validate_select[i]).on( 'change', function() {
                if( $(validate_select[i]).val().length === 0) {
                    if( $('.validate-form').hasClass('validation-start')) {
                        $(validate_select[i]).addClass('error-field');
                        $(validate_select[i]).prev().show();
                    }
                    if($('.error-field').length === 0) {
                        $('.validate-submit').removeAttr("disabled");
                    } else {
                        $('.validate-submit').attr("disabled", true);
                    }
                } else {
                    $(validate_select[i]).removeClass('error-field');
                    if( $(validate_select[i]).prev().hasClass('field-error-message')){
                        $(validate_select[i]).prev().hide();
                    } else {
                        $("<span class='field-error-message'>This field is required.</span>").insertBefore(validate_inputs[i]);
                    }
                    if($('.error-field').length === 0) {
                        $('.validate-submit').removeAttr("disabled");
                    }
                }
            });
        }
    }
});
