const e = require("express");

function handleRegister(e) {

    e.preventDefault();
    let { email, name, password, img } = e.target.elements;
    email = email.value;
    name = name.value;
    password = password.value;
    img = img.value;

    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, name, password, img }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const { register } = data;
            if (register) {
                window.location.replace('/login.html')
            }

        })

}



function handleLogin(e) {

    e.preventDefault();
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const { login, id } = data;

            localStorage.setItem('userId', id);

            if (login) {
                window.location.replace('/addme.html')
            }

        })

}



function getparticipent() {

    let id = localStorage.getItem('userId');

    fetch('/api/participents1')
        .then(res => res.json())
        .then(data => {
            let userHTML = '';
            data.forEach(user => {
                if (user._id != id) {
                    userHTML += participent(user.name, user.img)
                }
            });


            const root = document.getElementById('root');
            root.innerHTML = userHTML;
        })


}


function getimg() {
    let id = localStorage.getItem('userId');
    fetch('/api/getimg', {
        method: 'POST',
        body: JSON.stringify({ id}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const { img} = data.img;

            const img1 = document.getElementById('img1');
            img1.innerHTML = user.img;
            
            
        })
        return (img) ;
        

}




function participent(name, img) {
    return `

        <div class="participent">
            <img src="${img}" width="30px" height="30px">
            <p> ${name} </p>
        </div> `

}


function gotoadd() {
    window.location.replace('/random.html');
}


function newParticipent() {

    fetch('/api/participents1')
        .then(res => res.json())
        .then(data => {
            let userHTML = '';
            data.forEach(user => {

                userHTML += participent(user.name, user.img)

            });


            const root2 = document.getElementById('root2');
            root2.innerHTML = userHTML;
        })

}



function createGroup() {

    let numberOfpar = document.getElementById('numberOfpar');
    numberOfpar = numberOfpar.value;

    fetch('/api/group')
        .then(res => res.json())
        .then(data => {
            
            let groups = [];
            data.forEach(user => {
                groups.push(user);

            });

            let newGroups = randomNames(data, numberOfpar);
            console.log(newGroups)
            
            let temp = '';
            newGroups.forEach(group => {
                
                // counter =counter+1 ;
                // userHTML += counter ;
                temp+=`<div class="temp">`
                group.forEach(user => {
                    if (user != undefined) {
                        const { name, img } = user;
                        temp += participent(name, img);

                    }
                
                });
                temp+=`</div>`
                
                

            });


            const root2 = document.getElementById('root2');
            root2.innerHTML = temp;
        })



}




function randomNames(names, groupSize) {
    try {
        const groups = [];
        const lengthNames = names.length / groupSize

        for (let j = 0; j < lengthNames; j++) {
            const newGroup = [];
            for (let i = 0; i < groupSize; i++) {
                const indexOfName = getRandomName(names);

                newGroup.push(names[indexOfName]);
                names.splice(indexOfName, 1);
            }

            groups.push(newGroup);
        }

        if (names.length > 0) {
            groups.push(names);
        }

        return (groups);
    } catch (err) {
        console.error(err);
    }
}

function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}

