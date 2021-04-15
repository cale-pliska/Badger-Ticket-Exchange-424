// testing firebase 
// console.log(firebase);

// login
let login_button = document.querySelector("#login_button");
let login_modal = document.querySelector("#login_modal");

login_button.addEventListener('click', function () {
  //grab model
  login_modal.classList.add('is-active');
})

var modalbg = document.querySelector("#modalbg");
modalbg.addEventListener('click', function () {
  login_modal.classList.remove('is-active');
})

// contact
var my_contact_button = document.querySelector("#contact_button");
my_contact_button.addEventListener('click', function () {
  var my_contact_modal = document.querySelector("#my_contact_modal");
  my_contact_modal.classList.add('is-active');
})

var modalbg_contact = document.querySelector("#modalbg_contact");
modalbg_contact.addEventListener('click', function () {
  my_contact_modal.classList.remove('is-active');
})


// sign up
var my_sign_up_button = document.querySelector("#sign_up_button");
my_sign_up_button.addEventListener('click', function () {
  var my_sign_up_modal = document.querySelector("#my_sign_up_modal");
  my_sign_up_modal.classList.add('is-active');
})

var modalbg_sign_up = document.querySelector("#modalbg_sign_up");
modalbg_sign_up.addEventListener('click', function () {
  my_sign_up_modal.classList.remove('is-active');
})

//PROFILE
var my_profile_button = document.querySelector("#my_profile_button");
my_profile_button.addEventListener('click', function () {
  var my_profile_modal = document.querySelector("#my_profile_modal");
  my_profile_modal.classList.add('is-active');
})

var modalbg_profile = document.querySelector("#modalbg_profile");
modalbg_profile.addEventListener('click', function () {
  my_profile_modal.classList.remove('is-active');
})

//BUY BUTTON
var buy_btn = document.querySelectorAll('#buy_btn');
buy_btn.forEach(buy => {
  buy.addEventListener('click', function () {
    var buy_sell_modal = document.querySelector('#buy_sell_modal');
    buy_sell_modal.classList.add('is-active');

  })
})

var modal_buy_sell = document.querySelector('#modalbg_matching');
modal_buy_sell.addEventListener('click', function () {
  buy_sell_modal.classList.remove('is-active');
})



// NAVBar Burger
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        console.log($target, target);
        $target.classList.toggle('is-active');
        // $target.style.backgroundColor = "black";
        $target.style.backgroundColor = "#c5050c";

        //$target.classList.add('has-text-black', 'has-text-weight-bold');

      });
    });
  }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// login users and add them to the firebase database.
let login_form = document.querySelector("#login_form");

login_form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("form submitted!");

  // grab email and password
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  // console.log(email, password);

  // pass the email and password to firebase
  auth.createUserWithEmailAndPassword(email, password).then(() => {
    console.log("created user successfully!")
  });

})