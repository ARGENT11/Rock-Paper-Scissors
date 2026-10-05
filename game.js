function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  const choice = prompt(
    "Enter your choice: Rock, Paper, Scissors, or secret Gun",
  ).toLowerCase();
  switch (choice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    case "gun":
      return "Gun";
    default:
      return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanMove = humanChoice.toLowerCase();
    const computerMove = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      const result = `It's a tie! You both chose ${humanMove}.`;
      console.log(result);
      return result;
    } else if (
      (humanChoice === "Gun" && computerChoice !== "Gun") ||
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      const result = `You win! ${humanMove} beats ${computerMove}. Pew pew!`;
      console.log(result);
      return result;
    } else if (
      (computerChoice === "Gun" && humanChoice !== "Gun") ||
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
      computerScore++;
      const result = `You lose! ${computerMove} beats ${humanMove}. The computer drew a gun. `;
      console.log(result);
      return result;
    } else {
      computerScore++;
      const result = `You lose! ${computerMove} beats ${humanMove}.`;
      console.log(result);
      return result;
    }
  }

  for (let round = 0; round < 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();
