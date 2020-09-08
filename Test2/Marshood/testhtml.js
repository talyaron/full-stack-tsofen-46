
function func1(event) {
    alert("asd")
    event.preventDefault();
    console.log(event)
    let name = event.target[1].value;
    console.log(name)

}
function func2() {
    alert("func 22")
}

testFetch()
function testFetch() {

    fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: "email1"
            })
    })
    .then(response => response.json())
    .then(data =>
        {
            console.log("data 29")
            // console.log(data)
            // console.log(data)
        })   .catch((error) => {
            console.error('Error:', error);
        });




}


/**
 *    fetch('/LogOutUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
            })
    })
        .then(response => response.json())
        .then(data => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });
 *
 */