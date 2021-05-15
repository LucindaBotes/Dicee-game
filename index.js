var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png"; 

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
    document.getElementsByClassName("heading")[0].innerHTML = "Draw";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementsByClassName("heading")[0].innerHTML = "Player 2 Wins";
}
else {
    document.getElementsByClassName("heading")[0].innerHTML = "Player 1 Wins";
}