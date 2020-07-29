function updatePrice() {
    fetch("/api/products")
        .then((res) => res.json())
        .then((menu) => {
            let productsList = "";
            menu.forEach((item) => {
                productsList += `<p>${item.name},
                Price:${item.price} 
                <input id="${item.id}" type="number">
                <button onclick="handlePriceUpdate('${item.id}')">Update price</button>
                </p>`
            });

            document.getElementById("productsDiv").innerHTML = productsList;
        });
}

function handlePriceUpdate(itemId) {
    const newPrice = document.getElementById(itemId).value;

    fetch("/api/product", {
        method: 'PUT',
        body: JSON.stringify({
            newPrice,
            id: itemId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res);

    location.reload();
}

updatePrice();