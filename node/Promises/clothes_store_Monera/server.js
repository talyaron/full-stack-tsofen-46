const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))



const menu = [
    {name: 'https://www.hm.com/nt-north/uploads/2020/07/1092A-CPD-1-dress-it-up.jpg',price: 60, ID: uid()},
    {name: 'https://lp2.hm.com/hmgoepprod?set=source[/3f/60/3f6054db27eafcf2f37243331b6f65459096969c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]',price: 78, ID: uid()},
    {name: 'https://lp2.hm.com/hmgoepprod?set=source[/0b/e1/0be142ca0b0d920467f338e14ebd60911a874318.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]',price: 45, ID: uid()},
    {name: 'https://lp2.hm.com/hmgoepprod?set=source[/29/8a/298a003bf45d17f37aaca36c504810c4174a67ad.jpg],origin[dam],category[ladies_dresses_shortdresses],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]',price: 46, ID: uid()},
    {name: 'https://lp2.hm.com/hmgoepprod?set=source[/81/0d/810d807d54cd5f790b6bf88c0f427c9e06bf7e31.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]',price: 90, ID: uid()},
  ];


  function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
app.get('/getmenu', function (req,res) {
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

app.post('/api/addClothe', (request, response) => {
  //request com from the client
  const {  url , price } = request.body;
  console.log(url )
  //check if name is in names
  let wordExist=false;
  for (let i=0 ; i<menu.length ; i++){ 
      if(menu[i].name===url && menu[i].price===price){
          wordExist=true
      }

  }
  if(wordExist==true){
   response.send({wordExist})}
  else{
    menu.push({name:url , price:price, ID:uid()})
      response.send({wordExist})
  }
 
  //send response to client
  
})

app.put('/api/deleteTheClothe', (request, response) => {
  //request com from the client
  const { ItemId } = request.body;
  const index=menu.findIndex(item =>item.ID===ItemId);
  console.log(index);
  if(index!=-1){
  menu.splice(index,1)}
  response.send('Got a PUT request at user')
})



  
app.listen(3000, () => { console.log("App is Listening to 3000")})