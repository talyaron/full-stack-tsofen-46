
let arr = [
    {name:"jeries" , age: 23},
    {name:"nimer" , age: 22} ,
    {name:"sizar" , age: 27},
    {name:"sss" , age: 34}
]

 let findAge = (arr) => { //arrow function ES6
    for(let i in arr){
        if(arr[i].age<24){
            console.log(arr[i])
        }
    }
}

console.log(findAge(arr))