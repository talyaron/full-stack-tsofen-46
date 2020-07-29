
const express = require('express')
const app = express()

app.use(express.static('public'));

const jokes = ["Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.",
               "This morning my boss told me to “Have a great day!” So, I punched him in the face and went home.",
               "A box of chocolates has about 5,400 calories. Don’t eat the box and you’ll be fine."]


get_random = function (jokes) {
    return jokes[Math.floor((Math.random() * jokes.length))];
}

app.get('/j', function (req, res) {
    let j = get_random(jokes)
    res.send({ joke: j })
})

app.listen(3000, () => { console.log('listen on port', 3000) })