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

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanScore === 0 && computerScore === 0) {
        gameover.textContent = ""; 
    }

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

    if (computerScore === 5 || humanScore === 5) {
    if (humanScore > computerScore) {
        gameover.textContent = "Game over! You won!";
    }
    else  {
        gameover.textContent = "Game over! The computer won!";
    }

    humanScore = 0;
    computerScore = 0;
}
        
}

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