import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";
import { collection ,addDoc} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDNUNX5-EFK_fmchxG1XQ2bytimDqk8nB0",
  authDomain: "my-first-project-542d1.firebaseapp.com",
  projectId: "my-first-project-542d1",
  storageBucket: "my-first-project-542d1.appspot.com",
  messagingSenderId: "178131652235",
  appId: "1:178131652235:web:eb0c971eeca63f779f4e8e"
};

const app = initializeApp(firebaseConfig);
var  fire = getFirestore(app);



const db = collection(fire ,"formdata")

// let submitbt = document.getElementById("getpoint");

// submitbt.addEventListener("click", form);

 async function form() {

  let field = document.getElementById('field').value
  let checbox = document.getElementById('pc_c').value
  let time = document.getElementById('e_time').value
  let type = document.getElementById('time').value
  
  
  try {
    const docRef = await addDoc(collection(fire, "formdata"), {
      goal: field,
      pc:checbox,
    time: time,
    format: type
    });
    window.open('https://mickey-virus.netlify.app/pages/loginpage.html' , '_top');
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
 } 

// variables declared to target the form elements

const target = document.querySelector("#targetgoal");
const field = document.querySelector("#field");
const checkbox = document.querySelector("#pc_c");
const expectedtime = document.querySelector("#ext_time");
const timebox = document.querySelector("#e_time");
const timetype = document.querySelector("#time");
const getpoint = document.querySelector("#getpoint");
const submit = document.querySelector("#submit");

// // this is used for form check whether it is fill or note


function formchecker() {
  
   const detail = {
      field: field.value,
      time: timebox.value + timetype.value
   };
   var a = 1;
   var b = 1;
   if (detail.field == "none") {
      target.textContent = "please select an option";
      target.style.color = "red";
   }
   else {
      target.textContent = `Thankyou, for choose ${detail.field}`;
      a = 0;
   }
   if (detail.time == "days" || detail.time == "0days") {
      expectedtime.textContent = "please, enter some time";
      expectedtime.style.color = "red";

   }
   else {
      expectedtime.textContent = `you got best in ${timebox.value + " " + timetype.value}`;
      b = 0;
    }
   if (a == 0 && b == 0) {
      // document.querySelector("#getpoint").innerHTML = `<a href="pages/loginpage.html">get to point</a>`;
      form();
      
      
      
    }
    else {
      console.log("wrong");
    }
  }
  getpoint.addEventListener("click", formchecker);