var signedUserName = "";

function addNewUser() {
    let name = document.getElementById("name").value;
    let imageUrl = document.getElementById("imageUrl").value;
    let id = uid();
    fetch('/api/addUser', {
            method: 'POST',
            body: JSON.stringify({ name, imageUrl, id }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(data => {
            if (data.success == true) {
                const { success, id } = data;
                //save id to localstorage
                localStorage.setItem('twitterUserID', id);
                window.location.href = "homePage.html";
            }
        })
}

//get Hmburger;
function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};