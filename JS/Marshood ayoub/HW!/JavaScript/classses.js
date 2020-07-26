class Game{
    constructor(TopPos,LeftPos,PlayerElem,TargetElem,Scour)
    { 
        console.log("constactor Started..")
        this.top=TopPos;
        this.left=LeftPos;
        this.PlayerElem=PlayerElem;
        this.element=PlayerElem;
        this.TargetElem=TargetElem;
        this.Scour=Scour;
     }
   TargetPosition() // random
    {
        var TargetTop=x;
        var TargetLeft=y;
    }
    
    setNewPosition(Ntop,Nleft){

        this.top=Ntop;
        this.left=Nleft;
    }
     
    MovePlayer(TypeKey)
    {
        // here we moving the player after pressing any key
        // and call check tarketPosition
        // ArrowUP Down Left Rigth
        if(TypeKey==="ArrowUp"){
            var pointNum = parseInt(this.top);
              pointNum-=15;
              if(pointNum>=145){
              console.log(pointNum)
             pointNum=pointNum.toString()+'px';
             this.top= pointNum;
             this.PlayerElem.style.top=pointNum;
         }
         else{
            this.PlayerElem.style.top=this.top;
         }
         }
          if(TypeKey==="ArrowDown"){
             var pointNum = parseInt(this.top);
             pointNum+=20;
             if(pointNum<=730){
             console.log(pointNum + "testtt")
            pointNum=pointNum.toString()+'px';
            this.top= pointNum;
            console.log("this top 60 +"+ this.top)
            this.PlayerElem.style.top=pointNum;
            this.element.style.top=pointNum;

             }else{
                this.PlayerElem.style.top= this.top;
             }
 
         }
         if(TypeKey==='ArrowLeft'){
             var pointNum = parseInt(this.left);
             pointNum-=15;
             if(pointNum>=520){
             console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.left= pointNum;
            this.PlayerElem.style.left=pointNum;
             }else{
                this.PlayerElem.style.left= this.left;
             }
 
         
         }
         if(TypeKey==='ArrowRight'){
 
         var pointNum = parseInt(this.left);
             pointNum+=15;
             if(pointNum<1600){
              console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.left= pointNum;
            this.PlayerElem.style.left=pointNum;}
            else{
                this.PlayerElem.style.left=this.left;
 
            }
         
         }
         //W S A D
         if(TypeKey==="KeyW"){
            var pointNum = parseInt(this.top);
              pointNum-=15;
              if(pointNum>=145){
              console.log(pointNum)
             pointNum=pointNum.toString()+'px';
             this.top= pointNum;
             this.PlayerElem.style.top=pointNum;
         }
         else{
            this.PlayerElem.style.top=this.top;
         }
         }
          if(TypeKey==="KeyS"){
             var pointNum = parseInt(this.top);
             pointNum+=20;
             if(pointNum<=730){
             console.log(pointNum + "testtt")
            pointNum=pointNum.toString()+'px';
            this.top= pointNum;
            console.log("this top 60 +"+ this.top)
            this.PlayerElem.style.top=pointNum;
            this.element.style.top=pointNum;

             }else{
                this.PlayerElem.style.top= this.top;
             }
 
         }
         if(TypeKey==='KeyA'){
             var pointNum = parseInt(this.left);
             pointNum-=15;
             if(pointNum>=520){
             console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.left= pointNum;
            this.PlayerElem.style.left=pointNum;
             }else{
                this.PlayerElem.style.left= this.left;
             }
 
         
         }
         if(TypeKey==='KeyD'){
 
         var pointNum = parseInt(this.left);
             pointNum+=15;
             if(pointNum<1600){
              console.log(pointNum)
            pointNum=pointNum.toString()+"px";
            this.left= pointNum;
            this.PlayerElem.style.left=pointNum;}
            else{
                this.PlayerElem.style.left=this.left;
 
            }
         
         }
       
     

    }


    
}

class Player{

    constructor(PlayerElement,PlayerName,PlayerScore)
    {
        this.PlayerElement=PlayerElement;
        this.PlayerName=PlayerName;
        this.PlayerScore=PlayerScore;
    }
 
 
 }
 class Target{

    constructor(TargetElem,Player1Position,Player2Position,PlayerClass1,PlayerClass2)
    {
        this.TargetElem=TargetElem;
        this.Player1Position=Player1Position;
        this.Player2Position=Player2Position;
        this.PlayerClass1=PlayerClass1;
        this.PlayerClass2=PlayerClass2;
    }

      setNewScour1(){
         this.PlayerClass1.Scour=NewS;
        // console.log("Pl 1 new sc"+this.PlayerClass1.Scour )

     }
      setNewScour2(){
        this.PlayerClass2.Scour=NewS;
       // console.log("Pl 2 new sc"+this.PlayerClass2.Scour )
    }
    
    CheckTargetPosition(Player1Position,Player2Position,TargetElem)
    {
        
      
//console.log("PT "+Player1Position.style.top + TargetElem.style.top)
//console.log("PL "+Player1Position.style.left + TargetElem.style.left )
// PT+T <100 PL+L <90 ABS  parseInt(this.left);

  var x1= Math.abs( parseInt(Player1Position.style.top)- parseInt(TargetElem.style.top));
  var y1= Math.abs(parseInt(Player1Position.style.left)- parseInt(TargetElem.style.left));
  var x2= Math.abs( parseInt(Player2Position.style.top)- parseInt(TargetElem.style.top));
  var y2= Math.abs(parseInt(Player2Position.style.left)- parseInt(TargetElem.style.left));
    //console.log("X1+ Y1" +x1+"  "+y1)
        if(x1<100&& y1<90)
        {
             var TLeft = Math.floor(Math.random() * (1595 - 520) + 520);
             var TTop = Math.floor(Math.random() * (705 - 150) + 150);
             this.TargetElem.style.left=TLeft.toString()+"px";
             this.TargetElem.style.top=TTop.toString()+"px";
             console.log("player 1 gool")
             var  S=parseInt(document.getElementById("FistPlayerscore").innerHTML)+1;
             document.getElementById("FistPlayerscore").innerHTML=S;
             document.getElementById("StadiumAr").style.borderColor = getRandomColor();
             GetTargetSound.play();
             

        }else if (x2<100&& y2<90)
        {   // adding point for player 2 
            var TLeft = Math.floor(Math.random() * (1595 - 520) + 520);
            var TTop = Math.floor(Math.random() * (705 - 150) + 150);
            this.TargetElem.style.left=TLeft.toString()+"px";
            this.TargetElem.style.top=TTop.toString()+"px";

           //this.PlayerClass2.setNewScour2();
           var  S=parseInt(document.getElementById("SecondPlayerscore").innerHTML)+1;
           document.getElementById("SecondPlayerscore").innerHTML=S;
           console.log("player 2 gool");
           document.getElementById("StadiumAr").style.borderColor = getRandomColor();
           GetTargetSound.play();
        }
    
    }

 }