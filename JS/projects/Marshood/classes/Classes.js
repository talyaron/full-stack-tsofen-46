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
             if(pointNum>0){
             console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.top= pointNum;
            element.style.top=pointNum;
        }
        else{
            element.style.top=this.top;

        }
        }
         if(TypeKey==='ArrowDown'){
             
            var pointNum = parseInt(this.top);
            pointNum+=100;
            if(pointNum!=1008){
            console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.top= pointNum;
           element.style.top=pointNum;
            }else{
                element.style.top= this.top;
            }

        }
        if(TypeKey==='ArrowLeft'){
            var pointNum = parseInt(this.left);
            pointNum-=100;
            if(pointNum>-50){
            console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.left= pointNum;
           element.style.left=pointNum;
            }else{
                element.style.left=this.left;
            }

        
        }
        if(TypeKey==='ArrowRight'){

        var pointNum = parseInt(this.left);
            pointNum+=100;
            if(pointNum<=1808){
             console.log(pointNum)
           pointNum=pointNum.toString()+"px";
           this.left= pointNum;
           element.style.left=pointNum;}
           else{
            element.style.left=this.left;

           }
        
        }
      
    }

}
