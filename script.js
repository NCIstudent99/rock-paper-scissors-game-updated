// Game variables
let wins = 0;
let losses = 0;
let ties = 0;
let roundsPlayed = 0;
let gameEnded = false;

// Play a round of the game
function playGame(userChoice) {
  if (gameEnded) return; // No further moves if the game has ended

  // Game choices
  const choices = ["rock", "paper", "scissors"];

  // Random choice for the computer
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display both user and computer choices
  let resultMessage = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

  // Determine the outcome
  if (userChoice === computerChoice) {
    resultMessage += "It's a tie!";
    ties++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += "You win!";
    wins++;
  } else {
    resultMessage += "You lose!";
    losses++;
  }

  // Increment rounds played
  roundsPlayed++;

  // Update the score display
  updateScore();

  // Check if the game ends after 3 rounds or if the player wins
  if (wins > 0 || roundsPlayed >= 3 || losses > 0) {
    gameEnded = true; // Game ends if user wins or 3 rounds are played
    resultMessage += "\nGame Over!";

    // Disable the game buttons after game ends
    disableGameButtons();

    // Enable the reset button when the game ends
    document.getElementById("resetButton").disabled = false;
  }

  // Display the result
  document.getElementById("result").innerText = resultMessage;
  document.getElementById("result").classList.remove("alert-info");
  document.getElementById("result").classList.add("alert-primary");
}

// Update the score table
function updateScore() {
  document.getElementById("wins").innerText = wins;
  document.getElementById("losses").innerText = losses;
  document.getElementById("ties").innerText = ties;
  document.getElementById("rounds").innerText = roundsPlayed;
}

// Disable all the game buttons
function disableGameButtons() {
  document.getElementById("rockButton").disabled = true;
  document.getElementById("paperButton").disabled = true;
  document.getElementById("scissorsButton").disabled = true;
}

// Enable all the game buttons
function enableGameButtons() {
  document.getElementById("rockButton").disabled = false;
  document.getElementById("paperButton").disabled = false;
  document.getElementById("scissorsButton").disabled = false;
}

// Reset the game
function resetGame() {
  // Reset all game variables
  wins = 0;
  losses = 0;
  ties = 0;
  roundsPlayed = 0;
  gameEnded = false;

  // Reset the score table
  updateScore();

  // Reset the result message
  document.getElementById("result").innerText = "Make your choice to start the game!";
  document.getElementById("result").classList.remove("alert-primary");
  document.getElementById("result").classList.add("alert-info");

  // Disable the reset button until game ends again
  document.getElementById("resetButton").disabled = true;

  // Re-enable the game buttons
  enableGameButtons();
}
