$(document).ready(function () {
    $("form").validate({
        rules:{
            cc: {
                required:true,
                minlength: 10
            },
            expiration: "required",
            cvv: {
                required:true,
                minlength: 3
            }

        },
        messages: {
            cc: {
                required: "Please enter valid credit card. 0000-0000-0000-0000",
            },
            expiration:{
                required: "Please enter an expiration"
            },
            cvv:{
                required: "Please enter a cvv"
            }
        }
    });
});