console.log("Hello world");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

fullname.addEventListener("blur", () => {
  console.log("fullname is blurred");
  let fullnameValue = fullname.value;
  let fullnameRegex = /^[a-zA-Z ]{0,10}$/;
  if (!fullnameRegex.test(fullnameValue)) {
      console.log( "valid fullname" );
    //   fullname.classList.remove("is-invalid");
      
    // Add your error handling logic here
  } else {
      console.log( "inValid fullname" );
    //   fullname.classList.add( 'is-invalid' );
    // Add your success handling logic here
  }
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  let emailValue = email.value;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(emailValue)) {
    console.log("Invalid email address");
    // Add your error handling logic here
  } else {
    console.log("Valid email address");
    // Add your success handling logic here
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  let phoneValue = phone.value;
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneValue)) {
    console.log("Invalid phone number");
    // Add your error handling logic here
  } else {
    console.log("Valid phone number");
    // Add your success handling logic here
  }
});
