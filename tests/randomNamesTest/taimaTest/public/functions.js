async function LoginCheck() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var imgURL = document.getElementById("imgURL").value;
    alert(email+" "+ password)
    await fetch("/AddUser", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            imgURL: imgURL
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });  
}  
 
        // window.location.replace("groups.html");
