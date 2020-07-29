const express = require('express')
const app = express()

app.use(express.static('public'));

const menu = [
  { name: 'Hamburger', price: 25, ID: uid() },
  { name: 'Pizza', price: 15, ID: uid() },
  { name: 'Maclobe', price: 40, ID: uid() },
  { name: 'Rvioly', price: 15, ID: uid() },
  { name: 'Cola', price: 15, ID: uid() },
  { name: 'Ice lemonande', price: 15, ID: uid() },
]

app.get('/jokes', function (req, res) {
  
  res.send({product:menu})
})

//get Hmburger;
function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
};
function renderMenu(menu) {
  try {
    let menuStr = '';
    menu.forEach(item => {
      menuStr += `<p onclick='updatePrice("${item.ID}")'>${item.name}, Price:${item.price} NIS</p>`
    })
    document.getElementById('root').innerHTML = menuStr;
  } catch (err) {
    console.error(err);
  }
}

renderMenu(menu);



function updatePrice(itemID) {
  try {
    console.log(itemID);
    //find in array;

    const index = menu.findIndex(item => item.ID === itemID);

    if (index > -1) {
      //update to zero
      menu[index].price = 0;

    }

    renderMenu(menu);
  } catch (err) {
    console.error(err)
  }
}


//RERST api
app.get('/students', function (req, res) {
  console.log(students)
  res.send(students)
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})





const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })