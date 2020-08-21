function registerUser(e) {
//this function makes the registeration methods after getting the specific fields from the html 
    e.preventDefault();
//parameters initializing
    let {user} = e.target.elements;
     user=user.value;
   
    
 
    let {password} = e.target.elements;
    password=password.value;
   

    let {Email} = e.target.elements;
    Email=Email.value;
 

   let {url} = e.target.elements;
   url=url.value;
   

//sending data to the srver 
     fetch('/Register', {
      method: 'POST',
      body: JSON.stringify({ user, password, Email, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
  // if the user registered successfully just take him to the log in page
        if (data[0].success) {
            window.location.replace('/login.html');
        }
        //if the user alredy registered in the past  stay in the same page and show him an alert 
        else{
            window.location.replace('/register.html');
          alert("User Exist on DB Try Again or Login..");
        }
      }) 



}


function LoginUser(e){
    //this function makes all the methods of login 

    e.preventDefault();
    //parameters initialization
    let {Email} = e.target.elements;
    Email=Email.value;

    let {password} = e.target.elements;
    password=password.value;
// chicking from the server if the user exist or not 
    fetch('/LoginUser', {
        method: 'POST',
        body: JSON.stringify({  Email,  password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          //if the user exist take him to the students html
          if (data[0].success) {
            window.location.replace('/students.html');
            
          }
          //if not just show him an alert 
          else{
            alert("Try Again There Was a Problem With Your Information..!!");
          }
          
        })
  
    }


//gitting all the students from database    
function getStudents(){

    fetch('/getStudents', {
        method: 'GET',
        
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
            let students = data;
            console.log(data)
            let studentStr = '';
            //chicking it the user is currently loged dont show him 
            for (let i = 0; i < students[0].doc.length; i++) {
                if(data[0].doc[i].currentloged==0){
                studentStr += `
                 
                <div class="loginclass" ><img src="${students[0].doc[i].url}" 
                style="width: 150px; height:150px ; border-radius: 80px;"></img>
                <p class="text"> ${students[0].doc[i].user}</p></div>`
                }

            }

            const root = document.getElementById('root');
            root.innerHTML = studentStr; 
        })

  
    }


// this function is for the button for adding the current loged user 
    function AddMe(){
        //getting the data from the data base 
        fetch('/getStudents', {
            method: 'GET',
            
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
                let stud = data;
                console.log(data)
                let Str = '';
                //gitting and showing all the users including the current loged user
                for (let i = 0; i < stud[0].doc.length; i++) {
                 
                    Str += `
                     
                    <div class="loginclass" ><img src="${stud[0].doc[i].url}" 
                    style="width: 150px; height:120px ; border-radius: 80px;"></img>
                    <p class="text"> ${stud[0].doc[i].user}</p></div>`
                   
    
                }
               
                 const root = document.getElementById('content');
                root.innerHTML = Str; 
            })
        }
        
        function addme1(){
            window.location.replace('/addme.html');
        }





       ///this function is for the button of creating random group 
       //i used previuos functions tal already done them 
        function CreatRandoms(even) {
            event.preventDefault();
        //initializing parameters and getting the size of each greoup the user insert it 
            let { gSize } = event.target.elements;
            gSize = gSize.value;
            //getting data from the database
            fetch('/getgroup')
                .then(res => res.json())
                .then(data => {
        
                    let groups = [];
                    data.forEach(student => {
                        groups.push(student );
        
                    });
                    //getting random arrays names acording to the size of the group.
                    let myArray = randomNames(data,gSize);
                    console.log(myArray)
        
                    let str = '';
                    myArray.forEach(item => {
                        str += `<div style="border:6px solid black ; background-color:lightgrey; border-radius:80px;">`
                        item.forEach(student  => {
                            if (student  != undefined) {
                                const { user, url } = student ;
                                str+=`<div ><img src="${url}" 
                                            style="width: 120px; height:90px ; border-radius: 80px;"></img>
                                             ${user}</div>`
                            }
        
                        });
                        str += `</div>`
                    });
        
                    document.getElementById('root').innerHTML = str;     
                })
    
        }
        
        //tals functions 
        function randomNames(names, gSize) {
            try {
                const groups = [];
                const lengthNames = names.length / gSize
                // console.log(names[0].userName);
                for (let j = 0; j < lengthNames; j++) {
                    const newGroup = [];
                    for (let i = 0; i < gSize; i++) {
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