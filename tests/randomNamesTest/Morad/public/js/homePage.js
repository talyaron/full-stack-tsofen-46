function renderQuestions() {
    fetch('/api/questions')
        .then(res => res.json())
        .then(data => {
            let divs=``;
            data.docs.forEach(element => {
             
                let question = element.question;
                let div = ` <div class="card"  onclick="showVotes('${question}')">
                            <img src="https://image.flaticon.com/icons/svg/545/545705.svg" alt="options" />
                    
                            <p>${question}</p>
                        
                            </div>`;
                divs+=div;
              
            });
            document.getElementById('questions').innerHTML = divs;
        })
}
function showVotes(question){
    location.replace("./votes.html");
    localStorage.setItem("currentQues",question);
}