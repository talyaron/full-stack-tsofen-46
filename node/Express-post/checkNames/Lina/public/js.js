function sendName(name) {
    console.log(name)

    fetch('/name', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            const { success } = data;
            

            if(success=='found'){
                document.body.style.backgroundColor="green";
            }else{
                document.body.style.backgroundColor="red";
            }


            document.getElementById('result').innerText = success;
            console.log(success);

        })
}
