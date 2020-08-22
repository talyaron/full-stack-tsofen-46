
// globale variables:
let questionform = document.getElementById("questionForm");
let votingOptions = document.getElementById("votingOptions");


// eventhandling
function onChooseOption(event) {

    let optCoutn = event.currentTarget.innerText;

    for (let i = 0; i < optCoutn; i++) {

        let newVotingOpt = document.createElement("div");
        let votingOptInput = document.createElement("input");
        let votingDescInput = document.createElement("input");

        newVotingOpt.setAttribute("class", "newVotingOpt");
        newVotingOpt.setAttribute("id", "newVotingOpt" + i);
        votingOptInput.setAttribute("id", "votingOptInput");
        votingOptInput.setAttribute("placeholder", "add a voting Option..");

        votingDescInput.setAttribute("id", "votingDescInput");
        votingDescInput.setAttribute("placeholder", "Descripte your voting Option..")


        newVotingOpt.appendChild(votingOptInput);
        newVotingOpt.appendChild(votingDescInput);


        questionform.appendChild(newVotingOpt);
    }

}


function onSave(event) {


    let createdQF = document.getElementById("questionForm").children;
    let title = document.getElementById("question-Inp").value;
    let description = document.getElementById("questionDesc-Inp").value;
    let voteOptionType = "simple";
    let voteOptionCount = createdQF.length;
    let voteOptions = [];





    for (let i = 0; i < createdQF.length; i++) {
        let optionTile = createdQF[i].children[0].value;
        let optionDesc = createdQF[i].children[1].value;
        let voters = [];
        voteOptions.push({
            optionTile,
            optionDesc,
            voters
        })
    }


    fetch('/api/createQuestion', {

        method: 'POST',
        body: JSON.stringify({

            title,
            description,
            voteOptionType,
            voteOptionCount,
            voteOptions

        }),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.href = "main.html";

        })




}

function onCancel () {
    window.location.reload(true);
    window.location.href = "main.html"
}


function onDelete () {
    window.location.reload(true);
    window.location.href = "main.html"
}

