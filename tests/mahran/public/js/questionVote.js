//Globale Variables:
let QuestionTitle = document.getElementById("questionTitle");
let votingGraph = document.getElementById("qVotingGraph");
let title = localStorage.getItem('selectedQuestion');

//on init load: get all avaialbe Questions
window.addEventListener("load", function (event) {
    fetch('/api/getSelectedQuestion', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json()).then(data => {
        console.log(data);

        let oResult = data;
        QuestionTitle.innerHTML = oResult.title;

        for (let i = 0; i < data.voteOptionCount; i++) {

            let graphColum = document.createElement("div");
            let voteOptionBtn = document.createElement("button");

            graphColum.setAttribute("id","graphColumn");
            voteOptionBtn.setAttribute("id","voteOptionBtn");

            graphColum.appendChild(voteOptionBtn);
            votingGraph.appendChild(graphColum);








        }







    })
})