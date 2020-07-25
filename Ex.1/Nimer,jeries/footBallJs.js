const field = document.getElementById("footBallField");
const mainCircle = document.getElementById("mainCircle");
const button = document.getElementById("submitButton");
const popUp = document.getElementById("popUp");
const winnerPopUp1 = document.getElementById("winnerpopUp1");
const winnerPopUp2 = document.getElementById("winnerpopUp2");
const shoppingBag = document.getElementById("shoppingBag");
const ball = document.getElementById("ball");
const maleplayer1 = document.getElementById("malePlayer1")
const maleplayer2 = document.getElementById("malePlayer2")
const femaleplayer1 = document.getElementById("femalePlayer1")
const femaleplayer2 = document.getElementById("femalePlayer2")
const malePlayer1Moving = new player("malePlayer1");
const malePlayer2Moving = new player("malePlayer2");
const femalePlayer1Moving = new player("femalePlayer1");
const femalePlayer2Moving = new player("femalePlayer2");
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
let score1 = 0;
let score2 = 0;


function randomNumber(number) {
  const numberToReturn = Math.random() * number;
  const sumNumber = numberToReturn % 20;
  return numberToReturn - sumNumber;
}



function show(ele) {
  ele.style.display = "block";
}

function hide(ele) {
  ele.style.display = "none";
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e)
  const form = e.target;
  const gender = form[0].value
  const score = form[1].value


  if (gender === "female") {
    score1 = 0;
    score2 = 0;
    player1Score.innerText = score1;
    player2Score.innerText = score2;
    field.style.backgroundColor = "pink";
    mainCircle.style.backgroundColor = "pink";
    show(shoppingBag);
    hide(ball);
    shoppingBag.style.top = `${randomNumber(840)}px`
    shoppingBag.style.left = `${randomNumber(620)}px`
    show(femaleplayer2);
    show(femaleplayer1);
    femaleplayer1.style.top = `${0}px`;
    femaleplayer1.style.left = `${0}px`;
    femaleplayer2.style.top = `${840}px`;
    femaleplayer2.style.left = `${600}px`;
    femalePlayer1Moving.setLeft=0;
    femalePlayer1Moving.setTop=0;
    femalePlayer2Moving.setLeft=600;
    femalePlayer2Moving.setTop=840;

    hide(ball);
    hide(malePlayer1);
    hide(malePlayer2);
    hide(winnerpopUp1);
    hide(winnerPopUp2);
    document.addEventListener("keyup", (e) => {
      if (e.key == "ArrowLeft")
        femalePlayer1Moving.goRight();
      if (e.key == "ArrowRight")
        femalePlayer1Moving.goLeft();
      if (e.key == "ArrowDown")
        femalePlayer1Moving.goUp();
      if (e.key == "ArrowUp")
        femalePlayer1Moving.goDown();
      console.log(e)


      if (e.key == "a")
        femalePlayer2Moving.goRight();
      if (e.key == "d")
        femalePlayer2Moving.goLeft();
      if (e.key == "s")
        femalePlayer2Moving.goUp();
      if (e.key == "w")
        femalePlayer2Moving.goDown();


      if (femalePlayer1Moving.top == shoppingBag.offsetTop && femalePlayer1Moving.left == shoppingBag.offsetLeft) {

        shoppingBag.style.top = `${randomNumber(840)}px`;
        shoppingBag.style.left = `${randomNumber(620)}px`;
        score1 = score1 + 1;
        player1Score.innerText = score1;
        if(score1==score){
          show(winnerpopUp1)
          hide(shoppingBag)
          hide(femaleplayer1)
          hide(femaleplayer2)
        }
      }
      if (femalePlayer2Moving.top == shoppingBag.offsetTop && femalePlayer2Moving.left == shoppingBag.offsetLeft) {

        shoppingBag.style.top = `${randomNumber(840)}px`;
        shoppingBag.style.left = `${randomNumber(620)}px`;
        score2 = score2 + 1;
        player2Score.innerText = score2;
        if(score2==score){
          show(winnerPopUp2)
          hide(shoppingBag)
          hide(femaleplayer1)
          hide(femaleplayer2)
        }

      }
    })
  }
  else {
    score1 = 0;
    score2 = 0;
    player1Score.innerText = score1;
    player2Score.innerText = score2;
    field.style.backgroundColor = "green";
    mainCircle.style.backgroundColor = "green";
    show(ball);
    ball.style.top = `${randomNumber(840)}px`
    ball.style.left = `${randomNumber(620)}px`
    show(maleplayer2);
    show(maleplayer1);
    maleplayer1.style.top = `${0}px`;
    maleplayer1.style.left = `${0}px`;
    maleplayer2.style.top = `${840}px`;
    maleplayer2.style.left = `${600}px`;
  
    malePlayer1Moving.setLeft=0;
    malePlayer1Moving.setTop=0;
    malePlayer2Moving.setLeft=600;
    malePlayer2Moving.setTop=840;


    hide(shoppingBag);
    hide(femalePlayer1);
    hide(femalePlayer2);
    hide(winnerpopUp1);
    hide(winnerPopUp2);

    document.addEventListener("keyup", (e) => {

      if (e.key == "ArrowLeft")
        malePlayer1Moving.goRight();
      if (e.key == "ArrowRight")
        malePlayer1Moving.goLeft();
      if (e.key == "ArrowDown")
        malePlayer1Moving.goUp();
      if (e.key == "ArrowUp")
        malePlayer1Moving.goDown();
      console.log(e)


      if (e.key == "a")
        malePlayer2Moving.goRight();
      if (e.key == "d")
        malePlayer2Moving.goLeft();
      if (e.key == "s")
        malePlayer2Moving.goUp();
      if (e.key == "w")
        malePlayer2Moving.goDown();

      if (malePlayer1Moving.top == ball.offsetTop && malePlayer1Moving.left == ball.offsetLeft) {

        ball.style.top = `${randomNumber(840)}px`;
        ball.style.left = `${randomNumber(620)}px`;



        score1 = score1 + 1;
        player1Score.innerText = score1;
        if(score1==score){
          show(winnerpopUp1)
          hide(ball)
          hide(maleplayer1)
          hide(maleplayer2)
        }

      }
      if (malePlayer2Moving.top == ball.offsetTop && malePlayer2Moving.left == ball.offsetLeft) {

        ball.style.top = `${randomNumber(840)}px`;
        ball.style.left = `${randomNumber(620)}px`;



        score2 = score2 + 1;
        player2Score.innerText = score2;
        if(score2==score){
          show(winnerPopUp2)
          hide(ball)
          hide(maleplayer1)
          hide(maleplayer2)
        }
      }

    })

  }


  show(popUp)
  setTimeout(function () {
    hide(popUp);
  }, 2200);



}






