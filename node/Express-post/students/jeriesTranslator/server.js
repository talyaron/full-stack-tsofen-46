const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));

const translator= [{ar:"مرحبا" , he:"שלום"}, 
                   {ar:"كلب" , he:"כלב"} 
                                   ] 

app.post('/api/translate-word', (request, response) => {
    //request com from the client
    const { word } = request.body;
    console.log(word )
    //check if name is in names

    
    let valid=word;
    for (let i=0 ; i<translator.length ; i++){ 
        if(translator[i].ar===word ){
            valid=translator[i].he;
        }
        else{
            if(translator[i].he===word ){
                valid=translator[i].ar;
        }
    }
        
    
}
    
     response.send({valid})

   
    console.log(valid)
    //send response to client
    
})

app.post('/api/add-word', (request, response) => {
    //request com from the client
    const { arabic , hebrew } = request.body;
    console.log(arabic )
    //check if name is in names
    let wordExist=false;
    for (let i=0 ; i<translator.length ; i++){ 
        if(translator[i].ar===arabic && translator[i].he===hebrew){
            wordExist=true
        }

    }
    if(wordExist==true){
     response.send({wordExist})}
    else{
        translator.push({ar:arabic , he:hebrew})
        response.send({wordExist})
    }
   
    //send response to client
    
})

app.post('/api/edit-word', (request, response) => {
    //request com from the client
    const { wrong , newword } = request.body;
    console.log(wrong,newword)
    //check if name is in names
    let wordfix=false;
    for (let i=0 ; i<translator.length ; i++){ 
        if(translator[i].ar === wrong){
            translator[i].ar=newword
            wordfix=true
        }
        if(translator[i].he === wrong){
            translator[i].he=newword
            wordfix=true
        }
    }

     response.send({wordfix})
    
   
    //send response to client
    
})

app.listen(3005, ()=>{console.log("App is Listening")})