function generateComputerMove() {
  var randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function checkWinner(move1, name1, move2, name2, stats) {
  if (move1 == move2) {
    console.log("Result is a draw!");
    console.log(stats);
  } else if (move2 == "rock") {
    if (move1 == "paper") {
      console.log(name1 + " " + "wins");
      console.log(stats);
    } else if (move1 === "scissors") {
      console.log(name2 + "wins");
      console.log(stats);
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else if (move2 == "paper") {
    if (move1 == "scissors") {
      console.log(name1 + " " + "wins");
      console.log(stats);
    } else if (move1 === "rock") {
      console.log(name2 + "wins");
      console.log(stats);
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else if (move2 == "scissors") {
    if (move1 == "rock") {
      console.log(name1 + " " + "wins");
      console.log(stats);
    } else if (move1 === "paper") {
      console.log(name2 + "wins");
      console.log(stats);
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else {
    console.log(name2 + "move is invalid");
  }
}

var playerName;
var computerMove;

function playGame(playerMove) {
  computerMove = generateComputerMove();
  var computerName = "CPU ";
  var input = document.getElementById("name");
  playerName = input.value;
  var displayScore = displayInfo();

  function displayInfo() {
    cmove = computerMove;
    pmove = playerMove;
    return {
      Player_move: pmove,
      Computer_move: cmove
    };
  }

  checkWinner(playerMove, playerName, computerMove, computerName, displayScore);
}
