document.getElementById("ShowOnlineUsers").style.display = "none";
addTheuser();
getOnlineUsers();
let dataArray = "";
function getOnlineUsers() {
    console.log("getOnlineUsers  ");
    fetch('/GetOnlineUsers')
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            document.getElementById("loader").style.display = "none";
            document.getElementById("ShowOnlineUsers").style.display = "block";
            // document.getElementById("MainBox").style.height = "1000px";
            htmlinnerText = document.getElementById("ShowOnlineUsers_inner").innerHTML;
            const newHtmlAppend = "";
            let sizeOFData = data.length;
            if (sizeOFData >= 9) {
                sizeOFData = sizeOFData / 9;
                sizeOFData = sizeOFData * 600;
            } else if (sizeOFData > 0 && sizeOFData < 9) {
                sizeOFData = 600;
            } else if (sizeOFData == 0) {
                sizeOFData = 600;
            }
            document.getElementById("MainBox").style.height = sizeOFData + "px";
            document.getElementById("ShowOnlineUsers_inner").innerHTML = "";
            dataArray = data;
            data.forEach(element => {
                const newHtmlAppend = ` <div class="Users" id="user1">
                <div>
                    <br>
                    <img
                        src="${element.img}">
                        ${element.name} </div>
            </div>`;

                document.getElementById("ShowOnlineUsers_inner").innerHTML += newHtmlAppend;
            });
        })

}
reloadData = setInterval(function () {
    getOnlineUsers()
}, 5000);

function addTheuser() {
    let username = localStorage.getItem("name");
    let imguser = localStorage.getItem("img")
    document.getElementById("userAddMe").innerHTML = `<div class="MyUser" id="MyUser" onclick="UserClickedBtn()">
     <br>
     <img src="${imguser}">
      ${username}Add me </div>
</div>`;

}

function LogOutBtn() {
    let email = localStorage.getItem("Email")

    fetch('/LogOutUser', {
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
            console.log('Success:', data);
            if (data[0].success) {//true

                location.replace("index.html");
            }
            else {
                // document.getElementById("AlertBox").style.display = "block";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
// to show the user box
function UserClickedBtn() {

    // add the user to online user table to be able 
    fetch('/addOnlineUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                UserID: localStorage.getItem("UserID"),
               
            })
    })
        .then(res => res.json())
        .then(data => {
                 

             });
        

    document.getElementById('userAddMe').innerHTML = `<br>
   <div> <button id="CreateGBtn" onClick="StartRandomGropus()" disabled >Create Grooup</button></div>
   <br>
   <div id="txtn">Number
   <input id="numberOfGroup" type="number" value="Insert number" oninput="EnableBtn()" >
   </div>`
}
// after pressing create gropus btn this method start
function StartRandomGropus() {
    clearInterval(reloadData);
    document.getElementById("ShowOnlineUsers_inner").style.display = "none";
    document.getElementById("CreateGBtn").style.display = "none";
    document.getElementById("txtn").style.display = "none";
    document.getElementById("numberOfGroup").style.display = "none";
    
    NewData = {};
    let gropuNumber = document.getElementById("numberOfGroup").value;
    newData = randomNames(dataArray, gropuNumber);
    ShowGropusOnScreen(newData);
}
// this method to show the grops on the screen
function ShowGropusOnScreen(Data) {
     let newHtmlAppendGropus = "";
    Data.groups.forEach(Groupp => {
        newHtmlAppendGropus = "";
         Groupp.forEach(element => {
             if(element===undefined){return false;}
             console.log("109109" +element)
            const newHtmlAppend = ` <div class="Users" id="user1">
            <div>
                <br>
                <img
                    src="${element.img}">
                  sss  ${element.name} </div>
        </div>`;
            newHtmlAppendGropus += newHtmlAppend;
            // document.getElementById("ShowOnlineUsers_Gropus").innerHTML += newHtmlAppend;
        });
        console.log("out")
        document.getElementById("ShowOnlineUsers_Gropus").innerHTML += `<div class="GroupShowBox">${newHtmlAppendGropus}</div>`
        // alert("newHtmlAppendGropus" + newHtmlAppendGropus)
        
        setTimeout(function(){


        }, 1000); 
    });


}
// this function to allow the button after insert number of elemnts 
function EnableBtn() {
    document.getElementById("CreateGBtn").removeAttribute("disabled");
}
// this method to get the random groups
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
        console.log(groups)
        return ({ groups });
    } catch (err) {
        console.error(err);
    }
}
function getRandomName(names) {
    const arraySize = names.length;
    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;
    return indexOfName;
}

