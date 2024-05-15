
$(document).ready(function($) {

  $("#feedbackform").validate({
          rules: {
              name: {
                required: true,
                minlength: 2,
              },
              email: {
                email: true
              },                   
              phoneNumber: {
                  required: true,
                  number :true,
                  minlength: 10,
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
              // name: "Please enter your Name", 
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