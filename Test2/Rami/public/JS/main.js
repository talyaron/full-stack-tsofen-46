var members = document.getElementById('names')
var secs = 3000
var check = true
var arr1 = []
var flag = true

function randomNames(names, groupSize) {
    try {
        const groups = [];
        const lengthNames=names.length / groupSize

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
            groups.push(names.name);
        }

        return groups
    } catch (err) {
        console.error(err);
    }
}

function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}


function renderUsers(){
    
    fetch('/renderUsers', {
    }).then(res=>res.json())
    .then(data => {
             const {arr} = data
             let membersarray = ''
             arr.map((user,index)=>{
                if(globalThis.flag){
                 globalThis.arr1.push(user)
                }
                 membersarray +=  `<div id='member${index}' class='member'><div class='img'><img src='${user.img}'/></div><div class='name'>${user.name}</div></div>`
               })
               globalThis.members.innerHTML= membersarray
               
   })
   if(globalThis.arr1.length>0){
       globalThis.flag=false
   }
   console.log(globalThis.arr1)
    
}

function keepRendering(){
    if(check){
        renderUsers();
    }else{
        return
    }
    setTimeout(keepRendering, globalThis.secs);
}

keepRendering();

 function Add(){
    const x = document.getElementById('footer')
    x.innerHTML =
    "<div class=`createGroups`><button id='btn-gr' class='btn' onclick='createGroups(event)'>Create groups</button></div><div class='groupSize'><input placeholder='group size' type='text' id='groupSize'/></div>";
    const user = localStorage.getItem('user')
    fetch('/add', {
        method: 'PUT',
        body: JSON.stringify({user}),
        headers: {
            'Content-Type': 'application/json'
        },
     }).then(res=>res.json())
     .then(data => {
         console.log(data)
         renderUsers();

    })
}

function createGroups(e){
    const number = document.getElementById('groupSize').value
    var memberswrapper = document.getElementById( 'names' );

    globalThis.check = false
    const groups = randomNames(globalThis.arr1,number)
             const flexnum = 100/groups[0].length-15;
             let temparr = ""
             for (let index = 0; index < groups.length; index++) {
                 temparr += `<div class=row>`
                 for (let j = 0; j < groups[0].length; j++) {
                     console.log(j)
                     temparr += `<div id='member${index+j}' class='member'><div class='img'><img src='${groups[index][j].img}'/></div><div class='name'>${groups[index][j].name}</div></div>`
    
                 }
                 temparr += `</div>`
                }
                memberswrapper.style.flexDirection = "column";
             memberswrapper.innerHTML = temparr

             var css = ''
             for (let index = 0; index < memberswrapper.childElementCount; index++) {
                css += `.row { flex: 1 0 ${flexnum}%; }`
             }
             
            head = document.head || document.getElementsByTagName('head')[0]
            style = document.createElement('style');


            head.appendChild(style);

            style.type = 'text/css';
            if (style.styleSheet){
             style.styleSheet.cssText = '';
            } else {
            style.appendChild(document.createTextNode(css));
            }
            document.getElementById('btn-gr').style.display = "none";


}