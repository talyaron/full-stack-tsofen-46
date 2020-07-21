function add(a,b)
{
    return a+b;
}
function mult(a,b)
{
    return a*b;
}
console.log(add(2,5));

console.log(mult(2,5));

const multi=function(a,b){ // anonymous function
    return a*b;
}
let x = multi;
console.log(x(8,4));

let y=x;
console.log(y(8,5));

let sub=(a,b)=> //arrow function ES6
{
    return a-b;
}
console.log(sub(25,5));

let sqrt =x =>{
return x*x;
};

let sqr1=x =>x*x;

//TIRGOL
let studentsNames=[
    {gender : 'male',name:"Saleh",age:50},
    {gender : 'female',name:"Lele",age:15},
    {gender : 'male',name:"David",age:10}
];
function StudentLessThan24(CheckArray)
{
let newarray=[];;
CheckArray.map(function (elem,i)
{    
    if(elem.age<=24)
    {
        newarray.push(elem);        
    }});
    return newarray;
}
console.log(StudentLessThan24(studentsNames));