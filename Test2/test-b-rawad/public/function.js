function openregister(){
    window.location.replace('/register.html')
}


function handleRegister(e) {

    e.preventDefault();
    let {email, name, password ,userimg} = e.target.elements;
    email=email.value;
    userimg=userimg.value;
    name = name.value;
    password = password.value;

    console.log(name,password,userimg,email)

    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, name, password ,userimg}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
   
    window.location.replace('/index.html');
 
}


function handleLogin(e){

    e.preventDefault();
    let {email, password} = e.target.elements;
    email=email.value;
    password = password.value;

    console.log(password,email);
    
    
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
        .then(data => {
            const {  login,email } = data;

         console.log(login,email);
         

        if(login){
            localStorage.setItem('Useremail', email);
            window.location.replace('/random.html');
            
            
    }
    

        })

    e.target.reset();
}



// window.setInterval(function(){
//     getgroup()
//   }, 2000);




function getUseremail() {
    return localStorage.getItem('Useremail');
}

function addname(){
   
    let email = getUseremail();
    console.log(email);
    
    fetch('/api/group', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    getgroup();

    const addbtn  =document.getElementById('add');
    const creategroup =document.getElementById('creategroup');
    addbtn.style.display='none';
    creategroup.style.display='block'

}

function getgroup(){

    console.log('sa') 

    fetch('/api/getgroup')
    .then(res => res.json())
    .then(data => {
        let itemHTML = '';
        let realdate = new Date();
        let realtime=realdate.getTime();
        console.log(realtime);

        data.forEach(element => {
            
            if(true){
                itemHTML +=   buildcard(element.name,element.userimg) 
                    
            }
        

        const groupcard = document.getElementById('groupcard');
        groupcard.innerHTML = itemHTML;
    })
    })
}


function buildcard(name,userimg) {
    return `

    <div class="card">
        <div class="card-img">
            <img src="${userimg}" ">
        </div>

        <div class="card-name">
          <p> ${name}</p>
        </div>

    </div>
    `
}


function handlecreate(e){

    e.preventDefault();
    let {groupnum} = e.target.elements;
    groupnum=groupnum.value;
    console.log(groupnum);

    fetch('/api/getgroup')
    .then(res => res.json())
    .then(data => {
     console.log(data);
     let group=[];
     let realdate = new Date();
        let realtime=realdate.getTime();
     data.forEach(element => {
            
        if(true){
            group.push({name:element.name,userimg:element.userimg})
            console.log(group)
                
        }
    })

     const lastgroups=randomNames(group, groupnum);
    
   

    const groupcard = document.getElementById('groupcard');
    groupcard.style.display='none';

    const groups = document.getElementById('groups');
 
    let itemHTML = '';
    let groupHtml='';

    console.log(lastgroups);
   
 lastgroups.forEach(e=>{
   
    e.forEach(ele=>{
        if(ele===undefined){
            itemHTML+=  buildcard('no one','https://static.thenounproject.com/png/17241-200.png') ;
        }
        else{   
           
            itemHTML+=  buildcard(ele.name,ele.userimg) ;
        }
       })
    
       
   })
   groups.innerHTML=itemHTML;
      
groups.style.gridTemplateColumns=`repeat(${groupnum},1fr)`

  
  
})
  

}


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
            groups.push(names);
        }

        console.log(groups);

        return(groups)
    } catch (err) {
        console.error(err);
    }
}


function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}