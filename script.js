function toggleChoicesVisibility() {
    document.getElementsByClassName("rps-choices")[0].classList.toggle("hidden");
}

function computerPlay() {
    // Generate either 0, 1, or 2
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Error in computerPlay() function.";
    }
}

function playRound(playerSelection, computerSelection) {
    let roundResultsText = document.getElementById("rps-round-result-text");
    if (playerSelection === computerSelection) {
        roundResultsText.className = "tie-color";
        roundResultsText.innerHTML = ("It's a tie!<br>You both used " + playerSelection);
        game("tie");
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResultsText.className = "loss-color";
        roundResultsText.innerHTML = ("You lose!<br>" + computerSelection + " beats " + playerSelection);
        game("loss");
    }
    else {
        roundResultsText.className = "win-color";
        roundResultsText.innerHTML = ("You win!<br>" + playerSelection + " beats " + computerSelection);
        game("win");
    }
}

function game(roundResult) {
    switch (roundResult) {
        case "win": winCount++; break;
        case "loss": lossCount++; break;
        case "tie": tieCount++; break;
        default: return "Error in game() function.";
    }
    if (winCount != 5 && lossCount != 5) {
        return;
    }
    gameResultsText.style.fontSize = "40px";
    if (winCount == 5) {
        gameResultsText.textContent = (`You won against the computer!!!`);
        gameResultsText.style.fontWeight = "bold";
        gameResultsText.className = "win-color";
    }
    else if (lossCount == 5) {
        gameResultsText.textContent = (`You lost... better luck next time~`);
        gameResultsText.className = "loss-color";
    }

    // if (playAgainButton.classList.contains("hidden")) {
    //     playAgainButton.classList.remove("hidden");
    // }

    // Display win/loss/tie counts.
    statisticsResultsText.id = "rps-statistics-result-text";
    statisticsResultsText.innerHTML = `<span class="win-color">Wins: ${winCount}</span><br>
    <span class="loss-color">Losses: ${lossCount}</span><br>
    <span class="tie-color">Ties: ${tieCount}</span><br><br>
    Thank you for playing!<br>`;
    document.getElementById("rps-result").appendChild(statisticsResultsText);



    let playAgainButton = document.createElement("img");
    playAgainButton.src = "images/play-again.png";
    playAgainButton.alt = "Play Again";
    playAgainButton.className = "play-again-button";
    playAgainButton.addEventListener("click", function () {
        toggleChoicesVisibility();
        roundResultsText.innerHTML = "";
        gameResultsText.textContent = "";
        statisticsResultsText.innerHTML = "";
        playAgainButton.remove();
    })
    document.getElementById("rps-result").appendChild(playAgainButton);



    winCount = 0;
    lossCount = 0;
    tieCount = 0;

    toggleChoicesVisibility();
}



// game();

let winCount = 0;
let lossCount = 0;
let tieCount = 0;

let roundResultsText = document.getElementById("rps-round-result-text");
let gameResultsText = document.getElementById("rps-game-result-text");
let statisticsResultsText = document.createElement("p");

let handler =
    document.querySelectorAll(".rps-choice").forEach(item => {
        item.addEventListener("click", function () { playRound(item.dataset.choice, computerPlay()); });
    })