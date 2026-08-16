//  Navbar 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//   Navbar
// Address Feild Validation 
let Form = document.querySelector('form')
let address = document.querySelector('.address-input');
Form.addEventListener('submit', function (e) {
  if (address.value.length < 10) {
    alert("Address must be at least 10 characters long.");
    e.preventDefault();
    return false;
  }
});
Form.addEventListener('submit', function (i) {
  let phone = document.querySelectorAll('.phone-validation');
  for (let x = 0; x < phone.length; x++) {
    if (phone[x].value.length !== 11) {
      alert("Please enter a valid Pakistani mobile number.");
      i.preventDefault();
      return false;
    }
  }
});
Form.addEventListener('submit', function (f) {

  let id = document.querySelectorAll('.valid-id');
  for (let x = 0; x < id.length; x++) {
    if (id[x].value.length !== 5) {
      alert("ID must be exactly 5 digits long.");
      f.preventDefault();
      return false;
    }
  }

});



