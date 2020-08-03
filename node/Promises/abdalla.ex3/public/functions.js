fetch('/resturant1')
    .then(res => res.json())
    .then(data => {
        renderMenu(data.resturant)
    })

// const getMenu = new Promise((itemID) => {
//     const newprice = document.getElementById(`price${itemID}`).value


//     fetch('/resturant2', {
//         method: 'PUT',
//         body: JSON.stringify({ itemID: itemID, newprice: newprice }),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then(res => res.json())
//         .then(data => {
//             renderMenu(data.resturant);
//         })



// }

function updatePrice(itemID) {

const newprice = document.getElementById(`price${itemID}`).value


fetch('/resturant2', {
    method: 'PUT',
    body: JSON.stringify({ itemID: itemID, newprice: newprice }),
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => res.json())
    .then(data => {
        renderMenu(data.resturant);
    })

}

function delete1(itemID) {



fetch('/resturant3', {
    method: 'PUT',
    body: JSON.stringify({ itemID: itemID }),
    headers: {
        'Content-Type': 'application/json'
    },
})
        .then(res => res.json())
        .then(data => {
            renderMenu(data.resturant);
        })



}

function addmeal(img, price) {



    fetch('/resturant4', {
        method: 'PUT',
        body: JSON.stringify({ newprice: price.value,  newimg: img.value }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            renderMenu(data.resturant);
        })

}


function renderMenu(menu) {
    let menuStr = '';
    let addmeal = '';
    menu.forEach(item => {
        menuStr += `<p><img  src="${item.img}" width="400px" height="250" >
                 Price:${item.price}$
        <input type="number" id="price${item.ID}">
        <button onclick="updatePrice('${item.ID}')">updat-Pricce</button>
        <button onclick="delete1('${item.ID}')">Delete-Meal</button>
        </p> `

    })
    addmeal = '<p> <input id="img" type="img" placeholder="url img"><input id="price" type="number" placeholder="meal price"><button onclick="addmeal(img,price)"> Add </button>  </p>'

    document.getElementById("root").innerHTML = menuStr;
    document.getElementById("root2").innerHTML = addmeal;


}



