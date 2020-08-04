const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('public'));
function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };


const menu = [
    { name: 'https://img.gkbcdn.com/p/2019-11-22/apple-iphone-x-64gb-silver--used--20191122085356800._w500_.jpg', price: 4200, ID:uid(), color:'white' , type:'Iphone x 256gb' },
    { name: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Apple_iPhone_11_Pro_Max/Apple_iPhone_11_Pro_Max_L_1.jpg', price: 5500, ID:uid(), color:'black' , type:'Iphone 11 256gb'},
    { name: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946', price: 6200, ID: uid() ,color:'grey' , type:'Iphone 11 526gb'},
    { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Wjmjhpr-VcziglEUKVtyMyW07jiFQ473PRPdpGGnBh6uRm86aWV9CmaYLY-5Y48BK8U5iYPg&usqp=CAc', price: 2049, ID: uid() ,color:'Black' , type:'Iphone SE 128GB'},
    { name: 'data:image/jpeg;base64,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', price: 2899, ID: uid() ,color:'Pink' , type:'Iphone XR 256GB'},
    { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQleML32Q1c1cZZjTNPe1i9-55a7mzo2KRKREk7vfP8FJh1431XThKwsUNknIc53qxdGq6PJfsb&usqp=CAc', price: 5449, ID: uid() ,color:'Pink' , type:'Iphone 11 Pro Max 256GB'},
    { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjU-_brlZhgQ1Mt9ddtJfu-TXrKMSNxuBzYSKKBIrkkA5BaCOVLfdEY-HFrAWNXM28jHpkKgQ&usqp=CAc', price: 6120, ID: uid() ,color:'black-silver' , type:'Macbook Pro intel core'}
]



const admins = [ {name:'jeries' , password:'1234'} ,
                 {name:'tal' , password:'1111'} 
               ]

app.get('/menu', (req, res) => {
     res.send(menu)
})

app.get('/menu-sorted', (req, res) => {

    res.send(menu)
    })


              
app.get('/admin', (req, res) => {
    res.send(menu)
})

app.post('/login-admin', function (req, res) {
    const { name, password } = req.body;
  
    let validAdmin=false;
    for (let i=0 ; i<admins.length ; i++){
        if(admins[i].name==name && admins[i].password==password){
            validAdmin=true;
        }
    }
    

    res.send({validAdmin:validAdmin})
})

app.put('/menu-update', function (req, res) {
    const { price, id } = req.body;

    //find index of the element
    const index =menu.findIndex(item => item.ID === id);
    
    console.log(index);

    menu[index].price=price;
    
    //check if name is in names

    // const new1= menu.find(Element => id); 
    // new1.price=price; 
    // menu.find(Element => id).price==price; 
    res.send( menu )
})


app.delete('/delete-item', function (req, res) {
    const { id } = req.body;

    //find index of the element
    const index =menu.findIndex(item => item.ID === id);
    console.log(index);

    menu.splice(index,1)
    //check if name is in names

    // const new1= menu.find(Element => id); 
    // new1.price=price; 
    // menu.find(Element => id).price==price; 

    
    res.send( menu )
})

app.listen(3000 , ()=> {
    console.log("Port is running in 3000")
})

app.post('/addProduct', (req, res) => {
    const { body } = req;
    console.log(body)
    const {img,price,color,type } = body;
  
    let result = false
    for (let item of menu){
  
      if (item.name == img) result = true
    }
        if(result){
        }
        else{
        menu.push( { name:img, price: price ,ID:uid(),color:color,type:type} )
        
        }
      
  })
  