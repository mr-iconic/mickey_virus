
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNUNX5-EFK_fmchxG1XQ2bytimDqk8nB0",
  authDomain: "my-first-project-542d1.firebaseapp.com",
  projectId: "my-first-project-542d1",
  storageBucket: "my-first-project-542d1.appspot.com",
  messagingSenderId: "178131652235",
  appId: "1:178131652235:web:eb0c971eeca63f779f4e8e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
var x = document.getElementById("gsignin");
document.getElementById("signout").style.display = "none";
document.getElementById('addif').style.display = "none";

x.addEventListener('click', login)
function login() {
  signInWithPopup(auth, provider).then(res => {
    showuser(res.user)
    
    document.getElementById("gsignin").style.display = "none";
    document.getElementById("signout").style.display = "block";
    


  }).catch(e => {
    console.log("error")
  })
  
}
function showuser(user) {
  if(user.email == "abhishekhacker.@gmail.com"){
    document.getElementById("addif").style.display = "block";
  }else{
    document.getElementById("addif").style.display = "none";
  }
  document.querySelector("#userdetail").innerHTML = `
  <img src="${user.photoURL}"  >
  <p>${user.displayName}</p>
  `
  document.getElementById("userdetail").style.display = "flex";
}


auth.onAuthStateChanged((user) => {
  showuser(user);
  document.getElementById("gsignin").style.display = "none";
  document.getElementById("signout").style.display = "block";
})
document.getElementById("userdetail").style.display= "none";


var y = document.getElementById("signout");
y.addEventListener('click', signout)
function signout() {

  signOut(auth).then(() => {
    // Sign-out successful.
    document.getElementById("gsignin").style.display = "block";
    document.getElementById("signout").style.display = "none";
    document.getElementById("userdetail").style.display = "none"
    console.log("you are signout ");

  }).catch(e => {
    // An error happened.
  })
}


 
 
