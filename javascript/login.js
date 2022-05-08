
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
    import { getAuth , GoogleAuthProvider , signInWithRedirect,signOut} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
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

        var x=document.getElementById("gsignin");
        x.addEventListener('click',(e)=>{

          signInWithRedirect(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              x.style.display="none";
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
           
})




var y=document.getElementById("signout");
y.addEventListener('click' , (e)=>{

        
        signOut(auth).then(() => {
            // Sign-out successful.
            x.style.display="block";
            console.log("you are signout ");
          }).catch((error) => {
            // An error happened.
          });
    }
      
)


   