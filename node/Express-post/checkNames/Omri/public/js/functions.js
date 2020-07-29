const btn = document.getElementById("namesBtn");
const p = document.getElementById("nameResult");

let name = document.getElementById("name");

name.addEventListener("keyup", (e) => {
    name = e.target.value;

});

btn.addEventListener("click", function () {
    fetch("/names", {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name
        })
    }).then(res => res.json()).then(data => {
        if (data) p.innerHTML = "This name Exists";
        else p.innerHTML = "Try again";
    })
});