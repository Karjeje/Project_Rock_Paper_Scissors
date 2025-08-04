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

function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            console.log("Computer's score = " +  ++computerScore + "\nYour score = " + humanScore);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            console.log("Computer's score = " +  computerScore + "\nYour score = " + ++humanScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat Paper");
            console.log("Computer's score = " +  computerScore + "\nYour score = " + ++humanScore);
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper");
            console.log("Computer's score = " +  ++computerScore + "\nYour score = " + humanScore);
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            console.log("Computer's score = " +  computerScore + "\nYour score = " + ++humanScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            console.log("Computer's score = " +  ++computerScore + "\nYour score = " + humanScore);
        }
        else {
            console.log("Draw!")
            console.log("Computer's score = " +  computerScore + "\nYour score = " + humanScore);
        }
        
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("Game over! You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Game over! The computer won!");
    }
    else {
        console.log("Game over! It's a draw!");
    }

}

playGame()