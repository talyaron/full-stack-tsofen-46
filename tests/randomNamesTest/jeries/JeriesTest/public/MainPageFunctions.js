function getUserID() {
    return localStorage.getItem('UserID');
}




console.log(getUserID())
getUserPannel()
function getUserPannel() {

    return new Promise((resolve, reject) => {
        const userID = getUserID();

        fetch('/api/userPannel', {
            method: 'POST',
            body: JSON.stringify({ id: userID }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                resolve(data)
                document.getElementById("AddToGroup").innerHTML = `
                <div id="wrapperPannel">
                <img src="${data.user.img}" id="imguser"></img>
                <form onsubmit="HandleParticpent(event)">
                <input type="text" name="particpantImg" value="${data.user.img}" style=" display:none">
                <input type="text" name="particpantname" value="${data.user.name}"  style=" display:none">
                <button type="submit" id="addbtn"> Add me to the group </button>
                <div id="response"></div>
                </div>
                </form>
                <form class ="groupForm" onsubmit="handleGroups(event)" >
                <input type=text name="groupNumber" id="groupNumbers" onclick="showBtn()" placeholder="Number:">
                <button type="submit" id="Create" onclick="Hidebtn()" style="display:none;">Create Group</button> 
                </form>`
            })
            .catch(err => reject(err))

    })


}
function showBtn() {
    document.getElementById('Create').style.display="block";
    document.getElementById('wrapperPannel').style.display="none";
}

function Hidebtn() {
    document.getElementById('groupNumbers').style.display="none";
    document.getElementById('Create').style.display="none";
    document.getElementById('posts').style.display="none";
}


function HandleParticpent(e) {
    e.preventDefault()
    const img = e.target.elements.particpantImg.value;
    const name = e.target.elements.particpantname.value;

    fetch('/addParticpnt', {
        method: 'POST',
        body: JSON.stringify({ img, name }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        const { particpant } = data;
        if (particpant == true) {
            document.getElementById('response').innerText = `Exist`
            document.getElementById('response').style.color = "red";
            document.getElementById('response').style.textAlign = "center";
            document.getElementById('response').style.fontWeight = "bolder";
            document.getElementById('response').style.marginTop = "3px";
        }
        if (particpant == false) {
            location.reload()

        }
    })



}


const getParticepnts = new Promise((resolve, reject) => {
    fetch('/getParticipnts')
        .then(res => res.json())
        .then(user => resolve(user))
});

async function please(number) {
    const participate = await getParticepnts;
    return randomNames(participate, number);
}


const getParticepnt = new Promise((resolve, reject) => {
    fetch('/getParticipnts')
        .then(res => res.json())
        .then(user => resolve(user))
});


(async () => {
    const users = await getParticepnt;

    let usersList = "";
    users.forEach(user => {
        usersList += `
        <div class="container"> 
            <div> ${user.name}</div>
            <img src="${user.img}" id="ParImg"> 
         </div>`


    });

    document.getElementById("posts").innerHTML = usersList;


})();




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

function handleGroups(e) {
    e.preventDefault()
    const number = e.target.elements.groupNumber.value;
    const groups = please(number);
    let currentgroup = "";
    let counter = number;
    
 
    groups.then(data => {
       
        data.map((group => {
            
            group.map((participate) => {
                console.log(participate)
                
                if (participate ) {
                    if (counter === number) {
                        counter = counter - 1;
                        
                        console.log("hellobro")
                        currentgroup += `
                     
                        <div class="GroupPannel">
                        <div class="paricontName"> ${participate.name} </div>
                        <img class="imgParticpnts" src="${participate.img} ">  </img>
                    
                    
                          ` 
                          if(counter==0 ){
                            currentgroup += `</div>`;
                            counter = number;
                            }}
                          else if (counter > 0) {
                        counter = counter - 1;
                        
                        currentgroup += `
                        
                        <div class="paricontName"> ${participate.name} </div>
                        <img class="imgParticpnts" src="${participate.img} ">  </img>
                        
                       
                          `
                          if(counter==0){
                          currentgroup += `</div>`;
                          counter = number;
                          }
                        }

                   
                 


                }
            })



        }))
        document.getElementById('groups').innerHTML = currentgroup;

    })

}

