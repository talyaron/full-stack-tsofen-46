const products = [
    {type: 'Tshirt' , color: 'blue' , size : 'L', price: 150 },
    {type : 'shoes' , color: 'red' , size : '40', price: 200 },
    {type : 'Tshirt' , color: 'blue' , size : 's', price: 180 },
    {type : 'shoes' , color: 'black' , size : '45', price: 360 },
    {type : 'shoes' , color: 'pink' , size : '44', price: 200}
]

const products1 = [...products];


const newArr = [] ; 
function chooseColor(arr,color){
    for(let i of arr){
        if(i.color==color)
        newArr.push(i);
    }
    return newArr
}

console.log(chooseColor(products1,'red'))


const newArr2=[]
function chooseMaxPrice (arr , price){
    for(let i of arr){
        if(i.price< price) newArr2.push(i) ; 
    }
    return newArr2 ; 

}

console.log(chooseColor(products1,250))


const newArr3 = [] ; 
function SALE (arr,per){
    for(let i of arr ){
        i.price==price*(1-per)
        newArr3.push(i)
    }
    return newArr3
}

console.log(chooseColor(products1,0.5))

