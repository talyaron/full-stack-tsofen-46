function Filterbycolor(color, product)
{
    const productbycolor = [];
    for(let i in product)
    {
        if(product[i].color == color) productbycolor.push(product[i]);
    }
    return productbycolor;
}

function Filterbyprice(price, product)
{
    const productbyprice = [];
    for(let i in product)
    {
        if(product[i].price == price) productbyprice.push(product[i]);
    }
    return productbyprice;
}


function sale(salePercentce, product)
{
    let newPrice = product.price * (1 - salePercentce);
    return newPrice;
}
