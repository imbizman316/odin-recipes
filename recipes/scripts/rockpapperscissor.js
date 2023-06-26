//First get the header so we can change it.
const header = document.querySelector(".top");

//Get each button so we can get input.
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorbutton = document.querySelector("#scissor");

//Get the bottom so we can change it, telling what computer drew.
const result = document.querySelector(".result");

//Get the bottom button
const playAgain = document.querySelector(".playagain");

//When user pushes one of the buttons,
rockbutton.addEventListener("click",generate);
paperbutton.addEventListener("click",generate);
scissorbutton.addEventListener("click",generate);
playAgain.style.display = "none";

//generate a random number ranging from 0 ~ 2

function generate(event){

//Convert if to Text (Rock, Paper, Scissor)    
    let player = event.target.id;
    let randNum = Math.floor(Math.random()*3);
    if (randNum === 0) {randNum = "rock";}
    else if (randNum ===1) {randNum = "paper";}
    else {randNum = "scissor";}

    
    
    //show their plays on the bottom.
    result.innerHTML = `<h3>Player: ${player} VS. Enemy: ${randNum}</h3>`


    //Compare it with player's input with if statement.
    

    if (player === 'rock' && randNum === 'scissor') {
        showresult("player");
    }
    else if (player === 'scissor' && randNum === 'paper') {
        showresult("player");
    }
    else if (player === 'paper' && randNum === 'rock') {
        showresult("player");
    }
    else if (player === randNum) {
        showresult("draw");
    } else {
        showresult("enemy");
    }
}

function showresult(outcome){
    
    if (outcome === "player") {header.innerHTML = "<h1>You win!</h1>";}
    else if (outcome === "enemy") {header.innerHTML = "<h1>AI wins!</h1>";}
    else {header.innerHTML = "<h1>It's a DRAW</h1>";}
    playAgain.style.display = "block";

}

function playagain() {
    player = "";
    randNum = "";
}



//Change the content of top and bottom texts according to the result.



