const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

let items=[
    {ID:'5',TOPIC:'flower',URL:'https://gardenseedsmarket.com/images/watermarked/5/detailed/54/010516.jpg',PRICE:'5'},
    {ID:'2',TOPIC:'flower',URL:'img/1.jpg',PRICE:'5'},
    {ID:'3',TOPIC:'flower',URL:'img/1.jpg',PRICE:'5'},
    {ID:'4',TOPIC:'flower',URL:'img/1.jpg',PRICE:'5'}
]

app.get('/api/items', (req, res) => {
    res.send(items)
})

app.get('/api/students', (req, res) => {
    
    setTimeout(()=>{
        res.send(students)
    },2000)
    
})

app.delete('/api/Deleteitems',(req,res)=>{
    const {id} = req.body;
    var found = 0;
    items.forEach((elem,index) => {
        if(elem.ID==id)
        {
            items.splice(index, 1)
            found = 1;
        }
    });
    if(found){
        res.send(true);
        console.log("im returning true")
    }else{
        res.send(false);
    }
})


app.listen(3000, () => { console.log("App is Listening to 3000") })