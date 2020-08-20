function login(e){
    e.preventDefault();
    
    const {email,password} = e.target.elements
    const email1 = email.value
    const password1 = password.value

    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({email1,password1}),
        headers: {
            'Content-Type': 'application/json'
        },
     }).then(res=>res.json())
     .then(data => {
                    
        const {user} = data   
        localStorage.setItem('user',user)
        window.location.href = "main.html";
    })
    
}

function register(e){
    e.preventDefault();
    
    const {email,password,img,name} = e.target.elements
    const email1 = email.value
    const password1 = password.value
    const img1 = img.value
    const name1 = name.value
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({email1,password1,img1,name1}),
        headers: {
            'Content-Type': 'application/json'
        },
     }).then(res=>res.json())
     .then(data => {
            console.log('reg')
            window.location.href = "index.html";
        
    })
    
}