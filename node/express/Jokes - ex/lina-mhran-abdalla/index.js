const express = require('express')
const app = express()



app.use(express.static('public'))


const jokes = [1,2,3,4,5]



app.get('/jokes',function (req,res){


    res.send({joke: jokes[Math.floor(Math.random() * 5)]})

})

app.listen(3000,()=> {console.log('listen to 3000')})

