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



const db = collection(fire ,"adminform")

// let submitbt = document.getElementById("getpoint");

// submitbt.addEventListener("click", form);

 async function form() {

  
  let iframe = document.getElementById('urliframe').value
  let  urlimage = document.getElementById('urlimage').value
  let  describe = document.getElementById('describe').value

  
  
  try {
    const docRef = await addDoc(collection(fire, "adminform"), {
      iframe: iframe,
      urlimage: urlimage,
      description : describe
    });
    window.open('https://mickey-virus.netlify.app/pages/loginpage.html' , '_top');
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
 } 

// variables declared to target the form elements

let ilabel = document.getElementById('url')
let iframe = document.getElementById('urliframe')
let limage = document.getElementById('imageurl')
let  urlimage = document.getElementById('urlimage')
let  ldesribe = document.getElementById('description')
let  describe = document.getElementById('describe')
let  addframe =document.getElementById('addframe')

// // this is used for form check whether it is fill or note


function formchecker() {
  
   const detail = {
      iframe: iframe.value,
      image: urlimage.value,
      describe: describe.value,
   };
   var a = 1;
   var b = 1;
   var c = 1;
   if (detail.iframe == "none") {
      ilabel.textContent = "please enter iframe value";
      ilabel.style.color = "red";
   }
   else {
      ilabel.textContent = `Thankyou `;
      a = 0;
   }
   if (detail.image == "none") {
      limage.textContent = "please enter iframe value";
      limage.style.color = "red";
   }
   else {
      limage.textContent = `Thankyou `;
      b = 0;
   }
   if (detail.describe == "none") {
      ldesribe.textContent = "please enter iframe value";
      ldesribe.style.color = "red";
   }
   else {
      ldesribe.textContent = `Thankyou `;
      c = 0;
   }
  
   if (a == 0 && b == 0 && c == 0) {
      // document.querySelector("#getpoint").innerHTML = `<a href="pages/loginpage.html">get to point</a>`;
      form();
        
    }
    else {
      console.log("wrong");
    }
  }
  addframe.addEventListener("click", formchecker);


 var demovideo = document.getElementById('demovideo');

 demovideo.addEventListener("click", showz);
 function showz() {
   const detail = {
      iframe: iframe.value,
      image: urlimage.value,
      describe: describe.value
   };
    document.getElementById('demovideo').innerHTML =` <div class="htmls"> 
      ${detail.iframe}
    <div>
        <div class="description">

            <div>
                <a href="https://youtu.be/kUMe1FH4CHE">

                    <img src="${detail.image}"
                        alt="" srcset="">
                </a>
            </div>
            <div>
                <h1>kevin powwel</h1>
            </div>
        </div>
        <div>
            <p>${detail.describe} </p>
        </div>
    </div>
</div>`

 }