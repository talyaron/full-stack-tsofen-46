const result = document.getElementById('result');

function checkName(e) {
    //prevent submit to refresh page
    e.preventDefault();


    //get name from input (in OOP style)
    const name = e.target.elements.username.value;
    const pass = e.target.elements.password.value;
    //send name to server
    fetch('/api/check-name', {
        method: 'POST',
        body: JSON.stringify({ name,pass }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        const {isInNames} = data;
        
        if(success=='exists'){
            document.body.style.backgroundColor="green";
        }
        //print to DOM
        result.innerText = isInNames


    })

}