
let roundNumber = 0;
let userWins = 0;
let winLog = [];

game();

function game(){
    for(let i = 0; i < 5; i++){
        roundNumber++;
        winLog[roundNumber] = 0;
        singleRound();
    }
    let outText = endGameTextGenerator();
    console.log(outText);
}

function singleRound(textAdd = ""){
    let compChoice = getComputerChoice();
    let playerChoice = prompt(textAdd + `Please input rock, paper, or scissors.\nRound ${roundNumber}`);
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
        userWins++;
        winLog[roundNumber] = 1;
        return "You Win! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    } 
    return singleRound("You Tied! Please play another round\n");
}

function playerPaper(computerSelection){
    if(computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper";
    } 
    if(computerSelection == "rock"){
        userWins++;
        winLog[roundNumber] = 1;
        return "You Win! Paper beats Rock";
    } 
    return singleRound("You Tied! Please play another round\n");
}

function playerScissors(computerSelection){
    if(computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    } 
    if(computerSelection == "paper"){
        userWins++;
        winLog[roundNumber] = 1;
        return "You Win! Scissors beats Paper";
    } 
    return singleRound("You Tied! Please play another round\n");
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