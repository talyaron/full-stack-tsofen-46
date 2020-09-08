function onLogin() {
    window.location.href = "main.html";
    let username = document.getElementById("Inp-username").value;

    localStorage.setItem('username',username);

}

