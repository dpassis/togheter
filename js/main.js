'use strict';

// Initializes Togheter.
function Togheter() {

  this.initFirebase();

}

// Sets up shortcuts to Firebase features and initiate firebase auth.
Togheter.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

/********************************************************************************
*                        Start the Access Functions							   	            *
*																				                                        *
*********************************************************************************/

/** Signs-in Togheter 
* Needs verify the type of provider
*/
FriendlyChat.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
};

/** Signs-out Togheter 
* 
*/
FriendlyChat.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};



// Triggers when the auth state change for instance when the user signs-in or signs-out.
Togheter.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!

    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL;
    var userName = user.displayName;
	
    // Set the user's profile pic and name.
    this.userPic.style.backgroundImage = 'url(' + (profilePicUrl || '/images/profile_placeholder.png') + ')';
    this.userName.textContent = userName;

    // Show user's profile and sign-out button.
    this.userName.removeAttribute('hidden');
    this.userPic.removeAttribute('hidden');

  } else { // User is signed out!
  	
    // Hide user's profile and sign-out button.
    this.userName.setAttribute('hidden', 'true');
    this.userPic.setAttribute('hidden', 'true');

    
  }
};