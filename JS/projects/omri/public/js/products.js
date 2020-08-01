/* Void Main */

renderProducts();


/****************************************************** */


/* Functions*/

async function getProducts() {
    try {
        const response = await fetch("/api/products");
        const products = await response.json();

        return products;
    } catch (error) {
        alert(error.message)
    }
}

async function renderProducts() {
    try {
        const products = await getProducts();
        const productList = document.getElementById("cardsList")
        let items = "";
        products.forEach(item => {
            const {
                id,
                name,
                price,
                imgSrc
            } = item;
            items += generateCard(id, name, price, imgSrc)
        });
        productList.innerHTML = items
    } catch (error) {
        alert(error.message)
    }
}


function openPriceEditDiv(divId) {
    const invisibleDiv = document.getElementById(divId.toString());
    invisibleDiv.style.display = "flex";

    // getting selected product card and setting its border to red
    const wholeDiv = document.getElementById(divId + "s");
    wholeDiv.style.border = "3px solid #dc3545";
}

//cross button clicked
function closePriceEditDiv(divId) {
    const invisibleDiv = document.getElementById(divId.toString());
    invisibleDiv.style.display = "none";

    removeCardBorder(divId + "s");
}

async function handleDelete(productId) {
    try {
        const response = await fetch("/api/delete", {
            method: "DELETE",
            body: JSON.stringify({
                id: productId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const {
            numOfItems
        } = await response.json();

        if (numOfItems === 0)
            alert("Products Out Of Stock . Coming Soon!");

        location.reload();
    } catch (error) {
        alert(error.message)
    }
}

// check button clicked
async function handlePriceUpdate(productId) {
    try {
        const invisibleDiv = document.getElementById(productId.toString());
        const price = invisibleDiv.firstElementChild.valueAsNumber;
        invisibleDiv.style.display = "none";

        if (!price) {
            removeCardBorder(productId + "s");
            return;
        }

        await fetch("/api/updatePrice", {
            method: "PUT",
            body: JSON.stringify({
                price,
                id: productId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        location.reload();
    } catch (error) {
        alert(error.message)
    }
}

// sort by price or name
async function sortBy(property) {
    try {
        await fetch("/api/sortBy", {
            method: "PUT",
            body: JSON.stringify({
                property
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        location.reload();
    } catch (error) {
        alert(error.message)
    }
}

function removeCardBorder(cardId) {
    const cardDiv = document.getElementById(cardId);
    cardDiv.style.border = "none";
}

function generateCard(productId, name, price, imgSrc) {
    return `
    <div class="card" id="${productId+"s"}">
        <div class="card-img">
            <img src="${imgSrc}">
        </div>

        <div class="card-content">
            <span>${name}</span>
            <span>${price}$</span>
        </div>

        <div class="card-buttons">

            <div class="visible-area">
                <button class="edit-btn" onclick="openPriceEditDiv(${productId})">EDIT</button>
                <button class="delete-btn" onclick="handleDelete(${productId})">DELETE</button>
            </div>

            <div class="invisible-area" id="${productId}">
                <input type="number" >
                <div class="invisible-area-spans">
                <span  class="invisible-img">
                <img src="https://ak.picdn.net/shutterstock/videos/1030885892/thumb/5.jpg" onclick="handlePriceUpdate(${productId})">
            </span>
            <span  class="invisible-img">
                <img src="https://previews.123rf.com/images/intellson/intellson1802/intellson180200136/94777191-x-grunge-letter-x-cross-sign-stock-vector-.jpg" onclick="closePriceEditDiv(${productId})">
            </span>
                </div>
            </div>
        </div>
    </div>
    `
}