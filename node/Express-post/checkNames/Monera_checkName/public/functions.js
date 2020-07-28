
function sendName(name) {
    console.log(name)
   
    fetch('/name', {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            const {success} = data;
            document.getElementById('result').innerText = success;
            console.log(success);
           
        })
}