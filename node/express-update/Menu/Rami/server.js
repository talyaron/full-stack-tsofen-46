const express = require('express')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

let menu=[
    { name: 'Hamburger', price: 25, ID: uid() },
      { name: 'Pizza', price: 15, ID: uid() },
      { name: 'Maclobe', price: 40, ID: uid() },
      { name: 'Rvioly', price: 15, ID: uid() },
      { name: 'Cola', price: 15, ID: uid() },
      { name: 'Ice lemonande', price: 15, ID: uid() },
]

function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  }

  app.get('/getmenu',function(req,res){
    res.send(menu);
});


app.put('/updateprice', (req, res, next) => {
    const {id , val} = req.body;
    menu.forEach(element => {
        if(element.ID==id){
            element.price=val;
        }
    });

    res.send('Got a PUT request at user')
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })