const button = document.getElementById('joke-text');
const jokes = document.getElementById('click-button');







jokes.addEventListener('click', (e) => {

    fetch('/jokes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            jokes.innerHTML = data.joke;


        })
    }
)






