//Globale Variables:
let questionList = document.getElementById("questions");

//on init load: get all avaialbe Questions
window.addEventListener("load", function (event) {
    fetch('/api/getVotes', {}).then(res => res.json()).then(data => {

        for (let i = 0; i < data.length; i++) {
            let questionDiv = document.createElement("div");
            let questionTile = document.createElement("p");
            let questionIcon = document.createElement("i");

            
            questionDiv.setAttribute("id","questionDiv");
            questionDiv.setAttribute("onclick","onShowQuestionVote(event)");

            questionTile.setAttribute("id", "questionTile");
            questionIcon.setAttribute("id","questionIcon");
            questionIcon.setAttribute("class", "fa fa-bars");

            questionTile.innerHTML = data[i].title;
            questionDiv.appendChild(questionIcon);
            questionDiv.appendChild(questionTile);
            questionList.appendChild(questionDiv);
            

        }

    })
})


function onCreateQuestion() {
    window.location.href = "newQuestion.html";
}

function onShowQuestionVote(event) {
    let selectedQuestion =  event.currentTarget.children[1].innerHTML;
    localStorage.setItem('selectedQuestion', selectedQuestion);
    window.location.href = "questionVote.html";



}