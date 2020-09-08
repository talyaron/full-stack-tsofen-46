getQuestions();

function handleLogin(e) {

    e.preventDefault();
    let { username } = e.target.elements;
    username = username.value;

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const { login } = data;

            //save username to localstorage
            localStorage.setItem('UserName', username);

            //route
            if (login) {
                window.location.replace('/question.html')
            }

        })

}

function getUser() {
    return localStorage.getItem('UserName');
}

function showQuestion(id) {
    window.location.replace('/OneQuestion.html');
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


function getQuestions() {
    try {
        ///////////////////////
        fetch('/getQuestion')
            .then(res => res.json())
            .then(questions => {
                let questionStr = '';
                questions.forEach(item => {
                    questionStr += `<div class=${"item"}> 
                    <img src=${"img/list.png"}>
                    <div onclick="showQuestion('${item.id}')">${item.name}</div>
                    </div>`;
                })
                questionStr += `<div>
            </div>`;

                document.getElementById('welcomeUser').innerHTML += getUser();
                document.getElementById('questions').innerHTML = questionStr;   
            })
        ////////////////////

    } catch (err) {
        console.error(err);
    }
}

function backToQuestion() {
    window.location.replace('/question.html');
}

function addQ() {
    try {
        ///////////////////////
        window.location.replace('/addQuestion.html');
        fetch('/getQuestion')
            .then(res => res.json())
            .then(questions => {
                let questionStr = '';
                questions.forEach(item => {
                    questionStr += `<div class=${"item"}> 
                    <img src=${"img/list.png"}>
                    <div onclick="showQuestion('${item.id}')">${item.name}</div>
                    </div>`;
                })
                questionStr += `<div>
            </div>`;
                document.getElementById('questions').innerHTML = questionStr;
            })
        ////////////////////

    } catch (err) {
        console.error(err);
    }
}


function addNewQuestion(e) {
    e.preventDefault();
    let { name, description, option1, option2, option3 } = e.target.elements;
    name = name.value;
    description = description.value;
    option1 = option1.value;
    option2 = option2.value;
    option3 = option3.value;

    fetch('/addNewQuestion', {
        method: 'POST',
        body: JSON.stringify({ name, description, option1, option2, option3 }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const { newQuestion } = data;
            //route
            if (newQuestion) {
                window.location.replace('/question.html')
            }

        })
}