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

let submitbt = document.getElementById('getpoint');

submitbt.addEventListener("click", form);

 async function form(){

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

    alert("your data is saved");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
 } 

  