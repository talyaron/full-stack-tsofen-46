
const a = {
    a:1, 
    b:3, 
    c:'Tal', 
    add:(a,b)=> a+b //method
}

const arr = ['aa']

//by ref and by value

let x = 4;
let y = x;
x = 2;
console.log(y)

const obj = {x:4}
const obj2 = obj

obj.x = 2;

console.log(obj2.x);


console.log(arr);

const shirt245 = {size:'xl',color:'pink',model:'nike', price:5}

//Shein
const shirtShein245 = {...shirt245};

shirtShein245.price = 11;


const shirtFactory245 = {...shirt245};

shirtFactory245.price = 450;

console.log(shirtShein245.price);

console.log(shirtFactory245.price);

console.log(shirt245.price);

let {price, size} = shirtShein245;

console.log('The price is', price, 'and size', size)

price = 4000;

console.log(shirtShein245)


const lamps = [1,2,3,45,6,7]
const numbers = [...lamps]
console.log(numbers)