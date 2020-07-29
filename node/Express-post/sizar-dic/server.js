const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

const dic = [{ hebrow: "למהר", arabic: "يسرع" },
             { hebrow: "אוכל", arabic: "ياكل" },
             { hebrow: "שלום", arabic: "مرحبا" },
             { hebrow: "לומד", arabic: "يتغلم" }]


             app.post('/api/check-name', (request, response) => {
                //request com from the client
                const { name } = request.body;
                console.log(name)
                //check if name is in names
                let valid=name;
                
                for (let i=0 ; i<dic.length ; i++){ 
                    if(dic[i].hebrow===name){
                        valid=dic[i].arabic;
                    }
                    else{
                        if(dic[i].arabic===name ){
                            valid=dic[i].hebrow;
                    }
                }
                    
                
            }
               response.send({valid})
                console.log(valid)
                //send response to client
                
            })

            
app.listen(3000 , ()=> {
    console.log("port 3000")
})
