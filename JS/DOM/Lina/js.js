const root = document.getElementById('root');
console.dir(root);
root.innerText = 'Hi all!';
root.style.color = 'pink';

// const ps = document.getElementsByTagName('p');
// console.dir(ps)

// for (let p of ps) {
//     p.style.color = getRandomColor();
// }


/////////////////
let ps = document.querySelectorAll('.big')

console.dir(ps)

ps.forEach(p=>{
    let deg = Math.floor(Math.random() * 360);
    p.style.transform = 'rotate('+deg+'deg)';
})

