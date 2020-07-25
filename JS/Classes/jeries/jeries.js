const element = document.getElementById('output');

const doc = new button11(element);


document.body.addEventListener('keyup', e => {

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