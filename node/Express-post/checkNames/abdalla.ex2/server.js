const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({    
    extended: true
}));

app.use(express.static('public'));

let words = [
    { arabic: "مرحبا", hebrow: "שלום" },
    { arabic: "اسم", hebrow: "שם" },
    { arabic: "وين", hebrow: "איפה" },
    { arabic: "تال", hebrow: "טל" }

];



app.post('/words', (req, res) => {
    const { arabic } = req.body;
    const { hebrow } = req.body;
    console.log(arabic)
    console.log(hebrow)
    
    let check = '';
    if(arabic.length>0){
    for (let i = 0; i < words.length; i++) {
        if (words[i].arabic === arabic.value) {
            check === word[i].hebrow.value;
        };

    }}
    else if(hebrow.length>0){
        for (let i = 0; i < words.length; i++) {
            if (words[i].hebrow === hebrow.value) {
                check === word[i].arabic.value;
            };
        }}
    
    else check==='NOT FOUND';
    res.send(check)
})


app.listen(3003, () => { console.log('listen to port') });