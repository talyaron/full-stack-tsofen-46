async function updatePrice() {
  const response = await fetch("/api/products");
  const menu = await response.json();

  let productsList = "";

  menu.forEach((item) => {
    productsList += `<p>${item.name},
            Price:${item.price} 
            <input id="${item.id}" type="number">
            <button onclick="handlePriceUpdate('${item.id}')">Update price</button>
            </p>`;
  });

  document.getElementById("productsDiv").innerHTML = productsList;
}

async function handlePriceUpdate(itemId) {
  const newPrice = document.getElementById(itemId).value;

  await fetch("/api/product", {
    method: "PUT",
    body: JSON.stringify({
      newPrice,
      id: itemId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //refresh the page
  location.reload();
}

updatePrice();
