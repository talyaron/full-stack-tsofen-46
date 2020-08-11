

const rotate = document.querySelectorAll('.rotate')


rotate.forEach(r=>{
    let random =(Math.random()*360 );
    let deg = 'rotate(' + random + 'deg)';
    r.style.transform = deg ;

})