
showQuestion("_8lep05fmf");

function showQuestion(id) {

    fetch('/getOneQuestion', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(question => {
            let name1Str = "";
            let name2Str = "";
            let name3Str = "";
            let questionStr = question.name;
            document.getElementById('theQuestion').innerHTML = questionStr;

            let option1Str = question.options[0].value;
            document.getElementById('option1').innerHTML = option1Str;

            let option2Str = question.options[1].value;
            document.getElementById('option2').innerHTML = option2Str;

            let option3Str = question.options[2].value;
            document.getElementById('option3').innerHTML = option3Str;

            ///////////////////////////////////////////////////////////////////////
            question.options[0].names.forEach(item => {
                name1Str += `<div class=${"name"}>${item}</div>`;
            })
            name1Str += `<div></div>`;
            document.getElementById('name1').innerHTML = name1Str;
            //////////////////////
            question.options[1].names.forEach(item => {
                name2Str += `<div class=${"name"}>${item}</div>`;
            })
            name2Str += `<div></div>`;
            document.getElementById('name2').innerHTML = name2Str;
            //////////////////
            question.options[2].names.forEach(item => {
                name3Str += `<div class=${"name"}>${item}</div>`;
            })
            name3Str += `<div></div>`;
            document.getElementById('name3').innerHTML = name3Str;

        })
}


function addAnswer() {
    let username = 'לינא';
    // fruits.splice(0, 1);

    fetch('/getQuestion')
        .then(res => res.json())
        .then(questions => {
            let questionStr = '';
            questions.forEach(item => {
                item.forEach(option => {
                    option.forEach(function (name, index, object) {
                        if (name === username) {
                            object.splice(index, 1);
                        }
                    })
                })
            })
        })
}
