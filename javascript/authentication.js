
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);