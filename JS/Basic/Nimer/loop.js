let Arr=[
     person1 ={firstName:"nimer",lastName:"shamas",gender:"male"},
     person2 ={firstName:"nimer",lastName:"ashley",gender:"female"},
     person3 ={firstName:"nimer",lastName:"shamas",gender:"male"}

]

Arr.forEach(function(elm){

   console.log("first name:",elm.firstName,"gender:",elm.gender)


}
)

for(let i in Arr){
    console.log(`${i}: ${Arr[i]}`)
}



