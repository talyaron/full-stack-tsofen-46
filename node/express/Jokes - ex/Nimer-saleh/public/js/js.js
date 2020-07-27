const button = document.getElementById('getJoke');
const jokes = document.getElementById('jokes');


        button.addEventListener('click', (e) => {
            fetch('/jokes')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                jokes.innerHTML = data.joke;
            })
           
        })
    
