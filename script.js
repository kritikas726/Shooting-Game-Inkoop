var player1Health = 100;
var player2Health = 100;

let player1Score = 0;
let player2Score = 0;

let roundCounter = 1;

function shoot() {
  console.log(roundCounter);

  shootPower1 = Math.floor(Math.random() * 6);
  document.getElementById("fire-player1").innerText = shootPower1;
  console.log("Player 1 fire:" + shootPower1);
  shootPower2 = Math.floor(Math.random() * 6);
  document.getElementById("fire-player2").innerText = shootPower2;
  console.log("Player 2 fire:" + shootPower2);

  player1Health = player1Health - shootPower2;
  player2Health = player2Health - shootPower1;

  console.log("Player 1 health:" + player1Health);
  console.log("Player 2 health:" + player2Health);

  if (shootPower1 > shootPower2) {
    player1Score++;
    document.getElementById("player1-score").innerText = player1Score;
    console.log("Player 1 wins");
  } else if (shootPower1 < shootPower2) {
    player2Score++;
    document.getElementById("player2-score").innerText = player2Score;
    console.log("Player 2 wins");
  } else {
    console.log("Match draw");
  }
  roundCounter++;

  if (player1Score == 3) {
    document.getElementById("result").innerText = "Player 1 wins!!!";
    gameOver();
    console.log("Player 1 wins");
  } else if (player2Score == 3) {
    document.getElementById("result").innerText = "Player 2 wins!!!";
    console.log("Player 2 wins");

    gameOver();
  } else if (roundCounter > 5) {
    if (player1Score > player2Score) {
      document.getElementById("result").innerText = "Player 1 wins!!!";
      console.log("Player 1 wins");
    } else if (player1Score < player2Score) {
      document.getElementById("result").innerText = "Player 2 wins!!!";
      console.log("Player 2 wins");
    } else {
      document.getElementById("result").innerText = "Match draw";
      console.log("Match draw");
    }
    gameOver();
  }
  function gameOver() {
    document.getElementById("shoot").style.backgroundColor = "grey";
    document.getElementById("shoot").innerText = "Game Over";
    document.getElementById("shoot").disabled = true;
  }
}
