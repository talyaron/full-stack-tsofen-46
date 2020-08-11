let ps = document.querySelectorAll('.rotate')






ps.forEach(p=>{
    const a = Math.random()*360;
    p.style.transform='rotate('+a +'deg)'
})