
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBcmL-_YvY4SgXi7Wen9X0JBAQ9175_AW8",
  authDomain: "kwitter-3f85b.firebaseapp.com",
  databaseURL: "https://kwitter-3f85b-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f85b",
  storageBucket: "kwitter-3f85b.appspot.com",
  messagingSenderId: "564380191920",
  appId: "1:564380191920:web:215941b9ee5bb9d7cc3f75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update({
    purpose: "This is my username folder value",
    message: "Added sucessfully"
  });
  /*firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });*/
}


