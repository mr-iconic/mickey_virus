var hem = document.getElementById("hemb");
var x = document.getElementById("nav_bar");
const el = document.getElementById("hemb");

// this function is defined to change navbar into hemburger menu

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

// this function is define for switch  theme of the page

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
