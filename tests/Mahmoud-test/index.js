const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));



const content =[
{ photo: "https://content.thriveglobal.com/wp-content/uploads/2018/11/Flower.jpg?w=1550" ,Username: 'Mahmoud',Password:'1234' }

];


app.get('/menu', function (req, res) {
    console.log(content)
    res.send(content)
  })

app.post('/addlogin', (req, res) => {
  const { body } = req;
  console.log(body)
  const {img,name,price } = body;

  let result = false
  for (let item of menu){

    if (item.photo == img) result = true
  }
      if(result){
      }
      else{
        content.push( { photo:img,name:name } )
      
      }
    
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })






