function getShopItemsPromise() {
    return new Promise((resolve, reject) => {
        try {
            fetch('/api/getShopItems')
                .then(res => res.json())
                .then(data => {
                    resolve(data);
                }
                );
        }
        catch (err) {
            console.log(err);
        }
    })

}
function getUpdatePricePromise(itemId, newPrice) {
    return new Promise((resolve, respones) => {
        try {
            fetch('/api/updatePrice', {
                method: 'PUT',
                body: JSON.stringify({ itemId, newPrice }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    resolve(data);
                });
        }
        catch (err) {
            console.log(err);
        }
    });

}

function renderContent(shopItems) {
    let shopContent = ''
    shopItems.forEach(itemData => {
        shopContent += `<div class="DivItem">
            <div>
                <img class="itemImage" src="${itemData.image}">
            </div>
            <div class="itemDetailsDiv">
                <p>${itemData.price}</p>
                <p>${itemData.name}</p>
            </div>
            <div class="itemBtnDiv">
                <input class="w3-input w3-animate-input" type="text" style="width:60%"
                 id="${itemData.id}" value="type price">
                 <p id="p${itemData.id}"></p>
                <button onclick = "updatePrice('${itemData.id}')">update</button>
                <button onclick = "deleteItem('${itemData.id}')">delete</button>
            </div>
        </div>`;
    });
    document.getElementById("Div_shopContent").innerHTML = shopContent
}
function updatePrice(itemId) {
    let newPrice = document.getElementById(`${itemId}`).value;
    (async () => {
        const updatePrice = await getUpdatePricePromise(itemId, newPrice);
        console.log(updatePrice)
        if (updatePrice.changed) {
            const updatedList = await getShopItemsPromise();
            renderContent(updatedList);
            document.getElementById(`p${itemId}`).innerText = `price has been changed to ${newPrice}`
        }
    })()
}
function deleteItemPromise(itemId) {
    return new Promise((resolve, respnse) => {
        fetch('/api/deleteItem', {
            method: 'PUT',
            body: JSON.stringify({ itemId }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json)
            .then(data => {
                resolve(data);
            })
    })
}
function deleteItem(itemId) {
    (async () => {
        const deleteItem = await deleteItemPromise(itemId);
        const shopItems = await getShopItemsPromise();
        renderContent(shopItems);
    })()
}

function showInputItems() {
    document.getElementById("Form_addItems").style.visibility = 'visible'
}
function addItemValues(e) {
    e.preventDefault();
    let imageUrl = document.getElementById("imgURl").value;
    let itemName = document.getElementById("itemName").value;
    let itemPrice = document.getElementById("itemPrice").value;

    fetch('/api/addItem', {
        method: 'PUT',
        body: JSON.stringify({ imageUrl, itemName, itemPrice }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            if (data.added) {
                document.getElementById("imgURl").value = '';
                document.getElementById("itemName").value = '';
                document.getElementById("itemPrice").value = '';
                document.getElementById("responseForm").innerText = `item name ${itemName} has been added`;
                (async () => {
                    const items = await getShopItemsPromise();
                    renderContent(items)
                })()
            }
        })
}

function orderByPrice(){
    fetch('/api/orderByPrice/')
    .then(res => res.json())
    .then(data => {
        renderContent(data);
    })
}
