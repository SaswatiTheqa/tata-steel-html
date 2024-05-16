
$(document).ready(function($) {

   $("#feedbackform").validate({
          ignore: [], 
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
                minlength: 5,
              },
              queryType: {
                required: true,
              },
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
                  iconColor: '#BDD9E8',
                  buttonsStyling: false,
                  timer: 4000,
                  confirmButtonText: "Ok, got it!", 
                  customClass: { confirmButton: "btn btn-primary sitebtn" },
                });
                // form.submit();
            }, 1000)
          }
          
      });
    
      
});

$(document).on("change", "#queryType", function() {
  $(this).valid();
    // if ($("#queryType").valid() == true) {
    //   $(this).valid();
    // }
});

