const elem=document.getElementsByClassName("box");
const element=document.getElementById("boxid");
//elemid.style.top
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

 MoveElem= new ElemMove();
 //console.log(MoveElem.CurrentSizeX());
 var rect = element.getBoundingClientRect();
 console.log(rect.top, rect.right, rect.bottom, rect.left);
 MoveElem= new ElemMove(rect.top, rect.right, rect.bottom, rect.left,element);

 document.addEventListener('keyup', (e) => {
    MoveElem.NewPosition(e.code);
    element.style.background=(getRandomColor());
    //console.log(e.code);
  });