var randno1 = Math.ceil(Math.random()*6);
var randno2 = Math.ceil(Math.random()*6);

var path1 = "images/dice" + randno1 + ".png";
var path2 = "images/dice" + randno2 + ".png";

document.querySelector(".img1").setAttribute("src",path1);
document.querySelector(".img2").setAttribute("src",path2);

if(randno1>randno2){
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
else if(randno2>randno1){
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerText = "Draw";
}
