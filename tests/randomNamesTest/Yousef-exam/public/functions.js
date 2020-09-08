function handleRegister(e) {
    e.preventDefault();
    let { email, password, imgUrl, userName } = e.target.elements;
    email = email.value;
    password = password.value;
    imgUrl = imgUrl.value;
    userName = userName.value;
    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, imgUrl, userName }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const { success } = data;
            if (success) {
                window.location.replace('/login.html')
            } else {
                location.reload();
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
    }).then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                const user = data[0];
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user));
                window.location.replace('/home.html')
            } else {
                location.reload();
            }
        })
}

function getUsers() {
    let user = JSON.parse(localStorage.getItem('user'));
    let email = user.email;

    fetch('/api/getUsers', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            let lst = [];
            let usersHtml = '';
            data.map((item, index) => {
                let itemDate = new Date(item.date);
                let d = new Date();
                var totalMiliseconds = d - itemDate;
                var totalSeconds = totalMiliseconds / 1000;
                var totalMinuts = totalSeconds / 60;
                var minutes = Math.floor(totalMinuts);
                if (true) {
                    lst.push(item)
                    usersHtml += `<div class="img-container"><img src="${item.imgUrl}" id="userimg"> <h2 id="username">${item.userName}</h2></div>`;
                }
            })
            localStorage.setItem("data", JSON.stringify(lst));
            const profile = document.getElementById('user-container');
            profile.innerHTML = usersHtml;
        })

}

function updateUsers() {
    fetch('/api/getUsersWithMe')
        .then(res => res.json())
        .then(data => {
            let usersHtml = '';
            let lst = [];
            data.map((item, index) => {
                let itemDate = new Date(item.date);
                let d = new Date();
                var totalMiliseconds = d - itemDate;
                var totalSeconds = totalMiliseconds / 1000;
                var totalMinuts = totalSeconds / 60;
                var minutes = Math.floor(totalMinuts);
                if (true) {
                    lst.push(item)
                    usersHtml += `<div class="img-container"><img src="${item.imgUrl}" id="userimg"> <h2 id="username">${item.userName}</h2></div>`;
                }
            })
            localStorage.setItem("data", JSON.stringify(lst));
            const profile = document.getElementById('user-container');
            profile.innerHTML = usersHtml;
        })
}

function sortGroups(lst) {
    let groupsHtml = '';
    lst.map((item, index) => {
        groupsHtml += `<div class="grouped">`
        item.map((innerItem, idx) => {
            if (innerItem != undefined) {
                const { userName, imgUrl } = innerItem
                groupsHtml += `<div class="img-container"><img src="${imgUrl}" id="userimg"> <h2 id="username">${userName}</h2></div>`;
            }
        })
        groupsHtml += `</div>`
    })
    const profile = document.getElementById('user-container');
    profile.style.display = "initial"
    profile.innerHTML = groupsHtml;
}

function addMeHandle(e) {
    let user = JSON.parse(localStorage.getItem('user'));
    let email = user.email;
    fetch('api/updateDate', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            localStorage.setItem("user", JSON.stringify(data));
            let buttonHtml = '';
            updateUsers();
            const btn = document.getElementById('button-container');
            buttonHtml += `<form class="createGroup-container" onsubmit="handleGroup(event)">
                           <input class="createGroup" type="submit" value="Create Groups">
                           <input class="groupSizeInput" type="number" placeholder="Group Size" name="groupSize" size="50" required>
                           </form>`;
            btn.innerHTML = buttonHtml;
        })


}

function handleGroup(e) {
    e.preventDefault();
    let lst = JSON.parse(localStorage.getItem('data'))
    let { groupSize } = e.target.elements;
    groupSize = groupSize.value;
    let groupsList = randomNames(lst, parseInt(groupSize))
    sortGroups(groupsList);
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
        return groups;
    } catch (err) {
        console.error(err);
    }
}

function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}
