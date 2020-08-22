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




        for (let i = 0; i < oResult.voteOptionCount; i++) {

            let graphColum = document.createElement("div");
            let voteOptionBtn = document.createElement("button");

            graphColum.setAttribute("id", "graphColumn");
            voteOptionBtn.setAttribute("id", "voteOptionBtn");
            voteOptionBtn.setAttribute("onclick", "onUserVote(event)");
            voteOptionBtn.innerHTML = oResult.voteOptions[i].optionTile;



            //display votes:
            for (j = 0; j < oResult.voteOptions[i].voters.length; j++) {
                let votingrecord = document.createElement("p");
                votingrecord.setAttribute("id", "votingrecord");
                votingrecord.innerHTML = oResult.voteOptions[i].voters[j];
                graphColum.appendChild(votingrecord);
            }


            //add content:
            graphColum.appendChild(voteOptionBtn);
            votingGraph.appendChild(graphColum);


        }


    })
})



// Event handling:

function onUserVote(event) {

    let optionTile = event-innerText;
    let choosedCloumn = event.currentTarget.parentElement;

    let currentUser = localStorage.getItem("username");

    fetch('/api/addVote', {

        method: 'POST',
        body: JSON.stringify({ title , optionTile  }),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(res => res.json())
    .then( data => {

        console.log(data);

    })


    // multi:


    let newvoteRecord = document.createElement("p");
    newvoteRecord.setAttribute("id", "votingrecord");
    newvoteRecord.innerHTML = currentUser;
    choosedCloumn.insertBefore(newvoteRecord, choosedCloumn.childNodes[0]);




}