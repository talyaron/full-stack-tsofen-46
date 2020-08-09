const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://rami30080:mxzmxz123@cluster0.halwb.mongodb.net/Rami2";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('Rami', {
    ID: Number,
    TOPIC: String,
    URL: String,
    PRICE: Number
});




let items=[
    {ID:'5',TOPIC:'good flower',URL:'https://gardenseedsmarket.com/images/watermarked/5/detailed/54/010516.jpg',PRICE:'5'},
    {ID:'2',TOPIC:'not bad flower',URL:'img/1.jpg',PRICE:5},
    {ID:'3',TOPIC:'very very good flower',URL:'img/2.jpg',PRICE:'5'},
    {ID:'4',TOPIC:'perfect flower',URL:'img/3.jpg',PRICE:'5'}
]

app.get('/api/items', (req, res) => {
    User.find().then(docs=>{res.send(docs)})
})

app.put('/api/update/price', (req, res, next) => {
    const {id , val} = req.body;
    User.updateOne({ID: id} ,{ $set: { PRICE: val } },).then((result) => {
        if(result.n){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    }
    
    );
    
})

app.put('/api/update/topic', (req, res, next) => {
    const {id , val} = req.body;
    User.updateOne({ID: id} ,{ $set: { TOPIC: val } },).then((result) => {
        if(result.n){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    }
    
    );
})

app.put('/api/update/img', (req, res, next) => {
    const {id , val} = req.body;
    User.updateOne({ID: id} ,{ $set: { URL: val } },).then((result) => {
        if(result.n){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    }
    
    );
})

app.delete('/api/Deleteitems',(req,res)=>{
    const {id} = req.body;
    User.deleteOne({ID:id}).then((result)=>{
        if(result.n){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    })
})





app.post('/api/Additem',(req,res)=>{
    const {url,topic,price} = req.body;
    const temp = new User({ ID:Date.now(),TOPIC:topic ,URL:url,PRICE:price});
    temp.save().then(() => console.log('meow Add'));
    res.send({success:true})
})


app.listen(3000, () => { console.log("App is Listening to 3000") })