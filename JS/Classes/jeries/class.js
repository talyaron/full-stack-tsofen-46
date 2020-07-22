class button11{

    constructor(element){
        this.element=element;
    }

    goUp(){
        var currPaddingTop = window.getComputedStyle(element, null).getPropertyValue('margin-top')
        var y = parseInt(currPaddingTop,10) - 250
        if(y<0)
         y=0
        this.element.style.marginTop=`${y}px`
    }
    goDown(){
      
        var currPaddingTop = window.getComputedStyle(element, null).getPropertyValue('margin-top')
        var y = parseInt(currPaddingTop,10) + 250
        if(y<0)
         y=0
        this.element.style.marginTop=`${y}px`
    }
    goLeft(){
        var currPaddingLeft = window.getComputedStyle(element, null).getPropertyValue('margin-left')
        var y = parseInt(currPaddingLeft,10) - 250
        if(y<0)
         y=0
        element.style.marginLeft=`${y}px`
    }
    goRight(){
        var currPaddingLeft = window.getComputedStyle(element, null).getPropertyValue('margin-left')
        var y = parseInt(currPaddingLeft,10) + 250
        if(y<0)
         y=0
        element.style.marginLeft=`${y}px`
    }

}