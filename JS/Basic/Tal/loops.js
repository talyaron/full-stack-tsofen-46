// for(let i=0;i<10;i++){
//     console.log(i)
// }

// let arr = [1,3,6,9,23,'Yap'];

// for(let i in arr){
//     console.log(arr[i])
// }

// arr.forEach(function(elm){
//     console.log(elm)
// })

// arr.map(function(elm, i){
//     console.log(`${i}: ${elm}`);
// })

// let obj = {a:23, age:25, name:'Sally'};

// for(let i in obj){
//     console.log(`${i}: ${obj[i]}`)
// }

let names=[{name:'Sally', age:25},{name:'Rawad',age:25}, {name:'Nimer',age:22}, {name:'Nivin',age:22}]

names.map(function(student){
    console.log(`${student.name} and age is ${student.age}`);
})

for(let i in names){
    console.log(i)
}

for(let i of names){
    console.log(i)
}