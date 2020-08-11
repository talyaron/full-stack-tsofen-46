let arr=[
    {name:'Sizar', gender:'Male'},
    {name:'Saleh', gender:'Male'},
    {name:'Moran', gender:'Female'}
]

arr.map(function(element){
    console.log(element.name, 'is',element.gender)
})

arr.map((element)=>{
    console.log(element.name, 'is',element.gender)
})