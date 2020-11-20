function parseChoice (x) {
    if (x === 0){ return "Rock";}
    else if (x===1){ return "Paper";}
    else if (x===2){ return "Scissors";}
    else return undefined;
}
function roundStart (computer, player){
    if (computer === player) {
        return "Tie.";
    } else if (player == "Rock" && computer == "Paper") {
        return "You lose!";
    } else if (player == "Rock" && computer == "Scissors") {
        return "You win!"
    } else if (player == "Paper" && computer == "Scissors"){
        return "You lose!";
    } else if (player == "Paper" && computer == "Rock"){
        return "You win!";
    } else if (player == "Scissors" && computer == "Rock"){
        return "You lose!";
    } else if (player == "Scissors" && computer == "Paper"){
        return "You win!";
    }
}
const computerSelection  = () => {
    return Math.floor(Math.random() * 3);
}
const playerSelection = () => {
    return 0;
}
roundStart(parseChoice(computerSelection), parseChoice(playerSelection));