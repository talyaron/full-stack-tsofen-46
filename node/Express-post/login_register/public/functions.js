function checkUser(e){
       //prevent submit to refresh page
       e.preventDefault();

       //get name from input (in OOP style)
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;
    
    console.dir(name)
    console.dir(password)
   //send name to server

    fetch('/addUserDB', {
        method: 'POST',
        body: JSON.stringify({name,password}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            const {ValidUser} = data;
            if(ValidUser==true){
                //window.location.href="app.listen(4000, () =>)"
                document.body.style.backgroundColor="green";
            }else{
                document.body.style.backgroundColor="red";
            }
            console.log(ValidUser);
           
        })
}