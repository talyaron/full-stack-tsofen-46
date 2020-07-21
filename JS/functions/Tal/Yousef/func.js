function lessThan24(arr){
    const newStudents = []

    arr.map(function(element){
        if(element.age < 24){
            newStudents.push(element)
        }
    })
    return newStudents;
}


let arr=[
    {name:'Sizar', age:80},
    {name:'Saleh', age:10},
    {name:'Moran', age:25},
    {name:'Yousef', age:23}
]

console.log(lessThan24(arr))
