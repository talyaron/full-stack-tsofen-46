var x=3;
let y=6;
const z=23;

x=[23,12]; //array

//console.log(x);
y={a:1, b:2,z:3}; // key:value
y='aaaa'// string 
let a=true ;// boolena 
let q= undefined;
let d=null;

//if 
if(a)
{
    //block
//console.log(" a is true");
}else if(!a){
   // console.log(" a is true");

}
else{
    //console.log("holla");
}

// false value : 0, null , undeifined, false, NaN, '' -> empty string ,
// true value : {},ture , 1 .... 


//opratros

if(true && true)
{
    //console.log(" this is realy  true!!");
}
if(true || true)
{
   // console.log(" this is realy  true!!");
}
if(true !=false )
{
   // console.log(" true not equal false haha!");
}
if(42 == '42' ) // check if equal --> true 
{
    //console.log(" equal");
}
if(42 === '42' ) // check the type 
{
   // console.log(" equal");
}if(!false) //
{
   // console.log("true");
}

// 
names={ firstname : 'mahmoud' , lastname:'ataria '}
names2={firstname : 'morad' , lastname:'ataria '}
names22={ 
     st1:{firstname : 'mahmoud' , lastname:'ataria '},
     st2 :{firstname : 'morad' , lastname:'ataria '}}

if(names.lastname==names2.lastname)
{
   // console.log("true mah");

}
if(names22.st1.lastname==names22.st2.lastname)
{
   // console.log(" 2true mah");

}

let age=23;
let name='jiris'
let percentage= .4;
//console.log('your name is '+name + ', and your age is :'+age +percentage);
//console.log('your name is',name , ',and your age is :',age,percentage); // , adding space 
//console.log('your name is '+name + ', and your age is :'+(age +percentage));
//console.log('your name is',name , ',and your age is :',age+percentage); // , adding space 
//console.log(`your name ${name }, and your age is ${age +percentage}`);

// *********

let xx=40
 switch(x){
    case 80:
        console.log('Good grade');
        break;
    case 90:  
        console.log('very good grade');
        break;
    case 100:
        console.log('excelent');
        breake;
    default:
        console.log('Didint get it ');
 }

 let yy={
     80:'Good grade',
     90:'very good grade',
     100:'excelent'
 }
 //console.log(yy[xx]);

 if(xx<60)
 {
    var result ="Grade is F";
}
    console.log(result);
//********** */
console.log("for....");
let array=[2,5,6,9,8,4];
for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    //console.log(array[index]);

}
array.forEach( function (elem)
{    //console.log(elem);

});

array.map(function (elem,i)
{
  //console.log(`${i}:${elem}`);
});
let obj={
a:23,
age:25,
name:'sally'
};
for (let i in obj) {
    //console.log(`${i}:${obj[i]}`); 
}
for (let i of obj) {
    //console.log(`${i}:${obj[i]}`); 
}
let studentsNames=[
    {gender : 'male',name:"Saleh",age:50},
    {gender : 'female',name:"Lele",age:25},
    {gender : 'male',name:"David",age:10}
];
studentsNames.map(function (elem,i)
{ console.log(elem)

    if(elem.gender== 'male' &&elem.age>=30)
    {
        console.log(`your name is ${elem.name} and your age is ${elem.age} you are a adult man`);
    }
    else if (elem.gender== 'male' &&elem.age<30)
    {
        console.log(`your name is ${elem.name} and your age is ${elem.age}`);

    }
    else if( elem.gender=='female' )
    {
        console.log(`your name is ${elem.name} and you are a young girl `);

    }
  //console.log(`${i}:${elem}`);
});