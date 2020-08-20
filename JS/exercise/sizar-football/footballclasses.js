let jump=10;
let jump1=0;
class Player {
    constructor (PlayerId){
        this.Player=document.getElementById(PlayerId)
        const { left , top } =this.Player.getBoundingClientRect();
        this.left=left;
        this.top=top;
    }
    
    goUp(){
        this.top= this.top-jump-jump1 ;
        this.Player.style.top=`${this.top}px`;
    }
    goDown(){
        this.top= this.top+jump-jump1  ;
        this.Player.style.top=`${this.top}px`;
    }
    goLeft(){
        this.left=this.left-jump-jump1  ;
        this.Player.style.left=`${this.left}px`;
    }
    goRight(){
        
        this.left=this.left+jump-jump1  ;
        this.Player.style.left=`${this.left}px`;
    }

    set setLeft(left){
        this.left;
    }
    set setTop(top){
        this.left;
    }

}