const result = document.getElementById('registerResult');

function handleRegister(e) {
    //prevent submit to refresh page
    e.preventDefault();
    //get name from input (in OOP style)
    const name = e.target.elements.name.value;

    //send name to server
    fetch('/api/check-name', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { valid  } = data;
            console.log(valid)
            //print to DOM
            if (valid == false)
                result.innerText = `we dont have this voc`
            else {
                result.innerText = `we have this voc`
              
            }

        })
}

