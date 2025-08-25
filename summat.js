function getComputerChoice() {
    let random = Math.random();

    if (random < 1/3) {
    return ("rock");
    } else if (random < 2/3) {
    return ("paper");
    } else {
    return ("scissors");
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors.")
    return choice.toLowerCase()
}

// function playGame() {

    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {
    choices.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}.`;

    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats Rock.";
        scores.textContent = "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats Rock.";
        scores.textContent = "Computer's score = " + computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beat Paper";
        scores.textContent = "Computer's score = " +  computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beat Paper";
        scores.textContent = "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats Scissors";
        scores.textContent = "Computer's score = " +  computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats Scissors";
        scores.textContent = "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else {
        result.textContent = "Draw!";
        scores.textContent = "Computer's score = " +  computerScore + "\nYour score = " + humanScore;
    }
        
}

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // 
    // if (humanScore > computerScore) {
    //     console.log("Game over! You won!");
    // }
    // else if (humanScore < computerScore) {
    //     console.log("Game over! The computer won!");
    // }
    // else {
    //     console.log("Game over! It's a draw!");
    // }
    // 
// }

const rockbutton = document.querySelector(".rock")
const paperbutton = document.querySelector(".paper")
const scissorsbutton = document.querySelector(".scissors")

rockbutton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperbutton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsbutton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const choices = document.querySelector(".choices")
const result = document.querySelector(".result")
const scores = document.querySelector(".scores")
const gameover = document.querySelector(".gameover")
// playGame()