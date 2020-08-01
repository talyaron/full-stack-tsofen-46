const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const users = [{name:"nimer",password:"lol"}]


function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
};

const menu= [

  //menShoe
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_368377_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Air 350" ,id:  uid(),discription:"running shoes" ,model:"menShoe" ,price:150},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_367884_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Air Max 270" ,id:  uid(),discription:"running shoes" ,model:"menShoe" ,price:120},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_368131_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Quest 3" ,id:  uid(),discription:"running shoes" ,model:"menShoe" ,price:68},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_369161_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike KD Trey 5" ,id:  uid(),discription:"running shoes" ,model:"menShoe" ,price:90},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_062106_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "adidas Originals NMD_R1" ,id:  uid(),discription:"running shoes" ,model:"menShoe" ,price:110},


  //menClothes
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_374674_bl&qlt=85&exclusive=1&qlt=92&wid=363&hei=363&v=1&fmt=webp",name: "Adidas Badge of Sport 1/2 Zip Tracksuit" ,id:  uid(),discription:"All Colors Available" ,model:"menClothes" ,price:65},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_365434_bl&qlt=85&exclusive=1&qlt=92&wid=363&hei=363&v=1&fmt=webp",name: "Adidas Energize Full Zip Hoodie" ,id:  uid(),discription:"All Colors Available" ,model:"menClothes" ,price:55},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_377448_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Adidas Spain 2020 Ramos #15 Home Shirt" ,id:  uid(),discription:"Adidas Spain FootBall" ,model:"menClothes" ,price:80},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_377446_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Adidas Germany 2020 Kroos #8 Home Shirt" ,id:  uid(),discription:"Adidas Germany FootBall" ,model:"menClothes" ,price:90},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_338113_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Adidas Scotland Condivo 20 Track Hoodie" ,id:  uid(),discription:"100% Cotton All Colors Available" ,model:"menClothes" ,price:45},


//womenShoe
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_374155_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike React Vision Women's" ,id:  uid(),discription:"running shoes" ,model:"womenShoe" ,price:115},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_374182_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike RYZ 365 Women's" ,id:  uid(),discription:"running shoes" ,model:"womenShoe" ,price:85},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_370051_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Air Max 90 Women's" ,id:  uid(),discription:"running shoes" ,model:"womenShoe" ,price:115},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_373915_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Air Force 1 SE Women's" ,id:  uid(),discription:"running shoes" ,model:"womenShoe" ,price:90},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_394090_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Nike Air VaporMax Flyknit 3 Women's" ,id:  uid(),discription:"running shoes" ,model:"womenShoe" ,price:170},


  //womenClothes
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_357964_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Adidas Core Sports Bra And pants" ,id:  uid(),discription:"running shoes" ,model:"womenClothes" ,price:25},
  {mainImg: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_357970_bl&qlt=85&qlt=92&w=363&h=363&v=1&fmt=webp",name: "Adidas Core Sports Bra And Shorts" ,id:  uid(),discription:"running shoes" ,model:"womenClothes" ,price:30},
  {mainImg: "https://i8.amplience.net/i/jpl/jd_342923_b?qlt=92&w=750&h=957&v=1&fmt=webp",name: "Adidas Athletic Small Logo T-Shirt" ,id:  uid(),discription:"running shoes" ,model:"womenClothes" ,price:35},
  {mainImg: "https://i8.amplience.net/i/jpl/jd_367760_b?qlt=92&w=750&h=957&v=1&fmt=webp",name: "Adidas Plus Size Badge of Sport Bra" ,id:  uid(),discription:"Available in all XXXXXX Size" ,model:"womenClothes" ,price:250},
  {mainImg: "https://i8.amplience.net/i/jpl/jd_389441_e?qlt=92&w=750&h=957&v=1&fmt=webp",name: "Adidas 3-Stripes Pulse Tights" ,id:  uid(),discription:"running shoes" ,model:"womenClothes" ,price:40},

//supplements
  {mainImg: "https://s3.images-iherb.com/opn/opn02866/w/18.jpg",name: "Whey Protien" ,id:  uid(),discription:"Optimum Nutrition, Gold Standard 100% Whey, Double Rich Chocolate, 5 lbs (2.27 kg)" ,model:"supplement" ,price:60},
  {mainImg: "https://s3.images-iherb.com/cgn/cgn01059/w/42.jpg",name: "Creatine Gold Nutrition" ,id:  uid(),discription:"California Gold Nutrition 16oz 90 Servings",model:"supplement" ,price:15},
  {mainImg: "https://s3.images-iherb.com/cll/cll02919/w/8.jpg",name: "C4 Pre-Workout" ,id:  uid(),discription:"C4 Sport Cellucor Lemon 9.5oz 30Serving" ,model:"supplement" ,price:20}]

app.get('/admin', (req, res) => {
  res.send(menu)
})

app.post('/logIn', (req, res) => {
  const { body } = req;
  console.log(body)
  const { name, password } = body;

  let result = false
  for (let user of users){

    if (user.name == name) 
      if(user.password==password)
         result=true;
  }
      if(result){
        
        res.send({answer:"logged in"})
        

      }
      else{
      
      res.send({ answer: "wrong info" })
      }
    
})

app.put('/menu-update', function (req, res) {
  const { price, id } = req.body;

  //find index of the element
  const index =menu.findIndex(item => item.id == id);
  console.log(index);

  menu[index].price=price;
  console.log(menu[index])
  res.send( menu )
})

app.post('/addProduct', (req, res) => {
  const { body } = req;
  console.log(body)
  const { model,price,description,name,url } = body;

  let result = false
  for (let item of menu){

    if (item.name == name) result = true
  }
      if(result){
      }
      else{
      menu.push({ mainImg:url, model: model ,price:price,discription:description,name:name,id:uid()})
      
      }
    
})

app.get('/menu', (req, res) => {
  res.send(menu)
})




app.put('/delete-item', function (req, res) {
  const { id } = req.body;

  //find index of the element
  const index =menu.findIndex(item => item.id == id);

  menu.splice(index,1);
  res.send( menu )
})













app.listen(3000, () => { console.log("App is Listening to 3000") })