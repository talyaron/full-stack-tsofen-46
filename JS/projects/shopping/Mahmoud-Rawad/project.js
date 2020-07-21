

const shirt ={type:'shirt'};
const blueshirt={...shirt,color:'blue',price:'50'};
const purpleshirt={...shirt,color:'purple',price:'80'};
const redshirt={...shirt,color:'red',price:'90'};

const pants ={type:'pant'};
const bluepants={...pants,color:'blue',price:'50'};
const purplepants={...pants,color:'purple',price:'10'};
const redpants={...pants,color:'red',price:'90'};

let products = [blueshirt,purpleshirt,redshirt,bluepants,purplepants,redpants]




function colorFilter(colour, products){
const newarr=[];
    products.forEach(product => {
    
        if(product.color == colour)
            newarr.push(product)
        
})
console.log(newarr);
}

colorFilter('red',products);

function priceFilter(price, products){

    products.forEach(product => {
        if(product.price == price)
         console.log(product);
})
}

priceFilter(50,products);



function discountprice(discount,product){

     return product.price-( (product.price*discount)/100);
}

console.log(discountprice(20,products[0]));