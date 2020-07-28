const result = document.getElementById('registerResult');
const resultLogin = document.getElementById('loginGood');
function handleRegister(e) {
    //prevent submit to refresh page
    e.preventDefault();
    //get name from input (in OOP style)
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    //send name to server
    fetch('/api/check-name', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { valid } = data;
            console.log(valid)
            //print to DOM
            if (valid == false)
                result.innerText = `You Have registered succesfully`
            else {
                result.innerText = `Already have account`
            }

        })
}

function login(e) {
    //prevent submit to refresh page
    e.preventDefault();
    //get name from input (in OOP style)
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    //send name to server
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { valid } = data;
            console.log(valid)
            //print to DOM
            if (valid == true)
                resultLogin.innerText = `Log in succesfully`
            else {
                resultLogin.innerText = `Try again`
            }

        })

}
