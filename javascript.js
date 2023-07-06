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
            console.log(message);
            return 0;
        }
        if (playerChoise === 'Paper') {
            message = "You Win! Paper beats Rock";
            console.log(message);
            return 1;
        }
        if (playerChoise === 'Scissors') {
            message = "You Lose! Rock beats Scissors";
            console.log(message);
            return -1;
        }
    }
    if (computerSelection === 'Paper') {
        if (playerChoise === 'Rock') {
            message = "You Lose! Paper beats Rock";
            console.log(message);
            return -1;
        }
        if (playerChoise === 'Paper') {
            message = "Draw! Paper doesn't beat Paper";
            console.log(message);
            return 0;
        }
        if (playerChoise === 'Scissors') {
            message = "You Win! Scissors beat Paper";
            console.log(message);
            return 1;
        }
    }
    if (computerSelection === 'Scissors') {
        if (playerChoise === 'Rock') {
            message = "You Win! Rock beats Scissors";
            console.log(message);
            return 1;
        }
        if (playerChoise === 'Paper') {
            message = "You Lose! Scissors beat Paper";
            console.log(message);
            return -1;
        }
        if (playerChoise === 'Scissors') {
            message = "Draw! Scissors don't beat Scissors";
            console.log(message);
            return 0;
        }
    }
}

function game() {
    let score, playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        score = playRound(playerSelection, computerSelection);
        (score === 1) ? playerScore++ : (score === -1) ? computerScore++ : null;
    }
    if (playerScore > computerScore) {
        console.log("You are the winner!");
    } else if (playerScore < computerScore) {
        console.log("The computer is the winner!");
    } else {
        console.log("No winner!");
    }
}

game();