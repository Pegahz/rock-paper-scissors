//This function returns the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

//This function returns the player's choice in a standard format
function standardPlayerSelection(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
}

//This function plays one round of the game
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    //How the plaer wins
    if (computerSelection === 'Rock' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Rock') 
        {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }

    //How the computer wins
    if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper') 
        {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }

    //A draw
    if (computerSelection === playerSelection) {
        console.log(`Draw! ${computerSelection} can't beat ${playerSelection}`);
        return 0;
    }
}

//This function plays 5 round of the game and after counting the scores detemines who wins
function game() {
    let score, playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = standardPlayerSelection(prompt("Rock, Paper or Scissors?"));
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