function ChangeJokes(){

     document.getElementById("bd").style.background = getRandomColor();
    fetch('/jokes')
    .then(res => res.json())
    .then(data=>{
        let jokesHTML = '';
        const {joke}=data;
              jokesHTML += `<p>${joke}</p>`;
         const root = document.getElementById('yourjoke');
        root.innerHTML = jokesHTML
    })

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


