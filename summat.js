console.log("HAAALLLOU")

function getComputerChoice() {
    let random = Math.random();

    if (random < 1/3) {
    return ("Rock");
    } else if (random < 2/3) {
    return ("Paper");
    } else {
    return ("Scissors");
    }
}
console.log(getComputerChoice())