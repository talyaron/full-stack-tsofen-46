function renderMenu(menu) {

    let menuStr = '';
    menu.forEach(item => {
        menuStr += `<p onclick='updatePriceServer("${item.ID}")'>${item.name}, Price:${item.price} NIS</p>`
    });
    document.getElementById('root').innerHTML = menuStr;
     

}
function PostTranWord() {

}
function renderMenuFormServer() {
    console.log("123");
    fetch('/getMenu')
        .then(res => res.json())
        .then(menu => {
            let menuStr = '';
            console.log("aaaa")
            console.log(menu)
            menu.forEach(item => {
                menuStr += `<p  id="${item.ID}" onclick='updatePriceServer("${item.ID}")'>${item.name}, Price:${item.price} NIS</p>`
            });
            document.getElementById('root').innerHTML = menuStr;

        })

}

renderMenuFormServer();

function updatePriceServer(itemID) {
    // const putMethod = {
    //     method: 'PUT', // Method itself
    //     headers: {
    //      'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    //     },
    //     body: JSON.stringify(someData) // We send data in JSON format
    //    }

    //    fetch("/UpdatePrice", putMethod)
    //    .then(response => response.json())
    //    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    //    .catch(err => console.log(err) // Do something with the error

    console.log(itemID);
    console.log(document.getElementById("_mw7nsyyst"))
    document.getElementById(itemID).style.border = "thick solid red";
 

}
function updatePrice(itemID) {

    console.log(itemID);
    //find in array;

    const index = menu.findIndex(item => item.ID === itemID);

    if (index > -1) {
        //update to zero
        menu[index].price = 0;


    }
}