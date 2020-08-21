///////////////////////////////////////////////////////////////////////////////////
//register:
function registerUser(e) {
    e.preventDefault();
    // const { username, UserLName, Useremail, img, Password } = e.target.elements;
    // let { name } = e.target.elements.name.value;
    // let { email } = e.target.elements.email.value;
    // let { password} = e.target.elements.password.value;
    // let { profileimg } = e.target.elements.profileimg.value;
    let {name} = e.target.elements;
    name=name.value;
    let {email} = e.target.elements;
    email=email.value;
    let {password} = e.target.elements;
    password=password.value;
    let {profileimg} = e.target.elements;
    profileimg=profileimg.value;
    fetch('/Register', {
        method: 'POST',
        body: JSON.stringify({name,password,email,profileimg}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
    
          if (data[0].success) {
              window.location.replace('/login.html');
          }
          else{
              window.location.replace('/index.html');
            alert("User Exist on DB Try Again or Login..");
          }
    
        })
    
    }
 ////////////////////////////////////////////////////////////////////////////////////////////////
//loginpage:
    function loginpage(e) {
        e.preventDefault();
        let {email} = e.target.elements;
        email=email.value;
        let {password} = e.target.elements;
        password=password.value;
            fetch('/loginpage', {
              method: 'POST',
              body: JSON.stringify({email,password }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data[0].success) {
                    window.location.replace('/participents.html');
                    // getparticipents();
                }
                else{
                    alert("wrong,try again")

                }
        
              })
        
    }
/////////////////////////////////////////////////////////////////////////////////////////
//get users:
function getparticipents() {
    // e.preventDefault();
        fetch('/getparticipents', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            let participents = data;
            console.log(participents);

            let participentsStr = '';
            for (let i = 0; i < participents[0].doc.length; i++) {
                if(data[0].doc[i].flag==false){
                participentsStr += `<div class="imgdata" style="width:149px; height: 56px; border-radius: 8px;border: solid 1px #808080;box-shadow: 0px 2px 4px #f8c822;display:flex">
                <img src="${participents[0].doc[i].profileimg}" 
                style="width: 50px; height:50px ; border-radius: 25px;"></img>
                 ${participents[0].doc[i].name}</div>`
                 
                }
            
                
            }

            document.getElementById('Root').innerHTML = participentsStr;

            
        })
}
/////////////////////////////////////////////////////////////////////////////////////////////////
//open new window:
function newwindow(){
    window.location.replace('/buttonfun.html');
}
function buttenclick() {
    // e.preventDefault();
        fetch('/getparticipents', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            let participents = data;
            console.log(participents);

            let participentsStr = '';
            for (let i = 0; i < participents[0].doc.length; i++) {
                participentsStr += `<div class="imgdata" style="width:149px; height: 56px; border-radius: 8px;border: solid 1px #808080;box-shadow: 0px 2px 4px #f8c822;display:flex ;">
                <img src="${participents[0].doc[i].profileimg}" 
                style="width: 50px; height:50px ; border-radius: 25px;"></img>
                 ${participents[0].doc[i].name}</div>`
                 
                
            }
            document.getElementById('Root').innerHTML = participentsStr;

            
        })
}
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////randomname////////////////////////////////////////////////////
function randomname(even) {
    event.preventDefault();

    let { groupsize } = event.target.elements;
    groupsize = groupsize.value;
    
    fetch('/groupRandom')
        .then(res => res.json())
        .then(data => {

            let groupArray = [];
            data.forEach(item => {
                groupArray.push(item);

            });

            let randomName = randomNames(data,groupsize);
          

            let rootButtonFun = '';
            randomName.forEach(item => {
                rootButtonFun += `<div class="rootButtonFun" style="border:5px solid black">`
                item.forEach(users => {
                    if (users != undefined) {
                        const { name, profileimg } = users;
                        rootButtonFun+=`<div><img src="${profileimg}" 
                        style="width: 50px; height:50px ; border-radius: 25px;"></img>
                                     ${name}</div>`
                    }

                });
                rootButtonFun += `</div>`



            });

            document.getElementById('Root').innerHTML = rootButtonFun;

        })



}

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////randomname check//////////////////////////////////////////////
function randomNames(names, groupSize) {
    try {
        const groups = [];
        const lengthNames = names.length / groupSize
        let afterRandom = '';
        let iner = '';
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
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////getrandomname////////////////////////////////////////////////////
function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}

      
    
        