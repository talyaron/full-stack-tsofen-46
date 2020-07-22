console.dir(document)

const button = document.getElementById('button');

button.addEventListener('mouseover', e => {
    console.log(e)
    const x= getNumber(200);
    const y = getNumber(200);
    button.style.top = `${y}px`;
    button.style.left = `${x}px`;
})

function getNumber(max){
    return Math.random()*max
}