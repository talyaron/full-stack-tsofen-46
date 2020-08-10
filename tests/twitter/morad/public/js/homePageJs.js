function twitt() {
    let twitt = document.getElementById("inputPost").value;
    let id = getUserById();
    fetch('/api/addTwitt', {
            method: 'POST',
            body: JSON.stringify({ id, twitt }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

function getUserById() {
    return localStorage.getItem("twitterUserID");

}