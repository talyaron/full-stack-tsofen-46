// GET Menu:
fetch('/api/getMenu', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }

})
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    menu = data;
    console.log(menu);
    let menuStr = '';
    for (let i = 0; i < menu.length; i++) {
      menuStr += menu[i].name + ":" + " " + menu[i].price + "<br>";
    }

    document.getElementById('MenuList').innerHTML = menuStr;
    // Do something with the returned data.
  });

function updatePrice(event) {
  event.preventDefault();
  // let itemToUpateID = document.getElementById("ItemIDValue").value;
  let itemToUpdate = document.getElementById("ItemValue").value;
  let itemPriceToUpdate = document.getElementById("priceValue").value;
  let userMessage = document.getElementById("userMsg");


  fetch('/api/updateMenu', {
    method: 'PUT',
    body: JSON.stringify({
      itemToUpdate
      , itemPriceToUpdate
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      let { UserMsg } = data;
      userMessage.innerText = UserMsg;
      console.log(UserMsg);

    })
}



