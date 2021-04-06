var mybutton = document.querySelector("#loginbutton");
mybutton.addEventListener('click', function(){
   //grab model
   var mymodal = document.querySelector("#mymodal");
   mymodal.classList.add('is-active');
})

var modalbg = document.querySelector("#modalbg");
modalbg.addEventListener('click', function() {
    mymodal.classList.remove('is-active');
})

var my_contact_button = document.querySelector("#contact_button");
my_contact_button.addEventListener('click', function () {
var my_contact_modal = document.querySelector("#my_contact_modal");
my_contact_modal.classList.add('is-active');
})

var modalbg_contact = document.querySelector("#modalbg_contact");
modalbg_contact.addEventListener('click', function () {
my_contact_modal.classList.remove('is-active');
})

// sign up button
var my_sign_up_button = document.querySelector("#sign_up_button");
my_sign_up_button.addEventListener('click', function () {
var my_sign_up_modal = document.querySelector("#my_sign_up_modal");
my_sign_up_modal.classList.add('is-active');
})

var modalbg_sign_up = document.querySelector("#modalbg_sign_up");
modalbg_sign_up.addEventListener('click', function () {
my_sign_up_modal.classList.remove('is-active');
})