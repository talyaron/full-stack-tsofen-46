const result = document.getElementById('result');

function checkName(e) {
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
    .then(res=>res.json())
    .then(data=>{
        const {isInNames} = data;
        

        //print to DOM
        result.innerText = isInNames


    })

}