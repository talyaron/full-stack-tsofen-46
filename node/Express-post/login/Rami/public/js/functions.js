const result = document.getElementById("msg");
function loginHandle(e){
    e.preventDefault();
    // const name = e.target.elements.name.value;
    const email=document.getElementById("login").elements["email"].value;
    const pass=document.getElementById("login").elements["pass"].value;
    console.log(pass)
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email,pass }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        const {success} = data;
        if(success)
        {
            result.innerHTML = "<p class='green'>You'r Logged in</p>"
        }else{
            result.innerHTML = "<p class='red'>Email or Password not match</p>"
        }


    })

}



function registerHandle(e){
    e.preventDefault();
    const email=document.getElementById("reg").elements["email"].value;
    const pass=document.getElementById("reg").elements["pass1"].value;
    const pass=document.getElementById("reg").elements["pass2"].value;
    if(pass1!=pass2)
    {
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ email,pass }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        const {success} = data;
        if(success)
        {
            result.innerHTML = "<p class='blue'>Email registered</p>"
        }else{
            result.innerHTML = "<p class='red'>Email is already in use</p>"
        }

        //print to DOM


    })
    }else{
        result.innerHTML = "<p class='red'>Passwords Must Match</p>"
    }
}