const shirt = {type:'shirt'};

const shirtBlue = {...shirt, size:'xl', price:230 , color:"blue"};
const shirtYellow = {...shirt, size:'s', price:200 ,color:"yellow"};
const shirtRed = {...shirt, size:'M', price:280 ,color:"red"};

const pants = {type:'pants'};

const pantsyellow={...pants, size:'xl', price:230 , color:"yellow"};
const pantsRed={...pants, size:'s', price:200 ,color:"red"};
const pantsBlue = {...pants, size:'M', price:280 ,color:"blue"};


const products = [
    shirtBlue,shirtYellow,shirtRed,pantsyellow,pantsRed,pantsBlue
   ]


   let filterBycolor = (x,products) => {
    const filterd = []
    for (let i in products){
        if(products[i].color==x){
        filterd.push(products[i])}
    }
    return filterd;
   }

   let filterByPrice = (productsPrice,products) => {
    const arrbyPrice = []
    for (let i in products){
        if(products[i].price>productsPrice){
            arrbyPrice.push(products[i])
        }
    }  
    return arrbyPrice;
   }

   let getDiscount = (discount,products) => {
       const discountArr=[];
    for (let i in products){
        const after={...products[i]}
        after.price =after.price-( after.price*(discount))
        discountArr.push(after)
    }
    return discountArr ;
   }
   console.log(getDiscount(0.2,products));
   console.log(products);


