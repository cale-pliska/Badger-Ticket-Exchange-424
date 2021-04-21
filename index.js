// functions

let loggedoutlinks = document.querySelectorAll(".loggedout");
let loggedinlinks = document.querySelectorAll(".loggedin");

function configureNav(user) {
  // check if user is passed to function (signed in)
  if (user) {
    // show all the logged in links
    loggedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
    // hide all the logged out links
    loggedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  }
  // no user is passed to the function (use is signed out)
  else {
    // show all the logged out links
    loggedoutlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
    // hide all the logged in links
    loggedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  }
}

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

// signup users and add them to the firebase database.
let signup_form = document.querySelector("#signup_form");

signup_form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("form submitted!");

  // grab email and password
  let email = document.querySelector('#email_su').value;
  let password = document.querySelector('#password_su').value;
  let fName = document.querySelector('#fName_su').value;
  let lName = document.querySelector('#lName_su').value;
  let username = document.querySelector('#username_su').value;
  let admin = document.querySelector('input[name="user_type"]:checked').value;
  let user_type = false;
  // user_type is true == Admin otherwise is student == false
  if (admin == 1){
    user_type = true;
  }
    

  // console.log(email, password);

  // pass the email and password to firebase
  auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
    console.log("created user successfully!");

    user = {
      fName:fName,
      lName: lName,
      username: username,
      id: userCredentials.user.uid,
      email: email,
      admin: user_type
    };

    db.collection("Users").add(user).then((data) =>{
      console.log("User added to database");
    })
    my_sign_up_modal.classList.remove('is-active');

    // reset form
    signup_form.reset();

  })
  .catch((error) => {
    let signup_error = document.querySelector("#signup_error");
    signup_error.innerHTML = `<p>${error.message}</p>`;

  });

});



function showFeed(){
  let content = document.querySelector('#content');
  db.collection("Games").get().then((data) =>{
    let gamedata = data.docs;
    let content_html = "";

    gamedata.forEach((game) =>{
      let post = game.data();

      console.log(post, game);
      let str_day = post.date + " " + post.time;
      let day = Date.parse(str_day);
      console.log(day.toString());
      let day_pieces = day.split(" ");
      console.log("Can I split the date: ", day[0], "next part:", day[1]);
      //day = day.substring(0,3).toUpperCase();
     // date_list = day.split(' ')
     // console.log(day, date_list);
      let newGame = `
      <div class="card cards_color">
      <div class="card-image has-text-centered">
          <p class="title_game">${post.sport} UW-Madison vs ${post.opp}</p>
      </div>
      <div class="card-content is-flex is-flex-direction-row is-justify-content-space-around">
          <div class="">
              <p class="post_dates">NONE</p>
              <p>MAR 19, 2021</p>
          </div>
          <div class="post_buttons">
              <button id="buy_btn" class="button is-danger is-light is-medium">BUY</button>
              <button id="buy_btn" class="button is-danger is-light is-medium">SELL</button>
          </div>
          <div class="price">
              <p>Current Price: 50$</p>
          </div>

      </div>
  </div>
      
      
      
      
      
      `



    })
  })

  // TODO



}

function welcome_admin_page(){
  let content = document.querySelector('#main');
  db.collection('Users').get().then((data) =>{
    let userdata = data.docs;
    userdata.forEach((user) =>{
      if(user.data().id == auth.currentUser.uid && user.data().admin == true){
        let button_post= document.querySelector('#admin_post');

        button_post.classList.remove('is-hidden');


        let html = '<h1 class="title is-size-3">Post an upcoming Game</h1>';
        html += 
        `
        <div class = columns>
          <div class = "column is-7">
            <div class = "field">
              <label for="sport">Choose a sport:</label>
                <select name="cars" id="sport">
                  <option value="Men's Basketball">Men's Basketball</option>
                  <option value="Men's Football">Men's Football</option>
                  <option value="Men's Hockey">Men's Hockey</option>
                  <option value="Men's Soccer">Men's Soccer</option>
                  <option value="Women's Basketball">Women's Basketball</option>
                  <option value="Women's Basketball">Women's Basketball</option>
                  <option value="Women's Volleyball">Women's Volleyball</option>
                  <option value="Women's Hockey">Women's Hockey</option>
            
                </select>
            
        </div>

        <div class="field">
          <label class="label">Date</label>
            <div class="control">
              <input type="date" id="gameDate" name="game_date">
            </div>
        </div>

        <div class="field">
          <label class="label">Time</label>
            <div class="control">
              <input type="time" id="gameTime" name="game_time">
            </div>
        </div>

        <div class="field">
          <label class = "label" > Opponent </label> 
            <div class = "control" >
            <input class = "input" type = "text" id="opponent" placeholder = "Input Opponent" >
           </div> 
          
        </div>
        </div>


        <div class = "column is-5">
            <div class= "field">
              <label id = "" class = "label">Select meeting locations</label>
              
              <p><input name = "locations" id = "mem" type = "checkbox" value = "memU">Memorial Union</p>
              <p><input name = "locations" id = "union" type = "checkbox" value = "uSouth">Union South</p>
              <p><input name = "locations" id = "bschool" type = "checkbox" value = "bschool"> Business School</p>
              <p><input name = "locations" id = "gordons" type = "checkbox" value = "gordons">Gordons Dinning Hall</p>
              <p><input name = "locations" id = "dejope" type = "checkbox" value = "Dejope">DeJope Dinning Hall</p>

          </div>
        <br>
        <div class="field is-grouped">
          <div class="control">
           <p> <button id = "submit_post" class="button is-danger is-light is-medium">Submit</button></p>
          </div>
        </div>
        </div>

        
        </div>

        `;
        //let submitGameForm = document.querySelector('#submit_post');

        let submitGameForm = document.querySelector('#submitGameForm');
        button_post.addEventListener('click', ()=>{
          document.querySelector('#content').classList.add('is-hidden');
          submitGameForm.innerHTML = html;
        })

      }
    })
  })
}
submitGameForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let sport = document.querySelector('#sport').value;
  let date = document.querySelector('#gameDate').value;
  let time = document.querySelector('#gameTime').value;
  let opponent = document.querySelector('#opponent').value;
  let checks = document.getElementsByName('locations');
  let locations = [];
  for (var checkbox of checks){
    if(checkbox.checked){
      locations.push(checkbox.value);
      
    }
  }

  //UPLOAD GAME DATA
  let game_content = {
    sport: sport,
    date: date,
    time:time,
    opp: opponent,
    locations: locations
  }
  db.collection("Games").add(game_content).then((data) =>{
    console.log(game_content, ": Game added to db");
    submitGameForm.classList.add('is-hidden');
    let content = document.querySelector('#content');
    content.classList.add('is-active');
    content.classList.remove('is-hidden');

  })
  showFeed();

  //document.querySelector('main').classList.add('is-active');


})


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
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log(userCredentials.user.email + " with the uid " + userCredentials.user.uid + " is logged in!");
      // close the modal
      login_modal.classList.remove('is-active');
      welcome_admin_page();
      // reset 
      login_form.reset();


    })
    .catch((error) => {
      console.log(error.message);

      // grab the error div

      let signin_error = document.querySelector('#login_error');
      signin_error.innerHTML = `<p>${error.message}</p>`
    })
})

// sign out
let signoutbtn = document.querySelector('#sign_out_button');

// attach a click event

signoutbtn.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
    .then((msg) => {
      console.log("user signed out!");
    })
})

// keep track of user authentication status (signin or signout)

auth.onAuthStateChanged((user) => {
  // check if user is signed in or out
  if (user) {
    console.log(user);
    configureNav(user);
  }
  else {
    console.log("user is now signed out");
    configureNav(user);
  }
})