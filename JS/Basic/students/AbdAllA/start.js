let fn1='mrshood'
let fn2='mhmood'

let ln1='ayob'
let ln2='ayob'

let names={fn1:'jh', fn2:'jh' , age1:54 , age2:'5454'}

/*if(names.age1 == names.age2 ){
    console.log('it is true')
}
else{
    console.log('NOT true ')
}
*/

let sizar ={name:'sizar',gender:'MALE',age:23} ; //key:value
let salh = {name: 'salh',gender:'MALE',age:30};
let moran = {name:'moran', gender:'FEMALE',age:24}; 

let arr1 = [sizar,salh,moran];

// for(let i in arr){
//     console.log('NAME : ',arr[i].name , 'gender :' ,arr[i].gender);
// }

// arr.map(function(element){
//     console.log(element.name,"is" , element.gender)
// })

// function 

let arr2= [];
function check(arr){
    console.log('this is the list of students under 24:')
    for(let i of arr){
        if(i.age<=24)  arr2.push(i);

    }
    return arr2
}

console.log(check(arr1))

