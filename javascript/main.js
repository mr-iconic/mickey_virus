var hem = document.getElementById("hemb");
var x = document.getElementById("nav_bar");
const el = document.getElementById("hemb");
hem.addEventListener("click", function myfuntion1() {
   if (x.style.display === "block") {
      x.style.display = "none";
      el.className = "hemburger";
   }
   else {
      x.style.display = "block";
      el.className = "hemburgerclose";
   }
})
var swt = document.getElementById("theme");
swt.addEventListener("click", function function2() {
   if (swt.value === "light") {
      swt.value = "dark";
      swt.className = "darkmode"
      var right = document.getElementById("switchlight").style.backgroundColor = "#1d858b";
      var right = document.getElementById("switchlight").style.color = "#6d1c06";
   } else {
      swt.className = "lightmode"
      swt.value = "light";
      var right = document.getElementById("switchlight").style.backgroundColor = "black"
      var right = document.getElementById("switchlight").style.color = "white";
   }
})

const target = document.querySelector("#targetgoal");
const field = document.querySelector("#field");
const checkbox = document.querySelector("#pc_c");
const expectedtime = document.querySelector("#ext_time");
const timebox = document.querySelector("#e_time");
const timetype = document.querySelector("#time");
const getpoint = document.querySelector(".getpoint");
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
      document.querySelector(".getpoint").innerHTML=`<a href="pages/loginpage.html">get to point</a>` ;
      console.log("wright");
   }
   else {
      console.log("wrong");
   }
}
getpoint.addEventListener("click", formchecker);