var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
function toss() {
  if (document.getElementById("p1").value == "" || document.getElementById("p2").value == "") {
    document.querySelector("h2").innerHTML="Add Name Please!!";
  }
  else {
    if (p1.value == p2.value) {
      document.querySelector("h2").innerHTML="Both Names are same, Please change the name";
    }else{
    document.getElementById("pn1").innerHTML = p1.value;
    document.getElementById("p1").style.display = "none";
    document.getElementById("pn2").innerHTML = p2.value;
    document.getElementById("p2").style.display = "none";
    // document.querySelector("h2").style.color="#4ECCA3";
    var randomNumber1 = Math.ceil(Math.random() * 6);
    document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
    var randomNumber2 = Math.ceil(Math.random() * 6);
    document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";
    if (randomNumber1 === randomNumber2) {
      document.querySelector("h2").innerHTML = "Draw! Toss again";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h2").innerHTML = p1.value + " Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h2").innerHTML = p2.value + " Wins! ";
    }
    document.getElementById("Resetbtn").style.display="inline";
  }
  }
}

function ResetName() {
  p1.value="";
  p2.value="";
  document.querySelector("h2").innerHTML = "Enter Your Name , Then Click Toss";
  document.getElementById("pn1").innerHTML = p1.value;
  document.getElementById("pn2").innerHTML = p2.value;
  document.getElementById("p1").style.display = "inline-block";
  document.getElementById("p2").style.display = "inline-block";
  document.querySelector(".img1").src = "images/dice6.png";
  document.querySelector(".img2").src = "images/dice6.png";
  document.getElementById("Resetbtn").style.display = "none";
}
function darkMode(){
  document.querySelector("body").classList.toggle("light");
  document.querySelector("body").classList.toggle("dark");
  document.querySelectorAll("button")[0].classList.toggle("light");
  document.querySelectorAll("button")[0].classList.toggle("dark");
  document.querySelectorAll("button")[1].classList.toggle("light");
  document.querySelectorAll("button")[1].classList.toggle("dark");
  document.querySelectorAll("input")[1].classList.toggle("light");
  document.querySelectorAll("input")[1].classList.toggle("dark");
  document.querySelectorAll("input")[2].classList.toggle("light");
  document.querySelectorAll("input")[2].classList.toggle("dark");
  document.querySelector("footer").classList.toggle("light");
  document.querySelector("footer").classList.toggle("dark");

}
