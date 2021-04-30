// functions

// TODO:

// 1. bugs on buttons for sign in as admin to post or view games. Bugs on showing must be logged in to view content
// ** little buggy right now - not sure if its the ordering or the functions or what but buttons on post/view game seem to only
// work the first time you press them. 
// 2. Figure out buy/sell buttons - no longer work after making the posts by admin
// 4. Sport nav button filter the posts by sport type
// 5. Fix profile nav tab - Idk if should get ride of profile image or what.
// 6. Anything else? 

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


function welcome_admin_page() {
  let content = document.querySelector('#main');
  db.collection('Users').get().then((data) => {
    let userdata = data.docs;
    userdata.forEach((user) => {
      if (user.data().id == auth.currentUser.uid && user.data().admin == true) {
        let button_post = document.querySelector('#admin_post');
        let admin_view = document.querySelector('#admin_view');


        button_post.classList.remove('is-hidden');
        admin_view.classList.remove('is-hidden');

        admin_view.addEventListener('click', () => {
          showFeed();
        })


        let html = '<h1 class="title is-size-3">Post an upcoming Game</h1>';
        html +=
          `
        <div class = columns>
          <div class = "column is-7">
            <div class = "field">
              <label for="sport">Choose a sport:</label>
                <select name="" id="sport">
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
              
              <p><input name = "locations" id = "mem" type = "checkbox" value = "Memorial Union">Memorial Union</p>
              <p><input name = "locations" id = "union" type = "checkbox" value = "Union South">Union South</p>
              <p><input name = "locations" id = "bschool" type = "checkbox" value = "Business School"> Business School</p>
              <p><input name = "locations" id = "gordons" type = "checkbox" value = "Gordons Dinning Hall">Gordons Dinning Hall</p>
              <p><input name = "locations" id = "dejope" type = "checkbox" value = "DeJope Dinning Hall">DeJope Dinning Hall</p>

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
        button_post.addEventListener('click', () => {
          document.querySelector('#content').classList.add('is-hidden');
          submitGameForm.innerHTML = html;
        })

      }
    })
  })
}


function showFeed() {
  let content = document.querySelector('#content');
  let content_html = "";
  db.collection("Games").get().then((data) => {
    let gamedata = data.docs;
    gamedata.forEach((game) => {
      let post = game.data();
      let ID = game.id;
      let str_day = post.date + " " + post.time;
      let day = Date.parse(str_day);
      day = new Date(day).toString()
      full_date = day.slice(4, 15);
      day = day.toUpperCase().slice(0, 3);
      format_full = `${full_date.slice(0,3).toUpperCase()} ${full_date.slice(4,6)}, ${full_date.slice(7,11)}`;

      let newGame = `
      <div class="card mt-4 cards_color">
      <div class="card-image has-text-centered">
          <p class="title_game">${post.sport} UW-Madison vs ${post.opp}</p>
      </div>
      <div class="card-content is-flex is-flex-direction-row is-justify-content-space-around">
          <div class="">
              <p class="post_dates">${day}</p>
              <p>${format_full}</p>
          </div>
          <div class="post_buttons">
              <button onclick = "myBuyFunction(\`` + ID + `\`)" id="buy_btn" class="button is-danger is-light is-medium">BUY</button>
              <button onclick = "mySellFunction(\`` + ID + `\`)" id="sell_btn" class="button is-danger is-light is-medium">SELL</button>
          </div>
          <div class="price">
              <p>Current Price: 50$</p>
          </div>

      </div>
  </div>
      `
      content_html += newGame;

    })
    content.innerHTML = content_html;
  })


}

function tabInfo() {
  let info_tab = document.querySelector('#info_tab');
  let friends_tab = document.querySelector('#tix_tab');
  let info_tabHTML = ``;
  let friends_tabHTML = ``;
  db.collection('Users').get().then((data) => {
    let mydata = data.docs;
    mydata.forEach((user) => {
      if (user.data().id == auth.currentUser.uid) {
        info_tabHTML += ` <p class = "has-text-weight-bold has-text-white"><b>Name: </b> ${user.data().fName} ${user.data().lName}</p>`;
        info_tabHTML += ` <p class = "has-text-weight-bold has-text-white"><b>Username:</b> ${user.data().username}</p>`;
        info_tabHTML += `<p class = "has-text-weight-bold has-text-white"><b>Email:</b> ${user.data().email}</p>`;
        info_tab.innerHTML = info_tabHTML;
      }

    })

  })
}


function openPage(evt, pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('is-hidden');
    tabcontent[i].classList.add("is-active");
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("is-hidden", " is-active");
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.classList += " is-active"
}

function display_match_details(match_details) {
  let match_r_html = document.querySelector("#match_results")
  var cur_user = match_details["cur_user"]
  var gameDetails = match_details["gameDetails"]
  var match_user = match_details["match_user"]
  var meetingPlace = match_details["meetingPlace"]
  var name1 = "Leo"
  var email1 = "test@test.com"

  //get user name and email
  db.collection('Users').get().then((data) => {
    data2 = data.docs;
    data2.forEach((user) => {
      
      // console.log(user.data().id)
      if (user.data().id == match_user) {
        console.log(user.data())
        console.log(user.data().fName) //change to name?
        name1 = user.data().fName
        email1 = user.data().email
      }
    })
    match_r_html.innerHTML +=`
    <p>You have a match!</p>
    <p>You have been matched with ${name1} (${email1}).  The game id is ${gameDetails}</p>
    `
  })

}


function myBuyFunction(game_ID) {

  var matchDetails = {}

  let meetinglocation = document.querySelector('#meetinglocation');
  // console.log(meetinglocation);
  let meeting_HTML = '';
  var buy_btn = document.querySelectorAll('#buy_btn');


  buy_btn.forEach(buy => {
    //console.log(buy.parentNode.parentNode.parentNode.id, buy.parentNode.parentNode.parentNode);
    //console.log(buy, "buy button");
    var buy_sell_modal = document.querySelector('#buy_sell_modal');
    buy_sell_modal.classList.add('is-active');

  })
  db.collection('Games').doc(game_ID).get().then((data) => {
    let info = data.data();
    meeting_HTML +=
      ` <div class= "field">
              <label id = "" class = "has-text-white label">Select meeting locations</label>
        `
    info.locations.forEach(loc => {
      meeting_HTML += `  <p><input name = "locations2" id = "mem" type = "checkbox" value = "${loc}">${loc}</p>`;

    })
    // meeting_HTML +=`</div>
    // <div class="field is-grouped">
    //     <div class="control">
    //      <p> <button id = "submit_buy" class="button is-danger is-light is-medium">Submit</button></p>
    //     </div>
    //   </div>`;

    meetinglocation.innerHTML = meeting_HTML;

  })


  let submit_buy = document.querySelector('#submit_buy');
  submit_buy.addEventListener('click', () => {
    let checks = document.getElementsByName('locations2');
    let locations2 = [];
    for (var checkbox of checks) {
      if (checkbox.checked) {
        locations2.push(checkbox.value);

      }
    }

    let tix_content = {
      locations: locations2,
      buyer: auth.currentUser.uid,
      seller: false,
      game_ID: game_ID,
      price: "",
      status: "pending",
      id: ""
    }

    matchDetails['gameDetails'] = game_ID
    matchDetails['cur_user'] = auth.currentUser.uid;
    matchDetails['meetingPlace'] = locations2[0]

    db.collection("Ticket").add(tix_content).then((data) => {
      //get the fricken id here

      console.log("ticket added to ticket db", tix_content);
    })

    let buy_sell_modal = document.querySelector('#buy_sell_modal');
    buy_sell_modal.classList.add('is-hidden');

    cur_id = ""

    //finding the match
    db.collection('Ticket').where("game_ID", "==", game_ID).get().then((data) => {
      let tix = data.docs;

      //add id's bc firestore is soup
      tix.forEach((t) => {
        // console.log(t.data())
        if (t.data().id == "") {
          new_t = t.data()
          new_t.id = t.id
          db.collection("Ticket").doc(t.id).set(new_t)
          cur_id = new_t.id

        }

      })

      console.log("current id is ", cur_id);


      //finding matches and adjusting the database assuming fixed price right now
      tix.forEach((t) => {
        new_t = t.data()
        new_t.id = t.id

        if ((t.data().seller != false) && (t.data().status == "pending")) {
          matched_user = new_t.seller
          //found a match
          new_t.status = tix_content.buyer; //adding the buyer to the seller's data
          console.log('the seller is ', new_t.seller);
          matchDetails['match_user'] = new_t.seller;


          //updating the sellers data 
          db.collection('Ticket').doc(t.id).set(new_t).then((data) => {
            // console.log("found a seller! and ticket added to the ticket db", new_t);
          })

          //update buyers data
          //get data at the right id
          db.collection('Ticket').doc(cur_id).get().then((data) => {
            console.log(data.data())
            buy_new = data.data()
            buy_new.status = t.data().seller //sellers id
            // console.log("bowser", buy_new)
            db.collection("Ticket").doc(cur_id).set(buy_new).then((data) => {
              // console.log("updated buyers records! ", buy_new)
            })

            display_match_details(matchDetails);


          })
        } else { //add the non-adjusted data to the ticket database
          db.collection("Ticket").doc(t.id).set(new_t).then((data) => {
            // console.log("Didn't find a seller :( and ticket added to the ticket db", new_t);
          })
        }
      })

    })

    //get current user

    // temp = {
    //   cur_user: "R08Zc8Tr6BPcpVEJySkYvISkW8i1",
    //   gameDetails: "kv04tSrFtA4iZJ5g67td",
    //   match_user: "R08Zc8Tr6BPcpVEJySkYvISkW8i1",
    //   meetingPlace: "Business School"
    // }

    // console.log("***", matchDetails)

    // let match_r_html = document.querySelector("#match_results")
    // match_r_html.innerHTML = "";


  })
}


function mySellFunction(game_ID) {

  let meetinglocation = document.querySelector('#meetinglocation');
  console.log(meetinglocation);
  let meeting_HTML = '';
  var buy_btn = document.querySelectorAll('#buy_btn');
  buy_btn.forEach(buy => {
    //console.log(buy.parentNode.parentNode.parentNode.id, buy.parentNode.parentNode.parentNode);
    //console.log(buy, "buy button");
    var buy_sell_modal = document.querySelector('#buy_sell_modal');
    buy_sell_modal.classList.add('is-active');

  })
  db.collection('Games').doc(game_ID).get().then((data) => {
    let info = data.data();
    meeting_HTML +=
      ` <div class= "field">
              <label id = "" class = "has-text-white label">Select meeting locations</label>
        `
    info.locations.forEach(loc => {
      meeting_HTML += `  <p><input name = "locations2" id = "mem" type = "checkbox" value = "${loc}">${loc}</p>`;

    })

    meetinglocation.innerHTML = meeting_HTML;

  })


  let submit_buy = document.querySelector('#submit_buy');

  submit_buy.addEventListener('click', () => {
    let checks = document.getElementsByName('locations2');
    let locations2 = [];
    for (var checkbox of checks) {
      if (checkbox.checked) {
        locations2.push(checkbox.value);

      }
    }

    let tix_content = {
      locations: locations2,
      buyer: false,
      seller: auth.currentUser.uid,
      game_ID: game_ID,
      price: "",
      status: "pending",
      id: ""
    }

    db.collection("Ticket").add(tix_content).then((data) => { //add this further down
      console.log("ticket added to ticket db", tix_content);

    })

    let buy_sell_modal = document.querySelector('#buy_sell_modal');
    buy_sell_modal.classList.add('is-hidden');

    cur_id = ""

    //finding the match


    //add id's bc firestore is soup


    //finding matches and adjusting the database assuming fixed price right now


    db.collection("Ticket").get(tix_content).then((data) => {
      let tix = data.docs;

      //add id's bc firestore is soup
      tix.forEach((t) => {
        // console.log(t.data())
        if (t.data().id == "") {
          new_t = t.data()
          new_t.id = t.id
          db.collection("Ticket").doc(t.id).set(new_t)
          cur_id = new_t.id

        }

      })

      console.log("CURRENT id is ", cur_id);

      tix.forEach((t) => {
        new_t = t.data()
        new_t.id = t.id

        if ((t.data().buyer != false) && (t.data().status == "pending")) {
          //found a match

          new_t.status = tix_content.seller //adding the seller to the buyers data
          // console.log(new_t, 'the id for t is ', t.id);

          // update the buyers data
          db.collection("Ticket").doc(t.id).set(new_t).then((data) => {
            // console.log("found a buyer! and the ticket added is", new_t)
          })

          //update sellers data
          //get data at right id
          db.collection("Ticket").doc(cur_id).get().then((data) => {
            console.log(data.data())
            sell_new = data.data()
            sell_new.status = t.data().buyer
            db.collection("Ticket").doc(cur_id).set(sell_new).then((data) => {
              // console.log("updated seller records! ", sell_new)
            })
          })

          // // new_t.status = tix_content.buyer; //adding the buyer to the seller's data
          // //push the new seller data to the database
          // db.collection('Ticket').doc(t.id).set(new_t).then((data) => {
          //   console.log("found a seller! and ticket added to the ticket db", new_t);
          // })
        } else { //add the non-adjusted data to the ticket database
          db.collection("Ticket").doc(t.id).set(new_t).then((data) => {
            // console.log("Didn't find a seller :( and ticket added to the ticket db", new_t);
          })
        }
      })
      //change status from pending to the partnering id for buyer and seller
    })

  })

}

//modals

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
  if (admin == 1) {
    user_type = true;
  }

  // console.log(email, password);

  // pass the email and password to firebase
  auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
      console.log("created user successfully!");

      user = {
        fName: fName,
        lName: lName,
        username: username,
        id: userCredentials.user.uid,
        email: email,
        admin: user_type
      };

      db.collection("Users").add(user).then((data) => {
        console.log("User added to database");
      })
      my_sign_up_modal.classList.remove('is-active');
      showFeed();

      // reset form
      signup_form.reset();

    })
    .catch((error) => {
      let signup_error = document.querySelector("#signup_error");
      signup_error.innerHTML = `<p>${error.message}</p>`;

    });

});

submitGameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let sport = document.querySelector('#sport').value;
  let date = document.querySelector('#gameDate').value;
  let time = document.querySelector('#gameTime').value;
  let opponent = document.querySelector('#opponent').value;
  let checks = document.getElementsByName('locations');
  let locations = [];
  for (var checkbox of checks) {
    if (checkbox.checked) {
      locations.push(checkbox.value);

    }
  }

  //UPLOAD GAME DATA
  let game_content = {
    sport: sport,
    date: date,
    time: time,
    opp: opponent,
    locations: locations
  }
  db.collection("Games").add(game_content).then((data) => {
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
      let hide_msg = document.querySelector('#hide_msg');
      hide_msg.classList.add('is-hidden');
      login_form.reset();
      welcome_admin_page();
      tabInfo();
      showFeed();
      // reset 

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


auth.onAuthStateChanged((user) => {
  // check if user is signed in or out
  if (user) {
    let hide_msg = document.querySelector('#hide_msg');
    hide_msg.classList.add('is-hidden');
    configureNav(user);
    welcome_admin_page();
    tabInfo();
    showFeed();
  } else {
    console.log("user is now signed out");
    configureNav(user);
  }
})