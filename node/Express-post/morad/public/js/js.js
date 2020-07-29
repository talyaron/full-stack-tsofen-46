function register(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
   
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({name,password}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
           document.getElementById("registerResponse").innerText = data.success;
        })

}

function login(){
    let name = document.getElementById("nameLogin").value;
    let password = document.getElementById("passwordLogin").value;
   
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({name,password}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
           document.getElementById("loginResponse").innerText = data.success;
        })

}

function mySubmitFunction(e){
    e.preventDefault();
}