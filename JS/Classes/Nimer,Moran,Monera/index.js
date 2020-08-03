const ele = new element("button")
const ele1 = new element("button1")




document.addEventListener("keyup",(e)=>{
    if(e.key=="ArrowLeft")
         ele.goRight();
    if(e.key=="ArrowRight")
         ele.goLeft();
    if(e.key=="ArrowDown")
        ele.goUp();
    if(e.key=="ArrowUp")
         ele.goDown();
     console.log(e)
    
})



document.addEventListener("keyup",(e)=>{
     if(e.key=="a")
          ele1.goRight();
     if(e.key=="d")
          ele1.goLeft();
     if(e.key=="s")
         ele1.goUp();
     if(e.key=="w")
          ele1.goDown();
      console.log(e)
     
 })
 
 








