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
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    const div = document.querySelector('div');

    //How the player wins
    if (computerSelection === 'Rock' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Rock') 
        {
        playerScore++;
        div.textContent = `Player: ${playerScore}
                            Computer: ${computerScore}`;
        return [playerScore, computerScore];
    }

    //How the computer wins
    if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection === 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper') 
        {
        computerScore++;
        div.textContent = `Player: ${playerScore}
                            Computer: ${computerScore}`;
        return [playerScore, computerScore];
    }

    //A tie
    if (computerSelection === playerSelection) {
        div.textContent = `Player: ${playerScore}
                            Computer: ${computerScore}`;
        return [playerScore, computerScore];
    }
}

//This function plays 5 round of the game and after counting the scores detemines who wins
function game() {
    let playerScore = 0, computerScore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = standardPlayerSelection(button.id);
            [playerScore, computerScore] = playRound(playerSelection, computerSelection, playerScore, computerScore);
            if (playerScore === 5 || computerScore === 5) {
                endGame(playerScore, computerScore, playerScore, computerScore);
                return;
            }
        });
    });
    return;
}

// This function finishes the game
function endGame(playerScore, computerScore, playerScore, computerScore) {
    const div = document.querySelector('div');
    if (playerScore > computerScore) {
        div.textContent = `You won!\n
                           Player: ${playerScore}\n
                           Computer: ${computerScore}`;
    } else if (playerScore < computerScore) {
        div.textContent = `You lost!\n
                           Player: ${playerScore}\n
                           Computer: ${computerScore}`;
    }
}

game();