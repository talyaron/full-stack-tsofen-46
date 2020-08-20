

const button = document.getElementById("btn");

button.addEventListener("click",e=>{
    fetch('/jokes')
.then(data => data.json()).then(data => {
    const joke =data.joke;
    const jokeParagraph = document.getElementById("jokeContent");

    jokeParagraph.innerHTML=joke; 
});

})