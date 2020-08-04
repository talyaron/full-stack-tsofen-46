const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

let items=[
    {ID:'5',TOPIC:'good flower',URL:'https://gardenseedsmarket.com/images/watermarked/5/detailed/54/010516.jpg',PRICE:'5'},
    {ID:'2',TOPIC:'not bad flower',URL:'img/1.jpg',PRICE:5},
    {ID:'3',TOPIC:'very very good flower',URL:'img/2.jpg',PRICE:'5'},
    {ID:'4',TOPIC:'perfect flower',URL:'img/3.jpg',PRICE:'5'}
]


app.get('/api/items', (req, res) => {
    res.send(items)
})

app.put('/api/update/price', (req, res, next) => {
    const {id , val} = req.body;
    items.forEach(element => {
        if(element.ID==id){
            element.PRICE=val;
        }else{
            res.send(false)
        }
    });
    res.send(true)
})

app.put('/api/update/topic', (req, res, next) => {
    const {id , val} = req.body;
    items.forEach(element => {
        if(element.ID==id){
            element.TOPIC=val;
        }else{
            res.send(false)
        }
    });
    res.send(true)
})

app.put('/api/update/img', (req, res, next) => {
    const {id , val} = req.body;
    items.forEach(element => {
        if(element.ID==id){
            element.URL=val;
        }else{
            res.send(false)
        }
    });
    res.send(true)
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

app.post('/api/Additem',(req,res)=>{
    const {url,topic,price} = req.body;
    items.push({ID:Date.now(),TOPIC:topic,URL:url,PRICE:price})
    console.log(items.slice(-1).pop())
    res.send({success:true})
})


app.listen(3000, () => { console.log("App is Listening to 3000") })