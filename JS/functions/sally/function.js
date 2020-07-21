let student=[
    {name:'sally',age:25},
    {name:'lina',age:22},
    {name:'moran',age:20}
]
const arrS=[];

const studentfunc = (arr) => { //arrow function ES6
    arr.forEach(function(elm){
       if(elm.age<24){
         arrS.push(elm) 
       }
    })
    return arrS;
}
const s=studentfunc(student);

s.forEach(function(elm){
    console.log(elm)
})