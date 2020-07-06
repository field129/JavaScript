/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

// *** CONTROLLING WHAT HAPPENS WHEN USER ROLLS DICE

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result updating the dice DOM with the corresponding png file
    document.getElementById("dice1").style.display = "block";
    document.getElementById("dice2").style.display = "block";
    document.getElementById("dice1").src = "../dice-" + dice1 + ".png";
    document.getElementById("dice2").src = "../dice-" + dice2 + ".png";

//     // 3. a) Update the round score ONLY IF the rolled number IS NOT a 1
if (dice1 !== 1 && dice2 !==1) {
    // add score
    roundScore += dice1 + dice2; // += is the same as roundScore = roundScore + dice; += adds value to a variable
    document.querySelector(
      "#current-" + activePlayer
    ).textContent = roundScore;
    // if the active player is 0 then current0 will get the textContent of the updated score or roundScore and vice versa
  } else {
    nextPlayer();
  }

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    //   player inputting target score
    var input = document.querySelector(".target-score").value;
    var winningScore = input;
    //   undefined, 0, null or empty are  COERCED to false
    // everything else = true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
  }

  // check if player won the game
  if (scores[activePlayer] >= input) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!!";
    document.querySelector("dice1").style.display = "none";
    document.querySelector("dice2").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    gamePlaying = false;
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  roundScore = 0;

  // resetting the score in the UI after rolling 1
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // *** toggling classess to see whos turn it is
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // removing the dice after player rolls 1
  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

// ***SETTING USER SCORES AND DICE DISPLAY TO ZERO WHEN FIRST STARTING GAME

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}