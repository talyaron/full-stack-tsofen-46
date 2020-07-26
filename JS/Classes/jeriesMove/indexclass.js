let jump=10;
class element {
    constructor(elementId) {
        this.element=document.getElementById(elementId)
        const {left,top}=this.element.getBoundingClientRect();
        this.left=left;
        this.top=top;
    }

    goUp(){
        this.top=this.top-jump;
        this.element.style.top=`${this.top}px`;
    }
    goRight(){
        this.left=this.left+jump;
        this.element.style.left=`${this.left-jump}px`;
    }
    goDown(){
        this.top=this.top+jump;
        this.element.style.top=`${this.top}px`;
    }
    goLeft(){
        this.left=this.left-jump;
        this.element.style.left=`${this.left}px`;
    }
}