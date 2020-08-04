// const getList = new Promise((resolve, reject) => {
//     fetch('/api/shawarmaList')
//         .then(res => res.json())
//         .then(list => resolve(list))
// });

function menuHandler(event) {
    fetch('/api/shawarmaList')
        .then(res => res.json())
        .then(data => {
            let items = '';
            data.forEach(element => {
                items += `<div><img src=${element.src}><p>Name: ${element.name} , Price: ${element.price} NIS </p> 
                <input placeholder="Enter a new price" id=${element.name}> 
                <button onclick="updatePrice('${element.name}')">Update Price</button><button onclick="deleteItem('${element.name}')">Delete Item</button></div>`;
            });
            items += `<div id="add-wrapper">
                    <input placeholder="Enter Image Source" id="add-img">
                    <input placeholder="Enter The Name" id="add-name">
                    <input placeholder="Enter The Price" id="add-price">
                    <button onclick="addElement('add-img','add-name','add-price')">Add Item</button>
                    </div>`;

            const root = document.getElementById('root');
            root.innerHTML = items;
        })
}

function addElement(imgId, nameId, priceId) {
    const newImg = document.getElementById(imgId).value;
    const newName = document.getElementById(nameId).value;
    const newPrice = document.getElementById(priceId).value;
    fetch('/addElement', {
        method: 'PUT',
        body: JSON.stringify({ newImg, newPrice, newName}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            menuHandler();
        })

}

function sortFunc(event) {
    fetch('/sort', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            menuHandler();
        })
}

function deleteItem(name) {
    fetch('/deleteItem', {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            menuHandler();
        })

}

function updatePrice(name) {
    const newPrice = document.getElementById(name).value;
    fetch('/updatePrice', {
        method: 'PUT',
        body: JSON.stringify({ name, newPrice }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            menuHandler();
        })

}