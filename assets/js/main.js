'use strict';

var app = {

// Initializes Togheter.
 togheter : function() {

  this.initFirebase();
  

},


// Sets up shortcuts to Firebase features and initiate firebase auth.
initFirebase : function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();

  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

  console.log('Firebase init is ok');


},


/********************************************************************************
*                        Start the Auth Functions							   	
*																				
*********************************************************************************/

/** Signs-in Togheter 
* Needs verify the type of provider
*/
 signIn : function(providerId) {

  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider;

  if (providerId === 'facebook') {

    provider =  new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');

  }else if(providerId === 'google'){

    provider =  new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');


  }else if(providerId === 'twitter'){

    provider = new firebase.auth.TwitterAuthProvider();

  }else if(providerId === 'passAuth'){

  }


  this.auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

},


/** Signs-out Togheter 
* 
*/
signOut : function() {
  // Sign out of Firebase.
  this.auth.signOut();
},



// Triggers when the auth state change for instance when the user signs-in or signs-out.
onAuthStateChanged : function(user) {
  if (user) { // User is signed in!

    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL;
    var userName = user.displayName;
  } else { // User is signed out!
  	
  
    
  }
},


/********************************************************************************
*                       Manipulate elements Functions						   	             *
*																				                                       *
*********************************************************************************/
showCreateAccount : function(elementId) {
    var x = document.getElementById(elementId);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}





};
/**
*Initialize app
*/
window.onload = function() {
    app.togheter();
    console.log('Togheter is ON');
};