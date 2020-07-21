const Products=[
    {Type:'shirt',model:'TNT',color:'white',price:100},
    {Type:'shoe',model:'nike',color:'black',price:450},
    {Type:'pants',model:'leeCoper',color:'blue',price:250}
]

const allProducts=[];
for(let i=0;i<Products.length;i++){
    allProducts.push(Products[i]);
}

const shirtZara={...(Products[0])};
const ShirtHM={...(Products[0])};
shirtZara.model='Zara';
shirtZara.color='black';
shirtZara.price=150;

ShirtHM.model='HM';
ShirtHM.color='blue';

allProducts.push(shirtZara);
allProducts.push(ShirtHM);
const shoeZara={...(Products[1])};
const shoeHM={...(Products[1])};
shoeZara.model='Zara'
shoeZara.color='white'

shoeHM.price=300;
shoeHM.model='HM';
shoeHM.color='black';

allProducts.push(shoeZara);
allProducts.push(shoeHM);

const pantsZara={...(Products[2])};
const pantHM={...(Products[2])};

pantsZara.model='Zara';
pantsZara.price=150;
pantsZara.color='white';

pantHM.model='HM';
pantHM.color='black';


allProducts.push(pantsZara);
allProducts.push(pantHM);

//console.log(allProducts);
function Filterbycolor(color, Products)
{
    const productbycolor = [];
    for(let i in Products)
    {
        if(Products[i].color == color) productbycolor.push(Products[i]);
    }
    return productbycolor;
}

function Filterbyprice(price, Products)
{
    const productbyprice = [];
    for(let i in Products)
    {
        if(Products[i].price == price) productbyprice.push(Products[i]);
    }
    return productbyprice;
}

function sale(salePercentce, Product)
{
    let newPrice = Product.price * (100 - salePercentce)/100;
    return newPrice;
}



console.log('pruducts with color blue');
console.log(Filterbycolor('blue',allProducts));

console.log('pruducts with color white');
console.log(Filterbycolor('white',allProducts));

console.log('pruducts with color black');
console.log(Filterbycolor('black',allProducts));

console.log('pruducts price 150 ');
console.log(Filterbyprice(150,allProducts));

console.log('pruducts price 300 ');
console.log(Filterbyprice(300,allProducts));

console.log(allProducts[3] + ' price after sale 20% is ' + sale(20,allProducts[3]) );






