//First get the header so we can change it.
const header = document.querySelector(".top");

//Get each button so we can get input.
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorbutton = document.querySelector("#scissor");

//Get the bottom so we can change it, telling what computer drew.
const result = document.querySelector(".result");
const playerScoreDis = document.querySelector(".playerScore");
const enemyScoreDis = document.querySelector(".enemyScore");
const grandTotal = document.querySelector(".grandtotal");

let roundCount = 0;

let playerScore = 0;
let enemyScore = 0;
playerScoreDis.innerText = `Player: ${playerScore}`;
enemyScoreDis.innerText = `Enemy: ${enemyScore}`;


//Get the bottom button
const playAgain = document.querySelector(".playagain");
playAgain.style.display = "none";

//When user pushes one of the buttons,
rockbutton.addEventListener("click",generate);
paperbutton.addEventListener("click",generate);
scissorbutton.addEventListener("click",generate);
playAgain.addEventListener("click", replay);


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
        playerScore ++;
    }
    else if (player === 'scissor' && randNum === 'paper') {
        showresult("player");
        playerScore ++;
    }
    else if (player === 'paper' && randNum === 'rock') {
        showresult("player");
        playerScore ++;
    }
    else if (player === randNum) {
        showresult("draw");

    } else {
        showresult("enemy");
        enemyScore ++;
    }
    playerScoreDis.innerText = `Player: ${playerScore}`;
    enemyScoreDis.innerText = `Enemy: ${enemyScore}`;
    roundCount ++;
    
    if (enemyScore === 5) {
        grandTotal.innerText = "Enemy is the final winner";
        playAgain.style.display = "block";
        rockbutton.disabled = true;
        paperbutton.disabled = true;
        scissorbutton.disabled = true;
    }
    else if (playerScore === 5) {
        grandTotal.innerText = "Player is the final winner";
        playAgain.style.display = "block";
        rockbutton.disabled = true;
        paperbutton.disabled = true;
        scissorbutton.disabled = true;
    }

}

function showresult(outcome){
    
    if (outcome === "player") {header.innerHTML = "<h1>You win!</h1>";}
    else if (outcome === "enemy") {header.innerHTML = "<h1>AI wins!</h1>";}
    else {header.innerHTML = "<h1>It's a DRAW</h1>";}
}

function replay() {
    player = "";
    randNum = "";
    playAgain.style.display = "none";
    header.innerHTML = "<h1>Make a choice</h1>";
    result.innerHTML = "<h3></h3>"
    playerScore = 0;
    enemyScore = 0;
    playerScoreDis.innerText = `Player: ${playerScore}`;
    enemyScoreDis.innerText = `Enemy: ${enemyScore}`;
    grandTotal.innerText = "";
    rockbutton.disabled = false;
    paperbutton.disabled = false;
    scissorbutton.disabled = false;

}



//Change the content of top and bottom texts according to the result.



