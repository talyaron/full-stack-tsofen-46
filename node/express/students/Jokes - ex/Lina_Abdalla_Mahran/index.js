const express = require('express')
const app = express()

app.use(express.static('public'))




const jokes = ["אם בתי הספר ימשיכו להיות סגורים עוד קצת, ההורים ימצאו חיסון לקורונה לפני המדענים.",
    "האמת שלא כל כך היה לי משעמם בבית בתקופת הקורונה אבל מעניין איך בשקית אחת של אורז יש 7456 גרגירים ובשקית אחרת 7489...",
    "לכל בעליי הכלבים שימו לב: בגוף האדם האנושי יש 206 עצמות! אתם עדיין חושבים שהכלב שלכם אוהב אתכם סתם ככה בלי שום סיבה?",
];


app.get('/jokes', function (req, res) {
    res.send({ joke: jokes[Math.floor(Math.random() * 3)] });
})



app.listen(3000, () => { console.log('App listenting on port 3000') })




