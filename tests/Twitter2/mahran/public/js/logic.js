
function onUserLogIn() {
    let username = document.getElementById("Inp-username").value;
    let imgSrc = document.getElementById("Inp-img").value;

    fetch('/api/postUserlogIn', {
        method: 'POST',
        body: JSON.stringify( {
            username,
            imgSrc
        } ),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
        .then( data => {
            let result = data
            console.log(result.id)
        }

        )

}


