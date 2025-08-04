console.log("HAAALLLOU")

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
console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors.")
    return choice.toLowerCase()
}
console.log(getHumanChoice())