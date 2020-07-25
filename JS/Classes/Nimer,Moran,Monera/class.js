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







}


