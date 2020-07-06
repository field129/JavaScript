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

// *** CONTROLLING WHAT HAPPENS WHEN USER ROLLS DICE

document.querySelector(".btn-roll").addEventListener("click", function () {
  //                                                 (event type, function that will be called when event happens)
  // this is known as an anonymous function where it is not named, so it cannot be reused. then write function code within {}

  if (gamePlaying) {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    // updating the dice DOM with the corresponding png file

    // 3. a) Update the round score ONLY IF the rolled number IS NOT a 1
    //      b) display the round score
    if (dice !== 1) {
      // add score
      roundScore += dice; // += is the same as roundScore = roundScore + dice; += adds value to a variable
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
      // if the active player is 0 then current0 will get the textContent of the updated score or roundScore and vice versa
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER!!";
      document.querySelector(".dice").style.display = "none";
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
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //  if active player = 0 then activePlayer should be 1, else activePlayer should be 0
  roundScore = 0;
  // resetting the score in the UI after rolling 1
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //*** * adding and removing classess to see whos turn it is
  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  // *** toggling classess to see whos turn it is
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // removing the dice after player rolls 1
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);
// calling the init function (click,init()) instead of above would call the function asap but we only want it called when clicked

// ***SETTING USER SCORES AND DICE DISPLAY TO ZERO WHEN FIRST STARTING GAME

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  // using query.Selector to change CSS of element - use .style then the property you wanty to chnge and then the value you want to attribute
  // this means that when we start the game we don't see the random dice

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

  // getEleementById you don't have to use CSS so no .# just the idname
}

//  a call back function is a function that is not called by us but by another function
// a function that we pass into another function as an argument and this function, in this case the vent listerner method will call this function for us

// document gives us access to the DOM
// querySelector lets us select things the same way as we would in CSS
// to change the text we use .textContent
// this now updates the hardcoded text 11 with the value of the dice.

// ****** changing html *****

// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//   in order to change the html you have to use .innerHTML= "" and not .textContent it must be a string or in speach marks

// The Math.floor() function simply removes the decimal part of the number
// The Math.random() function returns a number between 0 and 1
//     In Javascript Code runs inside  out, Math.random() is processed first (or evaluated), because it is inside the inner parenthesis.
//     Math.floor( Math.random() * 6 )
//     Each time this code runs you will get a random Integer (Between 0 -5).
//     Now we need a number between 1 and 6  so we will add a (+1) to get our random dice.

// var x = document.querySelector("#score-0").textContent;
