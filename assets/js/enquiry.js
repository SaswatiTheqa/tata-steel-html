
$(document).ready(function($) {

  $('.continueBtn').on('click', function(){
    if ($(".radiobtn").valid() == true || $("#quantity").valid() == true ) {
      //make ajax called
      // console.log("dd")
        const target = $(this).data('bs-target');
        $('.nav-link').removeClass('active');
        $('button[data-bs-target="' + target + '"]').addClass('active');
        $('.tab-pane').removeClass('show active');
        $(target).addClass('show active');
        // [data-bs-target=$(#enquiry_form)]
        $('#my-Contact').addClass('show active');
        
   }
  //  else {
    
  //     if($("#productman").valid() == true){
  //       const target = $(this).data('bs-target');
  //       $('.nav-link').removeClass('active');
  //       $('button[data-bs-target="' + target + '"]').addClass('active');
  //       $('.tab-pane').removeClass('show active');
  //       $(target).addClass('show active');
  //       // [data-bs-target=$(#enquiry_form)]
  //       $('#my-Contact').addClass('show active');
  //   }
  // }
 

}),




  $("#enquiry_form").validate({
        // errorPlacement: function(error, element) {
        //   error.appendTo('.errorAppend');
        // },
          errorElement: "span",
          rules: {
              // "checkbox[]": {
              //   required: true,
              //   minlength: 1
              // },
              // radio: "required",
              thickness: "required",
              productsSelect: "required",
              quantity: {
                number :true,
              },
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
             
              instruction:{
                minlength: 10,
                maxlength: 100,
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