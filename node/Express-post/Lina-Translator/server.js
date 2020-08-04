const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))




const words = [
    {ar: 'marhaba', he:'shalom'},
    {ar: 'bab', he:'delet'},
    {ar: 'zahra', he:'perah'}
  ];


  app.post('/wordsDB', (req, res) => {
    const { body } = req;
    //const {arabic,hebrew} = body;
    const {arabic} = body;
    console.log(arabic);
    //console.log(hebrew);

    let index = words.findIndex(elm=>elm.ar == arabic);
    if (index != -1) 
    {
        console.log('found')
        res.send({existWord:true, he: words[index].he});
    }
    else {
        console.log('not found')
        res.send({existWord:false, he: 'word not found'});
      //words.push({ar:arabic, he: hebrew});
    }
})


app.listen(3004, () => { console.log("App is Listening to 3000")})




