
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
            let userID = result._id;
            console.log(result._id)

            localStorage.setItem('twitterUserID', userID);
            window.location.replace('/home.html');

        }
        )

}


// receive the ID from the localStorage

function getUserID() {
    return(localStorage.getItem('twitterUserID'));
}

// get the logged In user Details

function getUser() {
    const userID = getUserID();
    fetch('/api/getUser', {
        method: 'POST',
        body: JSON.stringify ({
            userID            
        }),
        headers: {
            'Content-Type': 'application/json'
            
        }

    })
    .then(res => res.json())
    .then(data => {
        let result = data;
        console.log(result);
    })
}


