const express = require("express");
const app = express();
const dictionary = require("./public/js/dictionary");


app.use(express.static("public"));
app.use(express.json());

app.post("/api/translate", (req, res) => {
    const {
        word,
        lang,
        translateTo
    } = req.body;

    if (!word) return res.status(400).send({
        message: "Please Enter A Word"
    });

    const translatedWord = dictionary.find(wordObj => wordObj.heb === word || wordObj.eng === word);
    if (!translatedWord) return res.status(404).send({
        message: "Word was not found in the dictionary"
    });

    res.status(200).send({
        word: translatedWord[translateTo],
        lang
    })
})



app.post("/api/guess", (req, res) => {
    const {
        word,
        meaning,
        lang
    } = req.body;

    const wordInArray = dictionary.find(wordObj => wordObj.heb === word || wordObj.eng === word);
    const isCorrectMeaning = wordInArray[lang] === meaning;

    if (!isCorrectMeaning) return res.status(400).send({
        message: "Ooooops! You Are Wrong",
        word,
        correctMeaning: wordInArray[lang],
        success: false
    })

    return res.status(200).send({
        message: "You Are Genius, Well Done!",
        success: true
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));