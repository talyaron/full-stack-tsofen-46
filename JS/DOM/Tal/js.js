const root = document.getElementById('root');
console.dir(root);
root.innerText = 'Hi all!';
root.style.color = 'pink';

// const ps = document.getElementsByTagName('p');
// console.dir(ps)

// for (let p of ps) {
//     p.style.color = getRandomColor();
// }


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// const bigs = document.getElementsByClassName('big');

// for(let big of bigs){
//     big.style.fontSize = '3rem'
// }

let ps = document.querySelectorAll('.big')

console.dir(ps)

ps.forEach(p=>{
    p.style.color = getRandomColor();
})

