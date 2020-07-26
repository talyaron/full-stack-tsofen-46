

const elemen=new element("move")


document.addEventListener ('keyup' , (e) => {
    if(e.key=='ArrowUp')
        elemen.goUp()
    if(e.key=='ArrowDown')
        elemen.goDown()

    if(e.key=='ArrowRight')
        elemen.goRight()

    if(e.key=='ArrowLeft')
      elemen.goLeft()



})