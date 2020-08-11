function handleLogin(e) {

    e.preventDefault();
    let { name, imgUrl } = e.target.elements;
    name = name.value;
    imgUrl = imgUrl.value;

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ name, imgUrl }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const { id, login } = data;

            //save id to localstorage
            localStorage.setItem('twitterUserID', id);

            //route
            if (login) {
                window.location.replace('/home.html')
            }

        })

}

function getUserID() {
    return localStorage.getItem('twitterUserID');
}

function getUser() {

    return new Promise((resolve, reject) => {
        const userID = getUserID();

        fetch('/api/getUser', {
            method: 'POST',
            body: JSON.stringify({ id: userID }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err=>reject(err))

    })

}

