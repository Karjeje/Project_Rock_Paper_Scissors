
let humanScore = 0
let computerScore = 0

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


function playRound(humanChoice, computerChoice) {

    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        return "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return "Computer's score = " +  computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
        return "Computer's score = " +  computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        return "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return "Computer's score = " +  computerScore + "\nYour score = " + ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        return "Computer's score = " +  ++computerScore + "\nYour score = " + humanScore;
    }
    else {
        console.log("Draw!")
        return "Computer's score = " +  computerScore + "\nYour score = " + humanScore;
    }
    
}
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))