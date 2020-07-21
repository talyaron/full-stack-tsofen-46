var x=3;
let y=5;
const z=30;

x=[20,12]; //array

console.log(x);
y={a:1, y:2, z:3};  //key:value

y='aabs'; //string

let a=true; //boolean
let q=undefined;
let d=null;

// if

if(d){
    console.log('a is true');
}
else{
    console.log('a is false');
}

a ? console.log('true...') : console.log('false...');


// false value: 0, null, undefined, false, NaN,''; 

// operators

if(true && true){
    console.log('this is really true!!')
}

if(50 == '50'){
    console.log('this is really true!!')
}


var Mahmoud = {firstName:"Mahmoud", lastName:"Ataria", age:25};
var Morad = {firstName:"Morad", lastName:"Ataria", age:'25'};


if(Mahmoud.lastName == Morad.lastName){
    console.log('same last name');
}
else{
    console.log('not same last name');
}

if(Morad.age == Mahmoud.age ){  
    console.log('same Age');
}

