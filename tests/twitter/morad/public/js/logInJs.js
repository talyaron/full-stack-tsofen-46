function addNewUser(){
    console.log("aaa")
let name = document.getElementById("name").value;
let imageUrl = document.getElementById("imageUrl").value;
fetch('/api/addUser', {
    method: 'POST',
    body: JSON.stringify({ name, imageUrl }),
    headers: {
        'Content-Type': 'application/json'
    },
}).then(res => res.json())
    .then(data => {
        if(data.success == true){
            window.location.href="homePage.html";
        }
    })
}