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

app.get('/Menu', function (req, res) {
  
  res.send(menu)
  
})

app.post('/update', (req, res) => {
  const { body } = req;
  const { itemID } = body;
  console.log(body);
  
  const index = menu.findIndex(item => item.ID === itemID);

        if (index > -1) {
          //update to zero
          menu[index].price = 0;
        }

})

//get Hmburger;
function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
};


app.listen(3000, () => { console.log('App listen on port 3000') })