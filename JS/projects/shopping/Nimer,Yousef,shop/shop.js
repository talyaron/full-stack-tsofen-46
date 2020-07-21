const shirt = {size:'xl',color:'pink',model:'nike', price:5,tag:"shirt"};
const shoe={size:44,color:'black',model:'nike', price:5,tag:"shoe"};
const short={size:'xl',color:'pink',model:'nike', price:5,tag:"short"};

const shirt1 = {...shirt}
shirt1.price=120;
shirt1.size="Small";
shirt1.color="black"
const shirt2 = {...shirt}
shirt2.price=200;
shirt2.size="Medium";
shirt2.color="pink"
const shirt3 = {...shirt}
shirt3.price=250;
shirt3.size="Large";
shirt3.color="white"




const shoe1={...shoe}
shoe1.price=120;
shoe1.color="black"
shoe1.size=40;
const shoe2={...shoe}
shoe2.price=50;
shoe2.color="white"
shoe2.size=40;
const shoe3={...shoe}
shoe3.price=500;
shoe3.color="pink"
shoe3.size=40;




const short1={...short}
short1.price=120;
short1.color="white"
short1.size="Small";
const short2={...short}
short2.price=400;
shoe2.color="black"
short2.size="Medium";
const short3={...short}
short3.price=70;
shoe2.color="pink"
short3.size="Large";





const collectionArray=[shirt1,shirt2,shirt3,shoe1,shoe2,shoe3,short1,short2,short3]


const colorsFilter = (arr,color) =>{
    const filteredArray = [];
    arr.map(function(item){
        if(item.color==color)
            filteredArray.push(item);
    })
    return filteredArray;
}
const tagFilter = (arr,tag) =>{
    const filteredArray = [];
    arr.map(function(item){
        if(item.tag==tag)
            filteredArray.push(item);
    })
    return filteredArray;
}
const upperpriceFilter = (arr,price) =>{
    const filteredArray = [];
    arr.map(function(item){
        if(item.price>price)
            filteredArray.push(item);
    })
    return filteredArray;
}

const lowerpriceFilter = (arr,price) =>{
    const filteredArray = [];
    arr.map(function(item){
        if(item.price<=price)
            filteredArray.push(item);
    })
    return filteredArray;
}

const discountFunc = (arr,discount) =>{
    const discountedArray=[];
arr.map(function(item){
    const newitem={...item}

    newitem.price=item.price-(item.price*discount)
    discountedArray.push(newitem);
})
return discountedArray;

}


console.log(discountFunc(tagFilter(collectionArray,"shirt"),0.2));
console.log(collectionArray);















