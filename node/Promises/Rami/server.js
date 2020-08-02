const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

let items=[
    {ID:'1',TOPIC:'flower',URL:'img/1.jpg',PRICE:'5'}
]

app.get('/api/items', (req, res) => {
    res.send(items)
})

app.get('/api/students', (req, res) => {
    
    setTimeout(()=>{
        res.send(students)
    },2000)
    
})


app.listen(3000, () => { console.log("App is Listening to 3000") })