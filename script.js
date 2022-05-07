// global variables
const words = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;

const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

const winner = document.querySelector(".winner");

const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");

const resetBtn = document.querySelector("#reset");
// hide/show play again button
resetBtn.style.display = "none";
function showButton() {
  resetBtn.style.display = "block";
}

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

// disable buttons
function disableButtons() {
  options.forEach((elem) => {
    elem.disabled = true;
    elem.style.pointerEvents = "none";
  });
}

// start the game intro
const startGame = () => {
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");

  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });
};
startGame();

// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  return words[Math.floor(Math.random() * words.length)];
}

// Write a function that plays a single round of Rock Paper Scissors.
function playRound() {
  // const options = document.querySelectorAll(".options button");
  // const playerHand = document.querySelector(".player-hand");
  // const computerHand = document.querySelector(".computer-hand");
  // const hands = document.querySelectorAll(".hands img");

  // resets animation once it ends
  hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  // Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
  options.forEach((option) => {
    option.addEventListener("click", function () {
      // console.log(this);
      computerSelection = computerPlay();
      console.log(computerSelection);

      // winner text and scoreboard updates after animation
      setTimeout(() => {
        // change round winner text
        compareHands(this.textContent, computerSelection);
        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerSelection}.png`;
      }, 2000);
      //Animation
      playerHand.style.animation = "shakePlayer 2s ease";
      computerHand.style.animation = "shakeComputer 2s ease";
    });
  });

  // Display the running score, and announce a winner of the game once one player reaches 5 points.
  const updateScore = () => {
    // const playerScore = document.querySelector(".player-score p");
    // const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore === 5) {
      winner.textContent = "You won a game!";
      showButton();
      disableButtons();
      return;
    } else if (cScore === 5) {
      winner.textContent = "Computer won a game!";
      showButton();
      disableButtons();
      return;
    }
  };

  const compareHands = (playerSelection, computerSelection) => {
    // const winner = document.querySelector(".winner");
    if (playerSelection === computerSelection) {
      winner.textContent = "It is a tie";
      return;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    }
  };
}

// Write a NEW function called game(). Call the playRound function inside of this.
function game() {
  playRound();
}
game();
