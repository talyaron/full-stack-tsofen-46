const darkButton = document.getElementById('navigatorDark')
const lightButton = document.getElementById('navigatorLight')
const randomColorButton = document.getElementById('navigatorRandomColor')
const body = document.getElementById('bodyyyy')
let total = 0;
const salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')

const button11 = document.getElementById('btn11')
const button22 = document.getElementById('btn22')
const button33 = document.getElementById('btn33')



button11.addEventListener('click', e => {
  console.log(e);
  if (!(total < 150)){
  total = total - 150;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
  }
})

button22.addEventListener('click', e => {
  console.log(e);
  if (!(total < 100)){
    total = total - 100;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
  }
})


button33.addEventListener('click', e => {
  console.log(e);
  if (!(total < 300)){
  total = total - 300;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
  }
})



button1.addEventListener('click', e => {
  console.log(e);
  total = total + 150;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
})

button2.addEventListener('click', e => {
  console.log(e);
  total = total + 100;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
})

button3.addEventListener('click', e => {
  console.log(e);
  total = total + 300;
  salesTotal = document.getElementById('totalbyAdd').innerHTML = `${total}$`
})





function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






darkButton.addEventListener('click', e => {
  console.log(e);
  body.style.backgroundColor = "darkgrey";

})

lightButton.addEventListener('click', e => {
  console.log(e);
  body.style.backgroundColor = "white";

})

randomColorButton.addEventListener('click', e => {
  console.log(e);
  body.style.backgroundColor = getRandomColor();

})


