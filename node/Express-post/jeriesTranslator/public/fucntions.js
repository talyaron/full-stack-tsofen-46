const result = document.getElementById('result');
const resultword = document.getElementById('resultword');
const fix = document.getElementById('fixword');



function handleWord(e){
    e.preventDefault();

    const word = e.target.elements.word.value;

    fetch('/api/translate-word', {
        method: 'POST',
        body: JSON.stringify({ word }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { valid } = data;
            console.log(valid)
            //print to DOM
            
            result.innerText = valid
            

        })
}


function addWord(e){
    e.preventDefault();

    const arabic = e.target.elements.arabic.value;
    const hebrew = e.target.elements.hebrew.value;

    fetch('/api/add-word', {
        method: 'POST',
        body: JSON.stringify({ arabic ,hebrew }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { wordExist } = data;
            console.log(wordExist)
            //print to DOM
            if(wordExist == true){
             resultword.innerText = `its Already exist`}
             else {
            resultword.innerText = `Added succesfully` 
             }
            

        })
}

function editWord(e){
    e.preventDefault();

    const wrong = e.target.elements.wrong.value;
    const newword = e.target.elements.newword.value;

    fetch('/api/edit-word', {
        method: 'POST',
        body: JSON.stringify({ wrong ,newword }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { wordfix } = data;
            console.log(wordfix)
            //print to DOM
            if(wordfix == true){
                fixword.innerText = `Fixed`}
             else {
                fixword.innerText = `Sorry the word not exists` 
             }
            

        })
}




