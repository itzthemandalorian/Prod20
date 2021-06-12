/*     https://firebase.google.com/docs/web/setup#available-libraries  */
// Your web app's Firebase configuration
let uid;
let displayName;
let email;
var firebaseConfig = {
  apiKey: "AIzaSyB5XIkEmzxOHdaZX7flJ96v68Mg-1y0QS8",
  authDomain: "twenty-3c2ba.firebaseapp.com",
  projectId: "twenty-3c2ba",
  storageBucket: "twenty-3c2ba.appspot.com",
  messagingSenderId: "700810475656",
  appId: "1:700810475656:web:ef9c4e08b16b2cc8ff073d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    displayName = user.displayName;
    email = user.email;
    uid = user.uid;
    flogin.style.display = "none";
    if (!displayName) {
      displayName = "Anon";
      usernametag.textContent = `Hi ${displayName}`;
    } else {
      usernametag.textContent = `Hi ${displayName}`;
    }
    console.log(displayName);

    // ...
  } else {
    // User is signed out
    flogin.style.display = "block";
  }
});

firebase_logout_btn.addEventListener("click", (e) => {
  e.stopPropagation();
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      location.reload();
    })
    .catch((error) => {
      console.log(`couldn't log the user our \n ${error}`);
    });
});
