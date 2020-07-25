const ele = new element("button")




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








