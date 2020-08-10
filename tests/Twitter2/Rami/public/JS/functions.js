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
            localStorage.setItem = 
        })
        
    }
    
    catch(error){
        console.error();
    }
}