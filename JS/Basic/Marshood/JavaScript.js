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
names22={ st1:{firstname : 'mahmoud' , lastname:'ataria '}, st2 :{firstname : 'morad' , lastname:'ataria '}}

if(names.lastname==names2.lastname)
{
    console.log("true mah");

}
if(names22.st1.lastname==names22.st2.lastname)
{
    console.log(" 2true mah");

}