// global variables
const words = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;
// let playerScore = 0;
// let computerScore = 0;
// let roundsPlayed = 0;
// let gameWinner = "";
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

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Use prompt() to get input from the user.
// function userPlay() {
// let input = prompt("Please type Rock, Paper or Scissors:");
// // case-insensitive input.
// input = input.toLowerCase(); // input to lover case
// let check = validateInput(input); // connect with validateInput function
// while (check == false) {
//   input = prompt(
//     "Type Rock, Paper or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
//   );
//   input = input.toLowerCase();
//   check = validateInput(input); // check becomes true so while loop false brakes down.
// }
// return input;
// }
// check if input text is same as global variable. The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
// function validateInput(word) {
//   return words.includes(word);
// }

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
// function playRound(playerSelection, computerSelection) {
function playRound() {
  // playerSelection = userPlay();
  // computerSelection = computerPlay();
  // console.log("player: " + playerSelection, ", computer: " + computerSelection);

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
      // return "Tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      // playerScore++;
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
      // return "Player Wins!" + " total: " + playerScore + " times";
    } else {
      // computerScore++;
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
      // return "Computer Wins!" + " total: " + computerScore + " times";
    }
  };
}

// returns game winner who won most games.
// function result() {
//   if (playerScore > computerScore) {
//     return (gameWinner = "Game Winner: HUMAN!");
//   } else if (playerScore < computerScore) {
//     return (gameWinner = "Game Winner: COMPUTER!");
//   } else if ((playerScore = computerScore)) {
//     return (gameWinner = "Game Winner: NO ONE!");
//   }
// }

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:
// At this point you should be using console.log() to display the results of each round and the winner at the end.
function game() {
  //  for (let i = 0; i < 5; i++) {
  //     roundsPlayed++;
  //     console.log("round: " + roundsPlayed);
  playRound();
  // result();
  //     console.log(playRound()); // display the results of each round.
  //   }
  // console.log(result()); // display the results of the winner at the end.
}
game();
