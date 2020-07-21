console.log(add(2,6));
console.log(sqr(3));

function add(a, b) {
    return a + b
}

const multi = function (a, b) { //anonymous function
    return a * b;
}

let x = multi;

console.log(add(2, 5))
console.log(multi(2, 5))
console.log(x(8, 4))

let y = x;
console.log(y(12, 4))

let sub = (a, b) => { //arrow function ES6
    return a - b;
}

let sqr = x => x*x;


console.log(sqr(10))

