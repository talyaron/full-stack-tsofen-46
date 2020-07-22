class ElemMove{
    
    constructor(top, right,bottom, left,elem)
    {
        this.top=top;
        this.right=right;
        this.bottom=bottom;
        this.left=left;
        this.element=elem;
    }
    get CurrentSizeX(){
        return document.getElementById('boxid').style.top;
    }
    set CurrentSizeXSet(NewPositionX)
    {
        this.NewPositionX='70px';
    }

    NewPosition(TypeKey)
    { 
        if(TypeKey==="ArrowUp"){
           var pointNum = parseInt(this.top);
             pointNum-=100;
             console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.top= pointNum;
            element.style.top=pointNum;
        }
         if(TypeKey==='ArrowDown'){
             
            var pointNum = parseInt(this.top);
            pointNum+=100;
            if(pointNum!=1108){
            console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.top= pointNum;
           element.style.top=pointNum;
            }
        }
        if(TypeKey==='ArrowLeft'){
            var pointNum = parseInt(this.left);
            pointNum-=100;
            console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.left= pointNum;
           element.style.left=pointNum;

        
        }
        if(TypeKey==='ArrowRight'){

        var pointNum = parseInt(this.left);
            pointNum+=100;
            console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.left= pointNum;
           element.style.left=pointNum;
        }
      
    }

}