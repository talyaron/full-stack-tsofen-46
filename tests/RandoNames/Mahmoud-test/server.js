const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'))

const url = "mongodb+srv://MahmoudAtaria:Ma06071995@cluster0.eegp0.mongodb.net/test?authSource=admin&replicaSet=atlas-135jot-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    email:String,
    name: String,
    password: String,
    imge:String,
    id:String
}); 

const Participnts = mongoose.model('Participnts', { 
    name: String,
    imge:String,
 }); 
 


function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };


app.post('/api/register',(req, res)=>{
    const {email,name, password,imge} = req.body;
    // console.log(email,name, password,imge)
    
    let user  = User({email, password,})
    let registred=false; 

    User.findOne({ email:email }, function (err, docs) { 
        if (docs != null) { 
            registred= false; 
            // console.log(registred);
            res.send({ registred }) 
        } 
        else { 
            const newUser = new User({ email:email,name:name, password: password,imge:imge,id:uid() }) 
            newUser.save() 
            registred=true; 
            res.send({ registred}) 
        } 
 
    })
    
    })
    
    app.post('/api/login',(req, res)=>{
        const {email, password} = req.body;
        //  console.log(email, password);
          let validAdmin=false; 
          User.findOne( {email:email , password:password } , function(err, docs) { 
        //   console.log(docs); 
          if ( docs!=null ) { 
            let validAdmin=true; 
            res.send( {validAdmin:validAdmin , id:docs.id}) 
        }  
        else { 
            res.send({validAdmin:validAdmin}) 
        } 
 
    }) 
        
        

    })

app.post('/api/userPannel',(req,res)=>{
    const {id} = req.body;
    // console.log(id)
    User.findOne({id:id}).then(doc=>{
        //  console.log(doc)
         res.send({user:doc})
    })
   
})


app.post('/addParticpnt', (req, res) => { 
    const { body } = req; 
    const {imge,name } = body; 
    let validPart=false; 
    Participnts.findOne( {name:name } , function(err, docs) { 
        console.log(docs); 
        if ( docs != null ) { 
          let validPart=true; 
          
          res.send( {validPart:validPart}) 
      }  
      else { 
        let newParticipnts= new Participnts( { name:name,imge:imge} ) ;
        newParticipnts.save() ;
          res.send({validPart:validPart}) 
      } 

  })
       
  })

app.get('/api/Part',(req,res)=>{
    
    Participnts.find({},function(err,docs){

        // console.log(docs)
       res.send(docs)
       
     
     })
})

const port = process.env.PORT || 3001;

app.listen(port, () => { console.log("App is Listening to",port) })