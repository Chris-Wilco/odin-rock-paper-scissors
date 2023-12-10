
let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;

const scoreDiv = document.querySelector('#total-score');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const rockButton = document.querySelector('#rock-image');
const paperButton = document.querySelector('#paper-image');
const scissorsButton = document.querySelector('#scissors-image');


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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "Rock"){
        return playerChoseRock(computerSelection);
    } else if(playerSelection == "Paper"){
        return playerChosePaper(computerSelection);
    }
    return playerChoseScissors(computerSelection);
}

function playerChoseRock(computerSelection){
    if(computerSelection == "scissors"){
        playerWins++;
        updateScore();
        return "You Win! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        computerWins++;
        updateScore();
        return "You Lose! Paper beats Rock";
    } 
    return "You Tied! Please play another round\n";
}

function playerChosePaper(computerSelection){
    if(computerSelection == "scissors"){
        computerWins++;
        updateScore();
        return "You Lose! Scissors beats Paper";
    } 
    if(computerSelection == "rock"){
        playerWins++;
        updateScore();
        return "You Win! Paper beats Rock";
    } 
    return "You Tied! Please play another round\n";
}

function playerChoseScissors(computerSelection){
    if(computerSelection == "rock"){
        computerWins++;
        updateScore();
        return "You Lose! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        playerWins++;
        updateScore();
        return "You Win! Scissors beats Paper";
    } 
    return "You Tied! Please play another round\n";
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
    alert(playerChoseRock(compChoice));
});

paperButton.addEventListener('click', function(event) {
    const compChoice = getComputerChoice();
    alert(playerChosePaper(compChoice));
});

scissorsButton.addEventListener('click', function(event) {
    const compChoice = getComputerChoice();
    alert(playerChoseScissors(compChoice));
});

function updateScore(){
    //const newScore = `${playerWins} : ${computerWins}`;

    //scoreDiv.textContent = newScore;
    playerScoreDiv.textContent = `${playerWins}`;
    computerScoreDiv.textContent = `${computerWins}`;
}