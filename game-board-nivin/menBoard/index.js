const ball = document.getElementById("ball");
const winnerPopup = document.getElementById("winner-popup");
let gameOver = false;

const randomizeBall = (ball) => {
  let left = Math.random() * (rightBorder - leftBorder) + leftBorder;
  let top = Math.random() * (bottomBorder - topBorder) + topBorder;
  console.log(left, top);
  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;
};
const resetGame = () => {
  winnerPopup.style.display = "none";
  randomizeBall(ball);
  gameOver = false;
};

const playerWin = (playerName) => {
  const playerWinText = document.getElementById("player-test");
  playerWinText.innerHTML = `${playerName} Won!`;
  winnerPopup.style.display = "flex";
  gameOver = true;
};
randomizeBall(ball);
const player1 = new element("player1");

document.addEventListener("keyup", (e) => {
  if (gameOver) return;
  if (e.key == "ArrowUp") player1.goUp();
  if (e.key == "ArrowDown") player1.goDown();

  if (e.key == "ArrowRight") player1.goRight();

  if (e.key == "ArrowLeft") player1.goLeft();
  const hitBall = collisionDetector(ball, player1);

  if (hitBall) {
    playerWin("Player1");
  }
});

const player2 = new element("player2");

document.addEventListener("keyup", (e) => {
  if (gameOver) return;
  if (e.key == "w") player2.goUp();
  if (e.key == "s") player2.goDown();

  if (e.key == "d") player2.goRight();

  if (e.key == "a") player2.goLeft();
  const hitBall = collisionDetector(ball, player2);

  if (hitBall) {
    playerWin("Player2");
  }
});

const collisionDetector = (ball, player) => {
  const {
    top: ballTop,
    left: ballLeft,
    width: ballWidth,
    height: ballHeight,
  } = ball.getBoundingClientRect();
  const {
    top: playerTop,
    left: playerLeft,
    width: playerWidth,
    height: playerHeight,
  } = player;

  return (
    ballLeft < playerLeft + playerWidth * 0.5 &&
    ballLeft + ballWidth * 0.5 > playerLeft &&
    ballTop < playerTop + playerHeight * 0.5 &&
    ballTop + ballHeight * 0.5 > playerTop
  );
};
