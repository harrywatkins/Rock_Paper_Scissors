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

function checkWinner(move1, name1, move2, name2) {
  if (move1 == move2) {
    console.log("Result is a draw!");
  } else if (move2 == "rock") {
    if (move1 == "paper") {
      console.log(name1 + " " + "wins");
    } else if (move1 === "scissors") {
      console.log(name2 + "wins");
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else if (move2 == "paper") {
    if (move1 == "scissors") {
      console.log(name1 + " " + "wins");
    } else if (move1 === "rock") {
      console.log(name2 + "wins");
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else if (move2 == "scissors") {
    if (move1 == "rock") {
      console.log(name1 + " " + "wins");
    } else if (move1 === "paper") {
      console.log(name2 + "wins");
    } else {
      console.log(name1 + " " + "move is invalid");
    }
  } else {
    console.log(name2 + "move is invalid");
  }
}

var playerName;

function playGame(playerMove) {
  var computerMove = generateComputerMove();
  var computerName = "CPU ";
  var input = document.getElementById("name");
  playerName = input.value;
  checkWinner(playerMove, playerName, computerMove, computerName);
}
