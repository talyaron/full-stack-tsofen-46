const rotate = document.querySelectorAll('.rotate');
console.dir(rotate);

rotate.forEach(r => {
    let random = Math.random()*360;
    let torotate = 'rotate('+random+'deg)';
    r.style.transform = torotate;
})