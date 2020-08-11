const rot = document.querySelectorAll('.rotate');


rot.forEach(p => {
    const random = Math.random() * 360;
    p.style.transform = `rotate(${random}deg)`


})

