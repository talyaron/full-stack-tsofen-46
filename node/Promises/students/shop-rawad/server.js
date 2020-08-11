const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/test";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const shopitem = mongoose.model('shopitem',{
     
  img:String,
  price:Number,
  ID:String
});

 

app.use(express.static('public'))


// const Shopitems = [
//     { img: "img/Air-jorden.jpg", price: 1000, ID: uid() },
//     { img: "img/Irving-5.jpeg", price: 450, ID:uid() },
//     { img: "img/lebron-15.jpg", price: 950, ID: uid() },
//     { img: "img/PG-4.jpg", price: 600, ID: uid() },
 
//   ]



//   shopitem.insertMany(Shopitems,function (err, docs) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("Multiple documents inserted to Collection Items");
//     }
// });



 

   


  function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };


  app.get('/Shopitems',(req,res)=>{
       setTimeout(() => {
        // res.send(Shopitems)
        shopitem.find({},function(err,docs){
         res.send(docs)

        
        })

      }, 1000);
  })

  app.put('/editshoesPrice', (req, res)=>{
    const { body } = req;
    console.log(body)
    const { price, id } = body;

    // const index = Shopitems.findIndex(item => item.ID === id);
    // Shopitems[index].price=price

    shopitem.updateOne({ID:id},{price:price}).then(doc=>{
    
    })

 });

 app.delete('/delete',(req,res)=>{
      const {body} = req;
      const {id} = body;
      // const index = Shopitems.findIndex(item => item.ID === id);
      // Shopitems.splice(index,1);
      // console.log(Shopitems);
      shopitem.deleteOne({ ID: id }, function (err) {});

 })


 app.put('/addimg',(req,res)=>{
   const {body}=req;
   console.log(body);
   const newshoe=body;

  // console.log(newshoe)
  //   console.log(newshoe.newimg)
  //   console.log(newshoe.addprice)
  //  Shopitems.push({img:`${newshoe.newimg}`,price:newshoe.addprice,ID:"uid()"})
  //  console.log(Shopitems);
     

     const kobe = new shopitem({img:`${newshoe.newimg}`,price:newshoe.addprice,ID:"uid()"});
     kobe.save().then(() => console.log('done'));
  

   })

   app.put('/sort',(req,res)=>{
     const {body} =req;
     console.log(body);
     const sort=body.sortvalue;
     console.log(sort)

     if(sort === 'low-price'){
      Shopitems.sort(function(a, b){return a.price - b.price});
     }
     if(sort === 'hight-price'){
            Shopitems.sort(function(a,b){return b.price - a.price});
     }

     

   })


app.listen(3000,()=>{console.log('App listen on port 3000')})