function playGame(userChoice) {
    // Possible choices
    const choices = ["rock", "paper", "scissors"];
  
    // Random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Display both user and computer choices
    let resultMessage = `You chose ${userChoice}. Computer chose ${computerChoice}. `;
  
    // Determine the outcome
    if (userChoice === computerChoice) {
      resultMessage += "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      resultMessage += "You win!";
    } else {
      resultMessage += "You lose!";
    }
  
    // Display the result
    document.getElementById("result").innerText = resultMessage;
    document.getElementById("result").classList.remove("alert-info");
    document.getElementById("result").classList.add("alert-primary");
  }
  