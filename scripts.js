
let roundNumber = 0;

function game(){
    for(let i = 0; i < 5; i++){
        roundNumber++;
        singleRound();
    }
}

function singleRound(textAdd = ""){
    let compChoice = getComputerChoice();
    let playerChoice = prompt(textAdd + `Please input rock, paper, or scissors.\bRound ${roundNumber}`);
    playRound(playerChoice, compChoice);
}

function getComputerChoice(){
    let randomInt = intervalRandomizer(1, 3);
    if(randomInt == 1){
        return "rock";
    } else if(randomInt == 2){
        return "paper";
    } else if(randomInt == 3){
        return "scissors";
    }
}

function intervalRandomizer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "Rock"){
        return playerRock(computerSelection);
    } else if(playerSelection == "Paper"){
        return playerPaper(computerSelection);
    }
    return playerScissors(computerSelection);
}

function playerRock(computerSelection){
    if(computerSelection == "scissors"){
        return "You Win! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    } 
    return singleRound("You Tied! Please play another round");
}

function playerPaper(computerSelection){
    if(computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper";
    } 
    if(computerSelection == "rock"){
        return "You Win! Paper beats Rock";
    } 
    return singleRound("You Tied! Please play another round");
}

function playerScissors(computerSelection){
    if(computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        return "You Win! Scissors beats Paper";
    } 
    return singleRound("You Tied! Please play another round");
}