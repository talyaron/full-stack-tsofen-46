function getByColor(products, color) {
    var clothersColor = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].color === color) {
            clothersColor.push(products[i]);
        }
    }
    console.log(clothersColor);
}

function getBySize(products, size) {
    var clothersSize = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].size === size) {
            clothersSize.push(products[i]);
        }
    }
    return clothersSize;
}
function getBydiscount(products, discount) {
    for (let i = 0; i < products.length; i++) {
        products[i].price = products[i].price - products[i].price * discount;
    }
}

const products= [
{type:'socks',color:'pink',discount:'0.5'},
{ type:'pants', color:'white', discount:'0.6'},
{ type:'earings', color:'black', discount:'0.8'},
{ type:'pants', color:'yellow', discount:'0.5'},
{ type:'T-shirt', color:'red', discount:'0.75'},
{ type:'pants', color:'white', discount:'0.8'},
{ type:'earings', color:'black', discount:'0.6'},
{ type:'earings', color:'black', discount:'0.5'},
{ type:'T-shirt', color:'white', discount:'0.75'},
{ type:'pants', color:'black', discount:'0.75'},
{ type:'shoes', color:'pink', discount:'0.9'},
{ type:'shoes', color:'red', discount:'0.5'}
]
    



