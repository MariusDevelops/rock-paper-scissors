// global variables
const words = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameWinner = "";

// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
  return words[Math.floor(Math.random() * words.length)];
}

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// -------------> code here

// Use prompt() to get input from the user.

// -------------> code here

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
function playRound(playerSelection, computerSelection) {
  playerSelection = "rock";
  computerSelection = computerPlay();
  console.log("player: " + playerSelection, ", computer: " + computerSelection);

  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "Player Wins!" + " total: " + playerScore + " times";
  } else {
    computerScore++;
    return "Computer Wins!" + " total: " + computerScore + " times";
  }
}

// returns game winner who won most games.
function result() {
  if (playerScore > computerScore) {
    return (gameWinner = "Game Winner: HUMAN!");
  } else if (playerScore < computerScore) {
    return (gameWinner = "Game Winner: COMPUTER!");
  } else if ((playerScore = computerScore)) {
    return (gameWinner = "Game Winner: NO ONE!");
  }
}

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:
// At this point you should be using console.log() to display the results of each round and the winner at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    roundsPlayed++;
    console.log("round: " + roundsPlayed);
    console.log(playRound()); // display the results of each round.
  }
  console.log(result()); // display the results of the winner at the end.
}
game();
