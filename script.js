var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    randNum = Math.random();

    if (randNum < 1 / 3) {
        return "paper";
    } else if (randNum <= 2 / 3 && randNum >= 1 / 3) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    const playerChoice = prompt("rock paper scissors?");
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {

    var win = false;

    if (playerChoice === computerChoice) {
        return console.log("Draw");
    } else if (playerChoice === "rock" && computerChoice != "paper") {
        playerScore++;
        win = true;
    } else if (playerChoice === "paper" && computerChoice != "scissors") {
        playerScore++;
        win = true;
    } else if (playerChoice === "scissors" && computerChoice != "rock") {
        playerScore++;
        win = true;
    } else {
        computerScore++
    }

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    console.log("Player Choice: " + playerChoice + " Computer Choice: " + computerChoice)

    const choiceResult = playerChoice + " beats " + computerChoice + "!"
    if (win == true) {
        return console.log("You Win! " + choiceResult);
    } else {
        return console.log("You Lose! " + choiceResult);
    }

}

function playGame() {

    for (let i = 0; i < 5; i++) {

        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();

        playRound(computerChoice, playerChoice);

    }

    if (playerScore > computerScore) {
        console.log("Player wins with " + playerScore + " points!");
    } else if (playerScore === computerScore) {
        console.log("Game is a Draw!");
    } else {
        console.log("Computer Wins with " + computerScore + " points!");
    }


}

playGame();





