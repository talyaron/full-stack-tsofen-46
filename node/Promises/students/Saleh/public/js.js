
const root = document.getElementById("root");
const cart = document.getElementById("cart");


function change55(event){
    fetch('/change55', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            render(data.menu)
        })
}


function render(menu) {
    let menuStr = '';
    menu.forEach(item => {
        menuStr += `
        <img src="${item.img}" alt="">
        <h3 id = "price">${item.price}</h3>
        <button id = "add" onclick= addToCart("${item.id}")>ADD TO CART</button>
        <button id = "remove" onclick=removeFromCart("${item.id}")>REMOVE FROM CART</button>
        
        <button id = "removemenu" onclick=removeFromMenu("${item.id}")>REMOVE FROM MENU</button>
        <br>
    `
    })
    root.innerHTML = menuStr;

}

function addToCart(itemId) {
    console.log(itemId)
    fetch('/addtocart', {
        method: 'POST',
        body: JSON.stringify({ itemId: itemId }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            cart.innerHTML = `CART: <br>
                         ${data.count} items <br>
                        total: ${data.total} NIS`
        })

}

function removeFromCart(itemId) {
    console.log(itemId);
    fetch('/removefromcart', {
        method: 'POST',
        body: JSON.stringify({ itemId: itemId }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            cart.innerHTML = `CART: <br>
                         ${data.count} items <br>
                        total: ${data.total} NIS`
        })
}

function removeFromMenu(itemId) {
    console.log(itemId);
    fetch('/removefrommenu', {
        method: 'POST',
        body: JSON.stringify({ itemId: itemId }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            render(data.menu)
        })
}


function addToMenu(event) {
    const price = document.getElementById('itemPrice').value
    const image = document.getElementById('itemImage').value
    const id = document.getElementById('itemId').value

    fetch('/addtomenu', {
        method: 'POST',
        body: JSON.stringify({
            price: price,
            image: image,
            id: id
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            render(data.menu)
        })
}

fetch('/getmenu')
    .then(res => res.json())
    .then(data => {
        render(data.menu)
    })

function sortMenu(event) {
    fetch('/sort', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            render(data.menu)
        })
}



