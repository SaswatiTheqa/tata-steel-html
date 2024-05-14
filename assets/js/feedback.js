// $.validator.setDefaults({
//   submitHandler: function() {
//     // alert("submitted!");
//     Swal.fire("SweetAlert2 is working!");

//   }
// });

$(document).ready(function($) {

  // jQuery.validator.addMethod("name_regex", function(value, element) {
  //   return this.optional(element) || /^[a-zA-z\.\-_]{1,30}$/i.test(value);
  // }, "Firstname with only a-z A-Z.");
  // jQuery.validator.addMethod("phone_regex", function(value, element) {
  //     return this.optional(element) || /^[0-9\.\-_]{10,30}$/i.test(value);
  // }, "Phone Number with only 0-9. Minlength: 10");

  $("#feedbackform").validate({
          rules: {
              name: {
                required: true,
                minlength: 2,
                // name_regex: true,
              },
              email: {
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
              },                   
              phoneNumber: {
                  required: true,
                  number :true,
                  minlength: 10,
                  // phone_regex: true,
              },
              pinCode: {
                required: true,
                number :true,
                minlength: 5
              },
              queryType: "required",
              queryMessage:{
                minlength: 20,
                maxlength: 1024,
              },
           
          },
          messages: {
              name: "Please enter your Name", 
              email: "Please enter a valid email",                  
             
          },
         
          submitHandler: function(form) {
            setTimeout(function () {
                Swal.fire({
                  text: "Form has been successfully submitted!", 
                  icon: "success", 
                  buttonsStyling: !1, 
                  confirmButtonText: "Ok, got it!", 
                  customClass: { confirmButton: "btn btn-primary sitebtn" },
                });
                // form.submit();
            }, 1000)
          }
          
      });
});