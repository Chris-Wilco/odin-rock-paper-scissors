
let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;

const scoreDiv = document.querySelector('#score-display');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const rockButton = document.querySelector('#rock-image');
const paperButton = document.querySelector('#paper-image');
const scissorsButton = document.querySelector('#scissors-image');
const infoBox = document.querySelector('#info-box');
const scoreResetButton = document.querySelector('#reset-score');

updateScore();

function getComputerChoice(){
    let randomInt = pickRandomIntegerFromInterval(1, 3);
    if(randomInt == 1){
        return "rock";
    } else if(randomInt == 2){
        return "paper";
    } else if(randomInt == 3){
        return "scissors";
    }
}

function pickRandomIntegerFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerChoseRock(computerSelection){
    if(computerSelection == "scissors"){
        playerWins++;
        updateScore();
        updateInfoBoxText("You Win! Rock beats Scissors");
    } else if(computerSelection == "paper"){
        computerWins++;
        updateScore();
        updateInfoBoxText("You Lose! Paper beats Rock");
    } else {
        updateInfoBoxText("You Tied! Please play another round");
    }
    bestOfFiveWinner();
}

function playerChosePaper(computerSelection){
    if(computerSelection == "scissors"){
        computerWins++;
        updateScore();
        updateInfoBoxText("You Lose! Scissors beats Paper");
    } else if(computerSelection == "rock"){
        playerWins++;
        updateScore();
        updateInfoBoxText("You Win! Paper beats Rock");
    } else {
        updateInfoBoxText("You Tied! Please play another round");
    }
    bestOfFiveWinner();
}

function playerChoseScissors(computerSelection){
    if(computerSelection == "rock"){
        computerWins++;
        updateScore();
        updateInfoBoxText("You Lose! Rock beats Scissors");
    } else if(computerSelection == "paper"){
        playerWins++;
        updateScore();
        updateInfoBoxText("You Win! Scissors beats Paper");
    } else {
        updateInfoBoxText("You Tied! Please play another round");
    }
    bestOfFiveWinner();
}

function endGameTextGenerator(){
    let returnString = "";
    for(let i = 1; i <= roundNumber; i++){
        if(winLog[i] == 1){
            returnString += "You won round " + i + "\n";
        } else {
            returnString += "The machines won round " + i + "\n";
        }
    }
    if(userWins >= 3){
        returnString += "Congratulations! You have beaten the machines\n"
    } else {
        returnString += "Oh no! The machines have won the day\n"
    }
    returnString += `Final score: \nUser: ${userWins}\nMachines: ` + (5 - userWins);
    return returnString;
}


rockButton.addEventListener('click', function(event) {
    const compChoice = getComputerChoice();
    playerChoseRock(compChoice);
});

paperButton.addEventListener('click', function(event) {
    const compChoice = getComputerChoice();
    playerChosePaper(compChoice);
});

scissorsButton.addEventListener('click', function(event) {
    const compChoice = getComputerChoice();
    playerChoseScissors(compChoice);
});

function updateScore(){
    playerScoreDiv.textContent = `${playerWins}`;
    computerScoreDiv.textContent = `${computerWins}`;
}

function updateInfoBoxText(newText){
    let someNewText = newText;
    infoBox.textContent = someNewText;
}

function clearInfoBoxText(){
    infoBox.textContent = '';
}

function resetScore(){
    playerWins = 0;
    computerWins = 0;
    updateScore();
    clearInfoBoxText();
}

scoreResetButton.addEventListener('click', resetScore);

function bestOfFiveWinner(){
    if(playerWins >= 5){
        updateInfoBoxText('You have won five games! All hail the victor');
    } else if(computerWins >= 5){
        updateInfoBoxText('Oh no! The machines have won!');
    }
}