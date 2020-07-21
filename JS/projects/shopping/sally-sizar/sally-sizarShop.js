const shirt = { type: 'shirt' }
const shoe = { type: 'shoe' }
const pants = { type: 'pants' }

const shirt1 = { ...shirt, size: 's', color: 'yellow', model: 'nike', price: 16 }
const shirt2 = { ...shirt, size: 'xl', color: 'pink', model: 'addidas', price: 30 };

const shoe1 = { ...shoe, size: '5', color: 'blue', model: 'nike', price: 40 };
const shoe2 = { ...shoe, size: '8', color: 'black', model: 'addidas', price: 50 };

const pants1 = { ...pants, size: 'xl', color: 'white', model: 'nike', price: 55 };
const pants2 = { ...pants, size: 'L', color: 'black', model: 'adidas', price: 60 };


let product = []
product.push(shirt1)
product.push(shirt2)
product.push(shoe1)
product.push(shoe2)
product.push(pants1)
product.push(pants2)

const arrC = []
const colorFunc = (product, color1) => {
    for (let i in product) {
        if (color1=== product[i].color) {
            arrC.push(product[i])
        }
    }
    return arrC
}

const arrP = []
const priceFunc = (product, price1) => {
    for (let i in product) {
        if (price1 === product[i].price) {
            arrP.push(product[i])
        }
    }
    return arrP
}
console.log(colorFunc(product, 'black'))
console.log(priceFunc(product, 40))


const discount = (obj, percent) => {
    return ((obj.price * (100-percent))/100)
    
}

console.log(discount(product[2], 40))





