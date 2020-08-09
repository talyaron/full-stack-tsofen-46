fetch('/resturant1')
    .then(res => res.json())
    .then(data => {
        console.log(data.resturat)
        
        renderMenu(data.resturat)
    })



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
        body: JSON.stringify({ newprice: price.value, newimg: img.value }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            renderMenu(data.resturant);
        })

}

function sort() {


    fetch('/resturant5', {
        method: 'PUT',
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
    console.log(menu)
    let menuStr = '';
    let addmeal = '';
    let sort = '';

    menu.forEach(item => {
        menuStr += `<p><img src="${item.img}" width="400px" height="250" >
                 Price:${item.price}$
        <input type="number" id="price${item.ID}">
        <button onclick="updatePrice('${item.ID}')">updat-Pricce</button>
        <button onclick="delete1('${item.ID}')">Delete-Meal</button>
        </p> `

    })
    sort = '<p> <button onclick="sort()"> sort by min price</button>  </p>'

    addmeal = '<p> <input id="img" type="img" placeholder="url img"><input id="price" type="number" placeholder="meal price"><button onclick="addmeal(img,price)"> Add </button>  </p>'


    document.getElementById("sort").innerHTML = sort;
    document.getElementById("root").innerHTML = menuStr;
    document.getElementById("root2").innerHTML = addmeal;


}



