function signIn(e){
    e.preventDefault();
    let userName = document.getElementById("userName").value;
    fetch(`/api/signIn`, {
        method: 'POST',
        body: JSON.stringify({ userName }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            if (data.succesfull == true) {
               
                window.location.href = "./homePage.html";
            }
        })
}