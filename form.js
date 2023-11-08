
$(document).ready(function () {
    $("#payment-form").validate({
      rules: {
        creditCard: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        date: {
          required: true,
        },
        cvv: {
          required: true,
          maxlength: 3,
          minlength: 3,
          number: true
        }
      },
      messages: {
        creditCard: {
          required: "Please enter Credit card number",
          maxlength: "Credit card number should be 10 digit only",
          minlength: "Credit card number should be 10 digit only"
        },
        date: {
          required: "Please enter a expiry date"
        },
        cvv: {
          required: "Please enter CVV",
          minlength: "CVV should be 3 digit only",
          maxlength: "CVV should be 3 digit only"
        }
      }
    });
});