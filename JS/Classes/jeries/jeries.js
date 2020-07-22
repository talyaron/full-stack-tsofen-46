const element = document.getElementById('output');

const doc = new button11(element);
doc.goRight()


document.body.addEventListener('keyup', e => {
    console.log(e.key);


    if (e.key === 'ArrowUp') {
        doc.goUp()
    }

    if (e.key === `ArrowLeft`) {
        doc.goLeft()
    }
    if (e.key === `ArrowRight`) {
        doc.goRight()
    }
    if (e.key === `ArrowDown`) {
        doc.goDown()
    }
}
)