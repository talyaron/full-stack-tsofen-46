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

    this.element.style.left=`${this.left-jump}px`;
    this.left=this.left-jump;
    
    
}
goLeft(){
    this.element.style.left=`${this.left+jump}px`;
    this.left=this.left+jump;
}


goUp(){
    this.element.style.top=`${this.top+jump}px`
    this.top=this.top+jump;

}
goDown(){
    this.element.style.top=`${this.top-jump}px`;
    this.top=this.top+jump;
}







}


