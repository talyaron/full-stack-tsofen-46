const express = require('express')
const app = express();
var path = require("path");
var http = require('http');
//npm init  --y
//npm i yargs
//npm install express
//
//
//
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('\public'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/html")));
var dic = [
    { eng: "dog", heb: "כלב", arabic: "كلب" },
    { eng: "god morinnig", heb: "בוקר טוב, בוקר אור", arabic: " صباح الخير, صباح النور" },
    { eng: "Hot", heb: "חם", arabic: "حامي" },
    { eng: "Summer", heb: "קיץ", arabic: "صيف" },
    { eng: "Mouse", heb: "עכבר", arabic: "فارة" },
    { eng: " ", heb: " ", arabic: " " },
    { eng: " ", heb: " ", arabic: " " }
]
var dic2 = [
    { heb: "dog", eng: "כלב ", arabic: "كلب" }
]
//  var newdic="";
// const fs = require('fs');
// fs.readFile('Dic.json', 'utf-8', (err, data) => {
//     if (err) throw err;
//    // newdic=JSON.parse(data)
//       newdic = JSON.parse(data.toString());
//     const user = JSON.parse(data.toString());

//     //console.log(JSON.parse(data));
//    });
// // TargetWord,
// // From,
// // To
//console.log(newdic)

app.post('/PostfromDic', function (req, res) {
    console.log("CheckDic...")
    var toreturn = "not Found";
    // console.log("print the dic...")
    dic.forEach(elem => {
        //console.log(elem)
    });
    //console.log(req.body)
    var success = { success: false }
    dic.forEach(dicelem => {
        //console.log(element)
        var TargetWord = req.body.TargetWord;
        var From = req.body.From;
        var To = req.body.To;
        //console.log("Target " + TargetWord + " From " + From + " To " + To)
        //from To if 
        //from eng to heb
        if (From == 'Eng') {
            if (To == 'Heb') {
                if (dicelem.eng == TargetWord) {
                    toreturn = dicelem.heb;
                    console.log(toreturn)
                }
            }
            if (To == 'Arabic') {
                if (dicelem.eng == TargetWord) {
                    toreturn = dicelem.arabic;
                }
            }
            if (To == 'Eng') {
                toreturn = TargetWord;
            }
        }
        //**************************************************** */       
        //from heb to eng arabic..
        if (From == 'Heb') {
            // console.log(dicelem.eng + " 123 " + TargetWord)
            const { eng, heb, arabic } = dicelem;
            n = TargetWord.localeCompare(heb);
            if (To == 'Eng') {
                //console.log("1 " + eng + "2 " + heb + " 3 " + arabic +" tt " +TargetWord)
                //console.log((heb==TargetWord));
                if (n == 0) {
                    //console.log("matshood"+ eng+  heb+ arabic)
                    toreturn = eng;
                    //console.log("111a  " +dicelem.eng)
                }
            }
            if (To == 'Arabic') {

                if (n == 0) {
                    toreturn = arabic;
                }
            }
            if (To == 'Heb') {

                if (n == 0) {
                    toreturn = heb;
                }
            }

        }
        // from arabic to heb eng
        if (From == 'Arabic') {
            const { eng, heb, arabic } = dicelem;
            n = TargetWord.localeCompare(arabic);
            if (To == 'Eng') {
                //console.log("1 " + eng + "2 " + heb + " 3 " + arabic +" tt " +TargetWord)
                //console.log((heb==TargetWord));
                if (n == 0) {
                    //console.log("matshood"+ eng+  heb+ arabic)
                    toreturn = eng;
                    //console.log("111a  " +dicelem.eng)
                }
            }
            if (To == 'Arabic') {

                if (n == 0) {
                    toreturn = arabic;
                }
            }
            if (To == 'Heb') {

                if (n == 0) {
                    toreturn = heb;
                }
            }
        }

    });// end foreach
    res.send({ toreturn: toreturn })

})

app.post('/SendMistakeToServer', function (req, res) {
    var flag = 0;
    var success = { success: false }

    dic.forEach(elemdic => {
        var TargetWord = req.body.TargetWord;
        var From = req.body.From;
        var To = req.body.To;
        var newword = req.body.newword;
        //console.log(TargetWord+" "+From +" "+To +" "+newword)
        if (From == 'Eng') {
            const { eng, heb, arabic } = elemdic;
            n = TargetWord.localeCompare(eng);
            console.log("nnnn  " + n)
            if (To == 'Heb') {
                console.log("222222")
                if (n == 0) {
                    elemdic.heb = newword;
                    console.log("success")
                    success.success = true
                }
            }
            if (To == 'Arabic') {
                if (n == 0) {
                    elemdic.arabic = newword;
                    console.log("success")
                    success.success = true
                }
            }
            if (To == 'Eng') {
                if (n == 0) {
                    elemdic.eng = newword;
                    success.success = true
                }
            }

        }

        //************************* */
        if (From == 'Heb') {
            const { eng, heb, arabic } = elemdic;
            n = TargetWord.localeCompare(heb);
            if (To == 'Eng') {
                if (n == 0) {
                    elemdic.eng = newword;
                }
            }
            if (To == 'Arabic') {
                if (n == 0) {
                    elemdic.arabic = newword;
                }
            }
            if (To == 'Heb') {
                if (n == 0) {
                    elemdic.heb = newword;
                }
            }
        }
        //************************* */
        if (From == 'Arabic') {
            const { eng, heb, arabic } = elemdic;
            n = TargetWord.localeCompare(arabic);
            if (To == 'Eng') {
                if (n == 0) {
                    elemdic.eng = newword;
                }
            }
            if (To == 'Arabic') {
                if (n == 0) {
                    elemdic.arabic = newword;
                }
            }
            if (To == 'Heb') {
                if (n == 0) {
                    elemdic.heb = newword;
                }
            }
        }

    

    });
    if (!success.success) {
        var TargetWord = req.body.TargetWord;
        var From = req.body.From;
        var To = req.body.To;
        var newword = req.body.newword;
        if(From=='Heb'){
            if(To=='Eng'){
          dic.push({ eng:newword, heb: TargetWord, arabic: "" });
         }
         if(To=='Arabic'){
            dic.push({ eng:"", heb: TargetWord, arabic: newword});
           }
        }
        //******* */
        if(From=='Eng'){
            if(To=='Heb'){
          dic.push({ eng:TargetWord, heb: newword, arabic: "" });
         }
         if(To=='Arabic'){
            dic.push({ eng:TargetWord, heb: "", arabic: newword});
           }
        }
        //****** */
        if(From=='Arabic'){
            if(To=='Heb'){
          dic.push({ eng:"", heb: newword, arabic: TargetWord });
         }
         if(To=='Eng'){
            dic.push({ eng:"", heb: newword, arabic: TargetWord});
           }
        }
    }
    dic.forEach(elem => {
        console.log(elem)
    });
    res.send(true)
})

app.listen(3000, () => { console.log("App is Listening") })
