var x=3;
let y=6;
const z=23;

let age1=25;
let age2='25';

let name1='Sally';
let lastName1='Sarbokh';

let name2='Monera';
let lastName2='Saad';
x=[23,12];//array

console.log(x);
y={a:1,y:2,z:23} //key:value

y='aaaa'//string

let a=true //boolean
let q=undefined;
let d=NaN;

// if

if(d){
    console.log('a is true')
}/*else if(true){
    // asdas
}*/else{
    console.log('a is false')
}

a?console.log('true...') : console.log('false...');

// false value:0 , null, undifined ,false , NaN, '';

//operators
// and :&& , or: || , not equal: != 
/*if(true && true){
    console.log('this is really true');
}

if(42 == '42'){//we can right === or !==
    console.log('42 is equal to .42. ' );
}

if(!false){
    console.log('not false!!');
}*/

if(lastName1==lastName2){
    console.log('You are relatives');
}else{
    console.log('You are Not relatives!!');
}

if(age1!=age2){
    console.log('You DONT have the same age!');
}else{
    console.log('You have the same : '+ age1+ ' is equal to '+age2);
}




