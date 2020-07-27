/*console.log('hi');

function multi(x,y){
    return x*y;
}

console.log(multi(2,3));*/

//yargs
/*const { argv } = require("yargs");
const {m,a,e}=argv;

if(m) {console.log('Good Morning')};
if(a) {console.log('good afternon')};
if(e) {console.log('good evening')};*/

//express
const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, ()=>{console.log('App listen on port 3000')})
