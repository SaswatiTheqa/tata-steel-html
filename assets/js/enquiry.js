let submitform = document.querySelector("#enquiry_submit")
let enquiryform = document.querySelector("#enquiry_form")


submitform.addEventListener("click", (e) => {
  e.preventDefault();
  let name=document.f1.name.value;  
  let phoneNumber = document.f1.phoneNumber.value;  
  let pinCode = document.f1.pinCode.value; 
  
  let email = document.f1.email.value;  
   
   

  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }
  // else if(password.length<6){  
  //   alert("Password must be at least 6 characters long.");  
  //   return false;  
    
  // }

});
