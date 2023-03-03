<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BadgerExchange</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">


</head>

<body>

    <!--NAV BAR    -->
    <div class="navbar nav_color ">
        <div class="navbar-brand">
            <div class="navbar-item">
                <a><img src="images/color-flush-reverse-UWlogo-print.png" width="" height=""></a>

            </div>
            <div class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!--DROP DOWN MENU ON SPORTS-->
        <div class="navbar-menu" id="navMenu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link has-text-weight-bold has-text-white"> Sports</a>
                        <div class="navbar-dropdown is-boxed">
                            <a id="Men's Basketball" class="navbar-item" href="   ">Men's Basketball</a>
                            <hr class="navbar-divider">
                            <a id="Men's Football" class="navbar-item" href="   ">Men's Football</a>
                            <hr class="navbar-divider">
                            <a id="Men's Soccer" class="navbar-item" href="   ">Men's Soccer</a>
                            <hr class="navbar-divider">
                            <a id="Women's Basketball" class="navbar-item" href="   ">Women's Basketball</a>
                            <hr class="navbar-divider">
                            <a id="Womens's Soccer" class="navbar-item" href="   ">Womens's Soccer</a>
                        </div>
                    </div>
                </div>
                <div class="navbar-item has-text-weight-bold">
                    <a class="has-text-weight-bold has-text-white loggedin" id="my_profile_button">My Profile</a>
                </div>
                <!--CAN REMOVE THIS JUST ADDED FOR ANOTHER TAB on LEFT SIDE-->
                <div class="navbar-item has-text-white">
                    <a class="has-text-weight-bold has-text-white" id="contact_button">Contact Us</a>
                </div>
            </div>
            <div class="navbar-end">

                <div class="navbar-item  has-text-weight-bold">
                    <a id="login_button" class="has-text-weight-bold has-text-white loggedout">Login</a>
                </div>
                <div class="navbar-item  has-text-weight-bold">
                    <a class="has-text-weight-bold has-text-white loggedout" id=sign_up_button>Sign-Up</a>
                </div>
                <div class="navbar-item  has-text-weight-bold">
                    <a class="has-text-weight-bold has-text-white loggedin" id=sign_out_button>Sign-Out</a>
                </div>
            </div>
        </div>
    </div>

    <!--MIDDLE SECTION TITLE && Maybe CARDS for each post?-->
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="hero is-small column is-5">
                    <div class="hero-body">
                        <p class="title title_game"><i>Badger Exchange</i></p>
                        <p class="subtitle"><i>Upcoming UW-Madison Sports Games</i></p>


                        <button id="admin_post" class="button is-danger is-light is-hidden">Post Game</button>
                        <button id="admin_view" class="button is-danger is-light is-hidden">View Game</button>

                    </div>
                </div>
                <div class="columns is-7">
                    <div class="slideshow-container">

                        <!-- Full-width images with number and caption text -->
                        <div class="mySlides fade">
                            <div class="numbertext"></div>
                            <img src="images/img5.jpeg" style="height: 175px; width:600px;">
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext"></div>
                            <img src="images/img2.webp" style="height: 175px; width:600px;">
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext"></div>
                            <img src="images/img3.jpg" style="height: 175px; width:600px;">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--         
        <h1 class="is-size-3 has-text-weight-bold badger_title">Badger Exchange</h1>
        <div>
            <p class="container has-text-centered is-italic">Upcoming UW-Madison Sports Games</p>
        </div> -->

    <div class="container">
        <div class="columns">
            <!--Main content-->
            <div class="section column is-12 p-6" id="main" style="overflow: auto; height: 75vh;">
                <div class="container" id="hidden_form">
                    <!-- IDK if NEED this for pulling up admin post button-->
                    <form id="submitGameForm">


                    </form>
                </div>

                <div id="content" class="continer">
                    <p id="hide_msg" class="has-text-centered">You must sign in to view the games</p>
                    <!--
                <div class="card cards_color">
                    <div class="card-image has-text-centered">
                        <p class="title_game">Men's Basketball UW-Madison vs University of North Carolina</p>
                    </div>
                    <div class="card-content is-flex is-flex-direction-row is-justify-content-space-around">
                        <div class="">
                            <p class="post_dates">FRI</p>
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

                <div class="card mt-4">
                    <div class="card-image has-text-centered">
                        <p class="title_game">Men's Basketball UW-Madison vs Baylor</p>
                    </div>
                    <div class="card-content is-flex is-flex-direction-row is-justify-content-space-around">
                        <div class="">
                            <p class="post_dates">SUN</p>
                            <p>MAR 21, 2021</p>
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
               
                <div class="card mt-4">
                    <div class="card-image has-text-centered">
                        <p class="title_game">Men's Basketball UW-Madison vs Baylor</p>
                    </div>
                    <div class="card-content is-flex is-flex-direction-row is-justify-content-space-around">
                        <div class="">
                            <p class="post_dates">SUN</p>
                            <p>MAR 21, 2021</p>
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
            </div> -->



                </div>
            </div>
        </div>

        <!-- LOGIN MODAL -->
        <div class="modal" id="login_modal">
            <div class="modal-background" id="modalbg"></div>
            <div class="modal-content as-background-dark-light p-6 has-text-centered">
                <h1 class="has-size-3 title has-text-white">Login!</h1>
                <!-- TODO add id to form -->
                <form id="login_form">
                    <!--wisc.edu email-->
                    <div class="field">
                        <label class="label has-text-white">Wisc Email</label>
                        <div class="control">
                            <input type="email" id="email">
                        </div>
                    </div>
                    <!--Password-->
                    <div class="field">
                        <label class="label has-text-white">Password</label>
                        <div class="control">
                            <input type="password" name="" id="password">
                        </div>
                    </div>
                    <!-- Submit  -->
                    <div class="field">
                        <div class="control">
                            <button class="m-3 button is-link" id="sum_submit">Submit</button>
                        </div>
                    </div>
                    <div class="content has-text-centered">
                        <a class="has-text-centered"><img src="images/color-center-reverse-UWlogo-print.png" width="80"
                                height="90"></a>
                    </div>
                    <button class="modal-close is-large" aria-label="close">X-Out</button>
                    <div class="has-text-danger" id="login_error"></div>
                </form>
            </div>
        </div>



        <!-- Sign Up MODAL -->
        <div class="modal" id="my_sign_up_modal">
            <div class="modal-background" id="modalbg_sign_up"></div>
            <div class="modal-content p-6 has-background-dark-light has-text-centered">
                <h1 class="title has-text-white">Sign-up!</h1>
                <form id="signup_form">
                    <!--WiscEmail-->
                    <div class="field">
                        <label class="label has-text-white">WiscEmail</label>
                        <div class="control">
                            <!-- email sign up -->
                            <input type="text" name="" id="email_su">
                        </div>
                    </div>
                    <!--First NAME  -->
                    <div class="field">
                        <label class="label has-text-white">First Name</label>
                        <div class="control">
                            <input type="text" name="" id="fName_su">
                        </div>
                    </div>
                    <!--Last NAME  -->
                    <div class="field">
                        <label class="label has-text-white">Last Name</label>
                        <div class="control">
                            <input type="text" name="" id="lName_su">
                        </div>
                    </div>
                    <!--UserNAME  -->
                    <div class="field">
                        <label class="label has-text-white">Username</label>
                        <div class="control">
                            <input type="text" name="" id="username_su">
                        </div>
                    </div>
                    <!--Password-->
                    <div class="field">
                        <label class="label has-text-white">Password</label>
                        <div class="control">
                            <!-- password sign up -->
                            <input type="password" name="" id="password_su">
                        </div>
                    </div>
                    <div class="field">
                        <label class="has-text-white" for="user">User: </label>
                        <input type="radio" name="user_type" value="1" checked="checked">Admin</input>
                        <input type="radio" name="user_type" value="0">Student</input>

                        <div class="control">
                        </div>
                    </div>
                    <!-- Submit  -->
                    <div class="field">
                        <div class="control">
                            <button class="m-3 button is-link" id="sum_submit">Submit</button>
                        </div>
                    </div>
                    <div class="content has-text-centered">
                        <a class="has-text-centered"><img src="images/color-center-reverse-UWlogo-print.png" width="80"
                                height="90"></a>
                    </div>
                    <button class="modal-close is-large" aria-label="close">X-Out</button>
                    <div class="has-text-danger" id="signup_error"></div>
                </form>
            </div>

        </div>


        <!-- Contact us MODAL -->
        <div class="modal" id="my_contact_modal">
            <div class="modal-background" id="modalbg_contact"></div>
            <div class="modal-content p-6 has-background-dark-light has-text-centered">
                <h1 class="has-size-3 title has-text-white">Contact Us!</h1>
                <form>
                    <p>
                        <a href="mailto:wkalivas@wisc.edu?cc=cpliska@wisc.edu&subject=BadgerExchange Inquiry"><b>Send us
                                an
                                email!</b></a>
                    </p>
                    <div class="content has-text-centered mt-2">
                        <a class="has-text-centered"><img src="images/color-center-reverse-UWlogo-print.png" width="80"
                                height="90"></a>
                    </div>
                </form>
                <button class="modal-close is-large" aria-label="close">X-Out</button>
            </div>
        </div>



        <!-- Profile MODAL -->
        <div class="modal" id="my_profile_modal">
            <div class="modal-background" id="modalbg_profile"></div>
            <div class="modal-content p-6 has-background-dark-light has-text-centered">
                <h1 class="has-size-3 title has-text-white">Your Profile!</h1>
                <div class="columns">
                    <div class="column is-4">
                        <div class="is-flex-grow-0">
                            <figure class=" image is-128x128 is-align-items-flex-start">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                            </figure>
                            <!-- NEED TO FIGURE OUT UPLOAD IMAGES AND DISPLAY MIGHT NEED PHP-->
                            <!-- **I am not familiar with PHP, but if you can figure out how to upload images, that would be awesome! -Mason** -->
                            <!-- <figure class="image is-128x128 is-align-items-flex-start">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure> -->
                            <!-- <br>
                        <form action="upload.php" method="post" enctype="multipart/form-data">
                            Select Profile Picture:
                            <p><input type="file" name="fileToUpload" id="fileToUpload"></p>
                            <p><input class="has-text-left" type="submit" value="UploadImage" name="submit"></p>
                        </form> -->

                        </div>
                    </div>
                    <div class="column is-8">
                        <div class="tabs is-center is-small  is-toggle" id="tabs">
                            <ul>
                                <li class="tablinks"><a href='#' onclick="openPage(event,'Info')"><i
                                            class="fas fa-info-circle"></i>Your Info</a></li>
                                <li class="tablinks"><a href='#' onclick="openPage(event, 'Tickets')"><i
                                            class="fas fa-image"></i>Your Tickets</a></li>

                            </ul>
                        </div>

                        <!-- USER UNFO TAB -->
                        <div id="Info" class="tabcontent is-hidden">
                            <div id="info_tab">

                                <!-- <p>Name: </p>
                        <p>Username: </p>
                        <p>Email: </p> -->

                            </div>


                        </div>

                        <!-- USER FRIENDS TAB -->
                        <div id='Tickets' class="tabcontent is-hidden">
                            <div id="tix_tab">
                                <!-- <ul>
                                <li>Friend 1</li>
                                <li>Friend 2</li>
                            </ul> -->


                            </div>
                        </div>

                    </div>
                </div>




                <!-- <div class="is-flex is-flex-direction-row is-justify-content-space-around"">
                    <figure class=" image is-128x128 is-align-items-flex-start">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
                <div>
                    <p class="is-centered has-text-white">
                        Maybe previous transactions</p>
                </div>

                <div class="has-text-white is-centered">
                    maybe profile info? name, email, etc.?
                </div>

            </div> -->

            </div>
            <button class="modal-close is-large" aria-label="close">X-Out</button>
        </div>

        <div class="modal" id="buy_sell_modal">
            <div class="modal-background" id="modalbg_matching"></div>
            <div class="modal-content p-6 has-background-dark-light has-text-centered">
                <h1 class="has-size-3 title has-text-white">Purchase or Sell Ticket!</h1>
                <div class="is-flex is-flex-direction-row is-justify-content-space-around">
                    <div class="has-text-white" id="meetinglocation">


                    </div>


                </div>
                <div class="field">
                    <div class="control">
                        <button id="submit_buy" class="button is-danger is-light is-medium">Submit</button>
                    </div>
                </div>

            </div>
            <button class=" modal-close is-large" aria-label="close">X-Out</button>
        </div>


        <div class="footer">
            <div class="content has-text-centered footer_style">
                <p>UW-Madison Badger Exchange</p>
            </div>
        </div>



</body>


<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

<!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-storage.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>


<script>
    // TODO
    // Copy **only** your firebaseConfig from Google Firebae and add it below

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBGpCpIiF2_KuwJqrLNkPiWywc7zCRQLW8",
        authDomain: "cale-6945c.firebaseapp.com",
        projectId: "cale-6945c",
        storageBucket: "cale-6945c.appspot.com",
        messagingSenderId: "526604231250",
        appId: "1:526604231250:web:3f9b6d8c20e0518250b58b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let auth = firebase.auth();
    let db = firebase.firestore();
</script>


<script src="index.js"></script>
<script type="text/javascript" src="date.js"></script>


</html>
