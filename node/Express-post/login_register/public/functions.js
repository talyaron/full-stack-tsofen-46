function checkUser(e){
       //prevent submit to refresh page
       e.preventDefault();

       //get name from input (in OOP style)
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

   //send name to server

    fetch('/addUserDB', {
        method: 'POST',
        body: JSON.stringify({name,password}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            const {ValidUser} = data;
            if(ValidUser==true){
                document.body.style.backgroundColor="green";
            }else{//log in 
                document.body.style.backgroundColor="red";
                window.location.replace('/login.html')

            }
            console.log(ValidUser);
           
        })
}

function logInUser(e){
          //prevent submit to refresh page
          e.preventDefault();

          //get name from input (in OOP style)
       const name = e.target.elements.name.value;
       const password = e.target.elements.password.value;
      
      //send name to server
   
       fetch('/LogInUserDB', {
           method: 'POST',
           body: JSON.stringify({name,password}),
           headers: {
               'Content-Type': 'application/json'
           },
       }).then(res => res.json())
           .then(data => {
               const {ValidUser} = data;
               if(ValidUser==true){
                   document.body.style.backgroundColor="green";
               }else{//log in 
                   document.body.style.backgroundColor="red";
                   window.location.replace('/login.html')
   
               }
               console.log(ValidUser);
              
           })
}