const hebWordSpan = document.getElementById("hebToEng");
const engWordSpan = document.getElementById("engToHeb");
const errorPar = document.getElementById("errorParagraph");
const guessResult = document.getElementById("guessResult");

function handleTranslation(e) {
    e.preventDefault();

    const hebWord = e.target.elements.hebWord.value;
    const engWord = e.target.elements.engWord.value;

    fetch("/api/translate", {
        method: "POST",
        body: JSON.stringify({
            word: hebWord ? hebWord : engWord,
            lang: hebWord ? "heb" : "eng",
            translateTo: hebWord ? "eng" : "heb"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(res => {
        const {
            word,
            lang,
            message
        } = res;

        if (lang === "heb") hebWordSpan.innerHTML = word;

        else if (lang === "eng") engWordSpan.innerHTML = word;

        else if (message) alert(message);
    })
}



function handleGuess(e) {
    e.preventDefault();
    const word = e.target.elements.gameWord.value;
    const meaning = e.target.elements.meaning.value;
    const lang = setDesiredMeaningLanguage(word);

    const body = JSON.stringify({
        word,
        meaning,
        lang
    })
    fetch("/api/guess", {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(res => {
        if (res.success) {
            guessResult.className = "success";
            guessResult.innerHTML = `${res.message}`
        } else {
            guessResult.className = "fail";
            guessResult.innerHTML = `${res.message},
            The Meaning Of ${res.word} is ${res.correctMeaning}`
        }
    })


}


function setDesiredMeaningLanguage(word) {
    let lang = ""
    if (/^[a-zA-Z]+$/.test(word)) lang = "heb";
    else lang = "eng";

    return lang;
}