const button = document.getElementById('getJoke');
const jokes1 = document.getElementById('jokes');


        button.addEventListener('click', (e) => {
            fetch('/jokes')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                jokes1.innerHTML = data.joke;
            })
           
        })
    
