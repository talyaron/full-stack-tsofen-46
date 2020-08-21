

function handleRegister(e) {

    e.preventDefault();
    let {email, name, password,imge } = e.target.elements;
    email=email.value;
    name = name.value;
    password = password.value;
    imge=imge.value;

    console.log(email,name,password,imge);

    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, name, password,imge }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
        .then(data => {
            const {registred } = data;
             if(registred == true){
                console.log(registred);
                window.location.replace('/login.html');
             }
             else { 
                 console.log("Exist");
                document.getElementById('root').innerText = `Exist` ;
                document.getElementById('root').style.color = "red"; 
                window.location.replace('/login.html') ;
            
            } 
        })

}


function handleLogin(e) {

    e.preventDefault();
    let {email,password } = e.target.elements;
    email=email.value;
    password = password.value;

    console.log(email,password);

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
        .then(data => {
            const { id, validAdmin } = data;
            console.log(data);

            localStorage.setItem('ParticipentID', id);

            if (validAdmin == true) { 
                window.location.replace('/parts.html') 
            } 
            if (validAdmin == false) { 
                document.getElementById('root1').innerText = `Wrong Email/Password` 
                document.getElementById('root1').style.color = "red"; 
 
            } 

           
        })

}

function getUserID() {
    return localStorage.getItem('ParticipentID');
}
 

function getUserPannel() { 
 
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
                let NewName=data.user.name;
                let NewIMG=data.user.imge;
                document.getElementById("profile").innerHTML = ` 
                <div id="wrapperPannel"> 
                <form onSubmit="HandleParticpent('${NewName}','${NewIMG}')"> 
                <button type="submit" id="addbtn"> <img src="${data.user.imge}" id="imguser"></img>  Add me to the group </button> 
                
                </form>
                </div>  ` 
            }) 

} 

function HandleParticpent(name ,imge) { 

    fetch('/addParticpnt', { 
        method: 'POST', 
        body: JSON.stringify({ imge:imge, name:name }), 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
    }) 
    .then(res => res.json())
        .then(data => {
            const {isParticpent } = data;
             if(isParticpent == false){
                console.log(isParticpent);
               
             }
             else { 
                 console.log("Exist");
                document.getElementById('msg').innerText = `Exist` ;
                document.getElementById('msg').style.color = "red"; 
            
            } 
        })
} 

getParticepnt();

function getParticepnt(){


    fetch('/api/Part')
    .then(res => res.json())
    .then(data => {
        let itemHTML = '';
        console.log(data)
        newDataToshow=data;
        data.forEach(paritem=>{
          
            itemHTML +=  buildpart( paritem.name, paritem.imge)
          
    });
         
        
        const menucard = document.getElementById('showNames');
        menucard.innerHTML = itemHTML;
    })
 
    

}


function buildpart(name ,imge) {
    return `

    <div class="Namescontainer">  
    <div> ${name}</div> 
    <img id="imguser" src="${imge}">  
 </div>` 
    
}

