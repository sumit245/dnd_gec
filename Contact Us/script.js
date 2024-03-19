console.log("Hello world");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.log( fullname, email, phone );

fullname.addEventListener("blur", () => {
  console.log("fullname is blurred");
  // validatr fullname here
  let regex = /([0-9a-zA]){0,10}/;
  let str = fullname.value;
  console.log(regex, str);
});

email.addEventListener("blur", () => {
  console.log("email is blurred");
  // validatr email here
});

phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  // validatr name here
});
