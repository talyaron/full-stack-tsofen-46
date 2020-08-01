const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const students = [
    { name: 'Moran', grade: 100 },
    { name: 'Lina', grade: 99 },
    { name: 'Abdallah', grade: 98 }

]

const pupils = [
    { name: 'Moran', grade: 100 },
    { name: 'Lina', grade: 99 },
    { name: 'Yosuf', grade: 85 }
]

app.get('/api/pupils', (req, res) => {
    setTimeout(()=>{
    res.send(pupils)
    },4000)
})

app.get('/api/students', (req, res) => {
    
    setTimeout(()=>{
        res.send(students)
    },2000)
    
})


app.listen(3000, () => { console.log("App is Listening to 3000") })




