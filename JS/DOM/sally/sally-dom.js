const root = document.getElementById('root');
console.dir(root);
let ps = document.querySelectorAll('.rotate')

console.dir(ps)

ps.forEach(p=>{
    
    let deg=getRandomdeg()
    p.style.transform = 'rotate(60deg)';
})

console.dir(ps)

function getRandomdeg() {
  
    
        return( Math.floor((Math.random() * 360) + 1));
   
    
}