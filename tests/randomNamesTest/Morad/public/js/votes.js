function renderquesAndAnswers(){
    let ques = localStorage.getItem("currentQues");
    fetch('/api/getQuestion', {
        method: 'POST',
        body: JSON.stringify({ques}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        let quesObj = data.doc;
        document.getElementById("votesHeader").innerText = quesObj.question;
    })
}
vote();
function vote(){
    // let userName = localStorage.getItem("userName");
    // let ques = localStorage.getItem("currentQues");
    let userName = "sleman";
    let ques = "sfdf";
    let answer = "ffff";
    fetch('/api/vote', {
        method: 'POST',
        body: JSON.stringify({userName,ques,answer}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
       let ques = data.doc;
    })
}