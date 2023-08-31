let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    } else {
        return getComputerChoice();
    }
}

function getPlayerChoice() {
    playerSelection = prompt("Choose Rock, Paper or Scissors")
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

let computerSelection = "";
let playerSelection = "";
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

gameStart(playerSelection, computerSelection);

function gameStart(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Player wins!");
        playerWins += 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Computer wins!");
        computerWins += 1;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Draw!");  
        computerWins += 1;
        playerWins += 1;      
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Player wins!");
        playerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Computer wins!");
        computerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Draw!");  
        computerWins += 1;
        playerWins += 1;      
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Player wins!");
        playerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Computer wins!");
        computerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Player choice: " + playerSelection);
        console.log("Computer choise: " + computerSelection);
        console.log("Draw!");  
        computerWins += 1;
        playerWins += 1;      
    }
}

for (let i = 1; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    gameStart(playerSelection, computerSelection);

    if (playerWins > computerWins && i === 4) {
        console.log("Player score: " + playerWins);
        console.log("Computer score: " + computerWins);
        console.log("Player Wins!");
    } else if (computerWins > playerWins && i === 4) {
        console.log("Player score: " + playerWins);
        console.log("Computer score: " + computerWins);
        console.log("Computer Wins!");
    } else if (playerWins === computerWins && i === 4){
        console.log("Player score: " + playerWins);
        console.log("Computer score: " + computerWins);
        console.log("Draw!");
    }
}
