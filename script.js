function computerPlay() {
    // Generate either 0, 1, or 2
    switch(Math.floor(Math.random()*3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Error in computerPlay() function.";
    }
}

function playRound(playerSelection, computerSelection) {
    // Change player choice to capitalized. ex "roCK" to "Rock"
    playerSelection = playerSelection.toLowerCase();
    playerSelectionFirstLetter = playerSelection.charAt(0).toUpperCase();
    playerSelection = playerSelection.slice(1);
    playerSelection = playerSelectionFirstLetter + playerSelection;
    // Check for options excluding Rock Paper Scissors
    if (playerSelection !== "Rock" && 
        playerSelection !== "Paper" && 
        playerSelection !== "Scissors") {
        console.log(`Invalid input :( Make sure to choose one of \"Rock\" \"Paper\" \"Scissors\"`);
        return "invalid";
    }
    // Consider win/loss/tie cases
    else if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both used ${playerSelection}`);
        return "tie";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
             playerSelection === "Paper" && computerSelection === "Scissors" ||
             playerSelection === "Scissors" && computerSelection === "Rock") {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                return "loss";
             }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }
}

function game() {
    let winCount = 0;
    let lossCount = 0;
    let tieCount = 0;
    // Loop for 5 rounds. Prompt user for option, loop if invalid option. Note that a tie counts as a round.
    for (let i=0; i < 5; i++) {
        console.log(`Round ${i+1}!`);
        const computerSelection = computerPlay();
        do {
            const playerSelection = window.prompt('Rock, Paper, or Scissors?');
            playResult = playRound(playerSelection, computerPlay());
        } while (playResult === "invalid");
        // Add to counters
        switch (playResult) {
            case "win": winCount++; break;
            case "loss": lossCount++; break;
            case "tie": tieCount++; break;
            default: return "Error in game() function.";
        }
    }
    // Display win/loss/tie counts.
    console.log(`Thank you for playing!
Wins: ${winCount}
Losses: ${lossCount}
Ties: ${tieCount}`)
}

game();