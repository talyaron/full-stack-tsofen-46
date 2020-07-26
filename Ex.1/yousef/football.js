class Player {

    constructor(Player) {
        this.Player = Player;
        this.left = Player.getBoundingClientRect().left;
        this.top = Player.getBoundingClientRect().top;

    }

    moveRight() {
        if (this.left + 10 <= 1000) {
            this.left = this.left + 10;
            this.Player.style.left = this.left + 'px';
            checkscoore();
        }
    }
    moveLeft() {
        if (this.left - 10 >= 0) {
            this.left = this.left - 10;
            this.Player.style.left = this.left + 'px';
            checkscoore();
        }

    }
    moveDown() {
        if (this.top + 10 <= 500) {
            this.top = this.top + 10;

            this.Player.style.top = this.top + 'px';
            checkscoore();
        }

    }
    moveUp() {
        if (this.top - 10 >= 0) {
            this.top = this.top - 10;
            this.Player.style.top = this.top + 'px';
            checkscoore();
        }

    }


}

class Ball {
    constructor(ball) {
        this.ball = ball;
        this.left = ball.getBoundingClientRect().left;
        this.top = ball.getBoundingClientRect().top;
    }

    move() {
        this.left = getRandomNumber() * 500 + 'px';
        this.ball.style.top = this.left;
        this.top = getRandomNumber() * 1000 + 'px';
        this.ball.style.left = this.top;
    }
}

function handleKey(event) {
    console.log(e)
}

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');

const p1 = new Player(player1);
const p2 = new Player(player2);
const b = new Ball(ball);

function getRandomNumber() {
    return Math.random();
}

function checkscoore() {

    const p1left = p1.Player.getBoundingClientRect().left;
    const p1top = p1.Player.getBoundingClientRect().top;

    const p2left = p2.Player.getBoundingClientRect().left;
    const p2top = p2.Player.getBoundingClientRect().top;

    const bleft = b.ball.getBoundingClientRect().left;
    const btop = b.ball.getBoundingClientRect().top;

    console.log(`p1left ${p1left}  p1top${p1top}`);
    console.log(`p1left ${p1.left}  p1top${p1.top}`);

    
    if ((p1left > bleft - 15 && p1left < bleft + 15) && (p1top > btop - 15 || p1top < btop + 15)) {
        win(p1);
    } else {
        if ((p2left > bleft - 15 && p2left < bleft + 15) && (p2top > btop - 15 || p2top < btop + 15)) {
            win(p2);
        }
    }

}

function win(winner) {
    console.log(`${winner}`)
    b.move();
}

document.body.addEventListener('keyup', function (e) {
    console.log(e.key);
    if (e.key === 'ArrowRight')
        p1.moveRight();
    if (e.key === 'ArrowLeft')
        p1.moveLeft();
    if (e.key === 'ArrowUp')
        p1.moveUp();
    if (e.key === 'ArrowDown')
        p1.moveDown();

    if (e.key === 'd')
        p2.moveRight();
    if (e.key === 'a')
        p2.moveLeft();
    if (e.key === 'w')
        p2.moveUp();
    if (e.key === 's')
        p2.moveDown();
})




