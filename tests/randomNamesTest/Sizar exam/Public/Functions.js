
function getUsers() {
    let id = localStorage.getItem('userID')
    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            renderUsers(data)
        })
}

function getall() {
    fetch('/api/getall')
        .then(res => res.json())
        .then(data => {
            renderUsers(data)
        })

}

function renderUsers(list) {
    let ProfileUsers = '';
    list.map((item, index) => {
        ProfileUsers += `<div id="container"><img src="${item.imageurl}" id="userimg"> <h4   id="username"  >  ${item.name}</h4></div>`;
    })
    const usersprint = document.getElementById("response");
    usersprint.innerHTML = ProfileUsers;
}
function register(e) {
    e.preventDefault();
    let { name, Email, password, imageurl } = e.target.elements;
    name = name.value;
    email = Email.value;
    password = password.value;
    imageurl = imageurl.value;

    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, imageurl }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const { register } = data;
            console.log("Register done")
            if (register) {
                window.location.replace('/Login.html')
            }
        })
}
function openwindow() {
    return window.location.replace('/Game.html')
}


function getUserID() {
    return localStorage.getItem('userID');
}
function login(e) {
    e.preventDefault();
    let { Email, password } = e.target.elements;
    Email = Email.value;
    password = password.value;

    fetch('/api/Login', {
        method: 'POST',
        body: JSON.stringify({ Email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const { login, id } = data;
            console.log(login, id)
            localStorage.setItem('userID', id);
            if (login) {
                window.location.replace('/Participents.html')
            }
        })
}

function myGroups(lst) {
    console.log(lst)
    let myHtml = '';
    lst.map((item, index) => {
        console.log(item)
        myHtml += `<div class="grouped">`
        item.map((innerItem, idx) => {
            if (innerItem != undefined) {
                const { name, imageurl } = innerItem
                myHtml += `<div class="img-container"><img src="${imageurl}" id="userimg"><h2 id="username">${name}</h2></div>`;
            }
        })
        myHtml += `</div>`
    })
    const profile = document.getElementById('response');
    console.log(profile)
    profile.innerHTML = myHtml;
}


function createGroup(e) {
    e.preventDefault();
    let {groupsize} = e.target.elements;
    groupsize = groupsize.value;
    console.log(groupsize)
   
    fetch('/api/getall')
        .then(res => res.json())
        .then(data => {
         
            let newGroups = randomNames(data, groupsize);
            console.log(newGroups)
            myGroups(newGroups)

        })


}
function renderUsersgame(list) {
    let ProfileUsers = '';
    list.map((item, index) => {
        ProfileUsers += `<div id="container1"><img src="${item.imageurl}" id="userimg"> <h4   id="username"  >  ${item.name}</h4><br></div>`;
    })
    const usersprint = document.getElementById("response");
    usersprint.innerHTML = ProfileUsers;
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