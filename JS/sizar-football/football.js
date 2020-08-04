const movingButton=new Player("player1");
const movingButton1=new Player('player2');
const ball=document.getElementById('ball');
const player1=document.getElementById("player1")
const player2=document.getElementById("player2")
const score=document.getElementById('score');
const score1=document.getElementById('score1');
const winner=document.getElementById('winner')
let scoreTotal=0;
let scoreTotal1=0;

function randomNumber(number){
    const numberToReturn=Math.random()*number;
    const sumNUmber=number%20;
    return numberToReturn-sumNUmber;
}

ball.style.top=`${randomNumber(640)}px`;                 
ball.style.left=`${randomNumber(420)}px`;

player1.style.left=`${40}px`




document.addEventListener('keyup', (e) => {
    console.log(e.key)
    if(e.key=="ArrowUp") {
        movingButton.goUp();
        
    }
    if(e.key=='ArrowDown' ){
        movingButton.goDown();
        
       
    }
    if(e.key=='ArrowLeft' ){
        movingButton.goLeft();
        
      
    }
    if(e.key=='ArrowRight'){
        movingButton.goRight();
        
        
    }

    if(e.key=="w"){
        movingButton1.goUp();
        
    }
    if(e.key=='s'){
        movingButton1.goDown();
    }
    if(e.key=='a'){
        movingButton1.goLeft();
    }
    if(e.key=='d'){
        movingButton1.goRight();
    }

    if(movingButton.top-ball.offsetTop<=10 && movingButton.top-ball.offsetTop>=-10
     && movingButton.left-ball.offsetLeft <=10 && movingButton.left-ball.offsetLeft >= -10){ 
        ball.style.top=`${randomNumber(840)}px`;               
        ball.style.left=`${randomNumber(620)}px`;
        scoreTotal=scoreTotal+1;
        score.innerText=scoreTotal;
        winner.innerText='Player 1 win'
        
     }
     if(movingButton1.top-ball.offsetTop<=10 && movingButton1.top-ball.offsetTop>=-10
        && movingButton1.left-ball.offsetLeft <=10 && movingButton1.left-ball.offsetLeft >= -10){ 
           ball.style.top=`${randomNumber(840)}px`;               
           ball.style.left=`${randomNumber(620)}px`;

           scoreTotal1=scoreTotal1+1;
           score1.innerText=scoreTotal1;
           winner.innerText='Player 2 win'
        }
   

})