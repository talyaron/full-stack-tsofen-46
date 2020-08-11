function handlesubmition(e){
    e.preventDefault();
    
    let {name , url} = e.target.elements
    name = name.value
    url = url.value
    //location.href = URL;
    try{
        fetch('/api/checkuser', {
            method: 'POST',
            body: JSON.stringify({ name,url }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            const {success,id} = data;
            console.log({success},id)
            localStorage.setItem('twitterUserID', id);

        //route
        if(success){
            window.location.replace('/main.html')
        }
        })
        
    }
    
    catch(error){
        console.error();
    }
}

function getUserID(){
    return localStorage.getItem('twitterUserID')
}

function getUser(){
    const user = getUserID();
    fetch('/api/getUser',{
        method: 'GET',
        body: JSON.stringify({ user }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json())
    .then(data=>{
        const {id, login} = data;

        //save id to localstorage
        localStorage.setItem('twitterUserID', id);

        //route
        if(login){
            window.location.replace('/home.html')
        }  

    })

}