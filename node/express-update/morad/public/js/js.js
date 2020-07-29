renderMenu()
function renderMenu() {
    try {
        fetch('/menu')
            .then(res => res.json())
            .then(data => {
                let menuStr = '';
                let i = 0;
                data.forEach(menuItem => {
                    menuStr += `<div><p>item name : ${menuItem.name} , price :
                    <span id="s${menuItem.ID}"> ${menuItem.price}</span></p>
                <label for="p${menuItem.ID}">new Prices:</label>
                <input type="text" id="p${menuItem.ID}" name="p${menuItem.ID}" value="">
                <button id="b${i}" onclick = "editPrice('${menuItem.ID}')" 
                id = "b${i}">edit</button></div>`
                    i++;
                })
                document.getElementById('root').innerHTML = menuStr;
            })
    } catch (err) {
        console.error(err);
    }
}

function editPrice(itemId) {
    const input = document.getElementById(`p${itemId}`);
    const newPrice = input.value;
    try {
        fetch('/edit', {
            method: 'PUT',
            body: JSON.stringify({ itemId, newPrice }),
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(res => res.json())
            .then(data => {
                if (data.updated === true) {
                    document.getElementById(`s${itemId}`).innerText = newPrice;
                }

            })
    }
    catch (err) {
        console.log(err)
    }
}