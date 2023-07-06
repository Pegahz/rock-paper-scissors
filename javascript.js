function getComputerChoice() {
    const choises = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return choises[index];
}

function playRound(playerSelection, computerSelection) {
    let message;
    let playerChoise = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    console.log(playerChoise);
    console.log(computerSelection);
    if (computerSelection === 'Rock') {
        if (playerChoise === 'Rock') {
            message = "Draw! Rock doesn't beat Rock";
            return message;
        }
        if (playerChoise === 'Paper') {
            message = "You Win! Paper beats Rock";
            return message;
        }
        if (playerChoise === 'Scissors') {
            message = "You Lose! Rock beats Scissors";
            return message;
        }
    }
    if (computerSelection === 'Paper') {
        if (playerChoise === 'Rock') {
            message = "You Lose! Paper beats Rock";
            return message;
        }
        if (playerChoise === 'Paper') {
            message = "Draw! Paper doesn't beat Paper";
            return message;
        }
        if (playerChoise === 'Scissors') {
            message = "You Win! Scissors beat Paper";
            return message;
        }
    }
    if (computerSelection === 'Scissors') {
        if (playerChoise === 'Rock') {
            message = "You Win! Rock beats Scissors";
            return message;
        }
        if (playerChoise === 'Paper') {
            message = "You Lose! Scissors beat Paper";
            return message;
        }
        if (playerChoise === 'Scissors') {
            message = "Draw! Scissors don't beat Scissors";
            return message;
        }
    }
}

function game() {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));