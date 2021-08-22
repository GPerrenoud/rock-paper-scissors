function computerPlay() {
    let compDecision = Math.floor(Math.random() * 3);
    switch(compDecision) {
        case 0:
             compDecision = "rock";
             break;
        case 1:
            compDecision = "paper";
            break;
        case 2:
            compDecision = "scissors";
            break;
    }
    console.log("Computer chose: " + compDecision);
    return compDecision;
}


function playRound() {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        console.log("You chose: " + playerSelection);
        if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
        {
            console.log("Draw!");
            //begin win logic
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
            console.log("You win! Rock beats scissors!");
            playerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins)
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
            console.log("You win! Scissors beats paper!");
            playerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins)
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
            console.log("You win! Paper beats rock!");
            playerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins);

            //begin loss logic
        } else if (computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors") {
            console.log("You lose! Rock beats scissors!");
            computerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins)
        } else if (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper") {
            console.log("You lose! Scissors beats paper!");
            computerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins)
        } else if (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock") {
            console.log("You lose! Paper beats rock!");
            computerWins++;
            console.log("Total wins: " + playerWins + " Total losses: " + computerWins);
        }
}

function game () {
    for (let i=0; i<5; i++) {
        playRound()
    }
}
let playerWins = 0;
let computerWins = 0;
game();