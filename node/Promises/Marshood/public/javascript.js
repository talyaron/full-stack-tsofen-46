
//getitemOnMarket()
checkCart()
hideshow(ShowMarketButt);
//cartTableShow1()
//document.getElementById("ShowMarketButt").setAttribute("disabled", "disabled");
function getitemOnMarket1() {
    console.log("123");
    fetch('/getItems')
        .then(res => res.json())
        .then(items => {
            let itemsStr = '';
            let i = 1;
            var table = document.getElementById("myTable");
            console.log("geting items")
            //console.log(items)
            items.forEach(item => {
                row = table.insertRow(i);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell3 = row.insertCell(2);
                cell4 = row.insertCell(3);
                cell5 = row.insertCell(4);
                cell6 = row.insertCell(5);
                 row.setAttribute("id", item.ID);
                cell1.innerHTML = `<img src=${item.img} alt="Italian Trulli">`
                cell2.innerHTML = `${item.name} `
                cell3.innerHTML = `${item.Price}`
                cell4.innerHTML = `${item.quantity}`
                cell4.setAttribute("id", "qa" + item.ID);
                //cell5.setAttribute("id", "butt" + item.ID);
                cell5.innerHTML = `<button id="butt${item.ID}" onclick="AdditemTocart('${item.ID}')">Add item</button>`
                cell6.innerHTML = `<button id="RemButt${item.ID}" onclick="RemovetemTocart('${item.ID}')">Remove item</button>`
                document.getElementById("RemButt" + item.ID).setAttribute("disabled", "disabled");
 
            });
        })
}
function checkCart() {
    console.log("919191");
    fetch('/checkCart')
        .then(res => res.json())
        .then(items => {
            var { success } = items;
            // console.log("geting items")
            //console.log(items.success +"11111   ")
            if (!items.success) {
                undisableBtn("ShowCartButt");
            }
            else {
                console.log("check it cart ")
                disableBtn("ShowCartButt");
            }


        })
}
function cartTableShow() {

    console.log("ShowTable....");
    fetch('/cartTableShow')
        .then(res => res.json())
        .then(items => {
            let itemsStr = '';
            let i = 1;
            var table = document.getElementById("cartTableShow");
            // var totalRowCount = table.rows.length; // 5
            // console.log("bbbbbbbbbbbbbbbbb " + totalRowCount)
            // //if (flag = 1) 
            // {
            //     for (let index1 = 1; index1 < totalRowCount; index1++) {
            //         document.getElementById("cartTableShow").deleteRow(index1);
            //     }
            // }
            //deleteTableElem(document.getElementById("cartTableShow"))

            console.log("geting items")
            //console.log(items)
            items.forEach(item => {
                row = table.insertRow(i);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell3 = row.insertCell(2);
                cell4 = row.insertCell(3);
                cell5 = row.insertCell(4);
                cell6 = row.insertCell(5);

                row.setAttribute("id", item.ID);
                cell1.innerHTML = `<img src=${item.img} alt="Italian Trulli">`
                cell2.innerHTML = `${item.name} `
                cell3.innerHTML = `${item.Price}`
                cell4.innerHTML = `${item.quantity}`
                cell4.setAttribute("id", "qa" + item.ID);
                //cell5.setAttribute("id", "butt" + item.ID);
                cell5.innerHTML = `<button id="butt${item.ID}" onclick="AdditemTocart('${item.ID}')">Add item</button>`
                cell6.innerHTML = `<button id="RemButt${item.ID}" onclick="RemovetemFromCart('${item.ID}')">Remove item</button>`
                document.getElementById("butt" + item.ID).setAttribute("disabled", "disabled");

            });
        })
}

function disableBtn(ID) {
    //document.getElementById(ID).disabled = true;
    console.log("disableBtn " + ID)

    document.getElementById(ID).setAttribute("disabled", "disabled");
}
function undisableBtn(ID) {
    console.log("undisableBtn " + ID)
    document.getElementById(ID).removeAttribute("disabled");
}
function ShowCart() {
    //document.getElementById("myTable").setAttribute("style", "block");
    //document.getElementById("ShowCartButt").style.display="block"

    deleteTableElem(document.getElementById("myTable"))
    document.getElementById("ShowCartButt").style.display = "none"
    document.getElementById("ShowMarketButt").style.display = "block"
    document.getElementById("ShowStroeTable").style.display = "none"
    document.getElementById("cartTableShow").style.display = "block"
     
    document.getElementById("test123").style.display = "none"

    cartTableShow();


}

function clickShowMarket() {
    deleteTableElem(document.getElementById("cartTableShow"))
    document.getElementById("cartTableShow").style.display = "none"
    document.getElementById("ShowStroeTable").style.display = "block"
    document.getElementById("ShowCartButt").style.display = "block"
    document.getElementById("ShowMarketButt").style.display = "none"
    document.getElementById("test123").style.display = "block"

    checkCart()
    getitemOnMarket1();


}
function deleteTableElem(elem) {
    //alert(elem.rows.length)
    let totalRowCount = elem.rows.length; // 5
    console.log("deleteTableElem   " + totalRowCount)
    while (elem.rows.length > 1) {

        elem.deleteRow(1);
    }

}
async function AddItemTocartSendServer(itemId) {

    await fetch("/AddItem", {
        method: "PUT",
        body: JSON.stringify({

            id: itemId,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    //refresh the page
    //location.reload();
}
async function RemoveItemFromcartSendServer(itemId) {

    await fetch("/RemoveItem", {
        method: "PUT",
        body: JSON.stringify({

            id: itemId,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => {
            if (!data.ShowRemoveButt) {
                disableBtn("RemButt" + itemId);
                //console.log(data.ShowRemoveButt+" lalala")
            }
        });
    //refresh the page
    //location.reload();
}
async function AdditemTocart(ID) {
    console.log("Add Item " + ID)
    var table = document.getElementById("myTable");
    document.getElementById("qa" + ID).innerHTML = parseInt(document.getElementById("qa" + ID).innerHTML) - 1;
    var x = document.getElementById("qa" + ID).innerHTML
    undisableBtn("RemButt" + ID)
    AddItemTocartSendServer(ID)
    checkCart();
    if (x == 0) {
        disableBtn("butt" + ID);
    }
}
async function RemovetemFromCart(ID) {
    deleteTableElem(document.getElementById("cartTableShow"))
    //alert(ID)
    RemoveItemFromcartSendServer(ID);
    cartTableShow();
}
async function RemovetemTocart(ID) {
    deleteTableElem(document.getElementById("cartTableShow"))
    //cartTableShow()
    console.log("Remove Item " + ID)
    document.getElementById("qa" + ID).innerHTML = parseInt(document.getElementById("qa" + ID).innerHTML) + 1;
    RemoveItemFromcartSendServer(ID);
    var x = document.getElementById("qa" + ID).innerHTML
    if (parseInt(x) == 0) {
        console.log("a7eem")
        disableBtn("RemButt" + ID);
    }
    checkCart();
    cartTableShow();
    //disableBtn("butt" + ID)
}
function hideshow(elem) {
    var x = document.getElementById("ShowStroeTable");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

 
// try to use promise
const getitemOnMarket = new Promise((resolve, reject) => {
    fetch('/getItems')
        .then(res => res.json())
        .then(Items => {
            resolve(Items)
            stam()
        })
});


stam()
async function stam() {
    //console.log('1')
    const getitemOnMarket1 = await getitemOnMarket; //wait for data to come back
    // checkCart();

    //console.log('2')
    // console.log(getitemOnMarket1)
    updateTable(getitemOnMarket1);

}
function updateTable(items) {
    let itemsStr = '';
    let i = 1;
    var table = document.getElementById("myTable");
    console.log("geting items")
    //console.log(items)
    items.forEach(item => {
        row = table.insertRow(i);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
         row.setAttribute("id", item.ID);
        cell1.innerHTML = `<img src=${item.img} alt="Italian Trulli">`
        cell2.innerHTML = `${item.name} `
        cell3.innerHTML = `${item.Price}`
        cell4.innerHTML = `${item.quantity}`
        cell4.setAttribute("id", "qa" + item.ID);
        //cell5.setAttribute("id", "butt" + item.ID);
        cell5.innerHTML = `<button id="butt${item.ID}" onclick="AdditemTocart('${item.ID}')">Add item</button>`
        cell6.innerHTML = `<button id="RemButt${item.ID}" onclick="RemovetemTocart('${item.ID}')">Remove item</button>`
        document.getElementById("RemButt" + item.ID).setAttribute("disabled", "disabled");
  
    });
}

async function ShowItemsCart(items) {
    let i = 1;
    var table = document.getElementById("cartTableShow");
    var totalRowCount = table.rows.length; // 5
    console.log("bbbbbbbbbbbbbbbbb " + totalRowCount)
    if (flag = 1) {
        for (let index1 = 1; index1 < totalRowCount; index1++) {
            document.getElementById("cartTableShow").deleteRow(index1);
        }
    }
    console.log("geting items")
    //console.log(items)
    items.forEach(item => {
        row = table.insertRow(i);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);

        row.setAttribute("id", item.ID);
        cell1.innerHTML = `<img src=${item.img} alt="Italian Trulli">`
        cell2.innerHTML = `${item.name} `
        cell3.innerHTML = `${item.Price}`
        cell4.innerHTML = `${item.quantity}`
        cell4.setAttribute("id", "qa" + item.ID);
        //cell5.setAttribute("id", "butt" + item.ID);
        cell5.innerHTML = `<button id="butt${item.ID}" onclick="AdditemTocart('${item.ID}')">Add item</button>`
        cell6.innerHTML = `<button id="RemButt${item.ID}" onclick="RemovetemTocart('${item.ID}')">Remove item</button>`
        document.getElementById("RemButt" + item.ID).setAttribute("disabled", "disabled");


    })
}




function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < rows.length - 1; i++) { //Change i=0 if you have the header th a separate table.
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}




function unableEditbutt()
{
     document.getElementById("EditB").removeAttribute("disabled")
 
}

async function EditItem() {

    await fetch("/EditItem", {
        method: "PUT",
        body: JSON.stringify({

            id: document.getElementById("IDITEM").value ,
            NewIMG: document.getElementById("NewIMG").value,
            NewName: document.getElementById("NewName").value ,
            NewPrice: document.getElementById("NewPrice").value ,
            NewQuantity: document.getElementById("NewQuantity").value ,
         }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => {
           // reload items table ....
           deleteTableElem(document.getElementById("myTable"))
           getitemOnMarket1();
        });


}

 
async function DeleteItem(){

    await fetch("/DeleteItem", {
        method: "DELETE",
        body: JSON.stringify({

            id: document.getElementById("IDITEM").value ,
            NewIMG: document.getElementById("NewIMG").value,
            NewName: document.getElementById("NewName").value ,
            NewPrice: document.getElementById("NewPrice").value ,
            NewQuantity: document.getElementById("NewQuantity").value ,
         }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => {
           // reload items table ....
           deleteTableElem(document.getElementById("myTable"))
           getitemOnMarket1();
        });



}
// let cartTableShowP = new Promise((resolve, reject) => {
//     fetch('/cartTableShow')
//         .then(res => res.json())
//         .then(items => { resolve(items) })

// });


// let checkCartP = new Promise((resolve, reject) => {
//     console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm")
//     fetch('/checkCart')
//         .then(res => res.json())
//         .then(items => {resolve(items)
//         console.log("hhhhh "+ items.success)

//         })
// });
//  async function checkCart123(){
//     let checkCart12 = await checkCartP;
//     const { success } = checkCart12;
//     console.log(checkCart12)
//     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk  "+ checkCart12.success)
//             // console.log("geting items")
//             //console.log(items.success +"11111   ")
//             if (!checkCart12.success) {
//                 undisableBtn("ShowCart");
//             }
//             else {
//                 console.log("check it cart ")
//                 disableBtn("ShowCart");
//             }

// }