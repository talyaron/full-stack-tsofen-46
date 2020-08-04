function handleRegister(event){
    event.preventDefault();
    
    const username= event.target.elements.username.value;
    const password= event.target.elements.password.value;
    //console.log(username, password);

    fetch('/register',{
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>
        console.log(data)  )

}

 