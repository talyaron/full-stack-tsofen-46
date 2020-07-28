let jump=50;
class element{
    constructor(elementID){
        
       
       this.element= document.getElementById(elementID);
       const {left, top,right,down} = this.element.getBoundingClientRect();
       console.log(left, top);
       this.left = left;
       this.top = top;
       this.down=down;
       this.right=right;
    }
    
goRight(){
    this.left=this.left-jump;
    this.element.style.left=`${this.left-jump}px`;
}
goLeft(){
    this.left=this.left+jump;
    this.element.style.left=`${this.left+jump}px`;
}
goUp(){
    this.top=this.top+jump;
    this.element.style.top=`${this.top+jump}px`
}
goDown(){
    this.top=this.top-jump;
    this.element.style.top=`${this.top+jump}px`;
    
}


function startTimer(duration) {
    var timer = duration,
        minutes, seconds;
    countdown = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('countdown').innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            document.getElementById('gameOverScreen').style['z-index'] = 3;
            gameOver = true;
            clearInterval(countdown);
            if (homeScore > awayScore)
                updateStatus('GAME OVER!<br>Liverpool Won!');
            else if (awayScore > homeScore)
                updateStatus('GAME OVER!<br>Juventus Won!');
            else
                updateStatus('GAME OVER!<br>Draw!')
        }
    }, 1000);
}







}


