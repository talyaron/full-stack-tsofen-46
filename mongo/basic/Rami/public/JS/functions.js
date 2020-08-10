function getItems(e) {
    fetch('/api/items')
        .then(res => res.json())
        .then(data => {
            let items = data;
            console.log(items)
            let itemslist = '';
            items.forEach(item => {
                itemslist +=
                    `<div class='item'>
            <div class='row'>
            <img class='ItemImg' src='${item.URL}'>
                <input id='imgin-${item.ID}' type='url' class='hidden'>
                    <button onclick='ImgUp(${item.ID})' id='imgbtn-${item.ID}' class='hidden'>Ok</button>
                    </div>
            <div class='row'>
            <div class='topic'><h1>${item.TOPIC}</h1></div>
                    <input id='topicin-${item.ID}' type='url' class='hidden'>
                    <button onclick='TopicUp(${item.ID})' id='topicbtn-${item.ID}' class='hidden'>Ok</button>
            </div>
            <div class='row'>
            <div id='aa'><h2>Price: ₪ ${item.PRICE}</h2></div>
                   <input id='pricein-${item.ID}' type='url' class='hidden'>
                    <button onclick='PriceUp(${item.ID})' id='pricebtn-${item.ID}' class='hidden'>Ok</button>
            </div>
                <div id='buttons'>
                <button id='btn' onclick='Edititem(${item.ID})' >Edit Item</button>
                <button onclick='Deleteitem(${item.ID})' >Delete Item</button>
                    </div>
            </div>`
            })
            document.getElementById("market").innerHTML = itemslist;
        })

}

getItems(0);


function Deleteitem(id) {
    let answer = window.confirm("Are You Sure Want To Delete Item?");
    if (answer) {
        try {
            fetch('/api/Deleteitems', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    const success = data;
                    if (success) {
                        getItems(0)
                    } else {

                    }


                })
        }
        catch (error) {
            console.error();
        }
    }
}

function Edititem(id) {
    document.getElementById('imgbtn-' + id).style.visibility = "visible";
    document.getElementById('imgin-' + id).style.visibility = "visible";
    document.getElementById('topicin-' + id).style.visibility = "visible";
    document.getElementById('topicbtn-' + id).style.visibility = "visible";
    document.getElementById('pricein-' + id).style.visibility = "visible";
    document.getElementById('pricebtn-' + id).style.visibility = "visible";
}

function PriceUp(id) {
    let val = document.getElementById('pricein-' + id).value
    if (!isNaN(val) && val) {
        try {
            fetch('/api/update/price', {
                method: 'PUT',
                body: JSON.stringify({ id, val }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    const { success } = data;

                })
            getItems(0)
        }

        catch (error) {
            console.error();
        }
    }
}

function TopicUp(id) {
    let val = document.getElementById('topicin-' + id).value

    try {
        fetch('/api/update/topic', {
            method: 'PUT',
            body: JSON.stringify({ id, val }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const { success } = data;

            })
        getItems(0)
    }

    catch (error) {
        console.error();
    }
}

function ImgUp(id) {
    let val = document.getElementById('imgin-' + id).value
    if (val) {
        try {
            fetch('/api/update/img', {
                method: 'PUT',
                body: JSON.stringify({ id, val }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    const { success } = data;

                })
            getItems(0)
        }

        catch (error) {
            console.error();
        }
    }
}

function AddBtn() {

    document.getElementById("addbar").style.backgroundColor = '#0f90f2';
    document.getElementById("market").innerHTML =
        `<div class='add'>
    <a href='http://localhost:3000/'>
    <button class="btn"><i class="fa fa-home"></i></button>
    </a>
    <form onsubmit="AddItem(event)" id='form1'>
    <h2>Adding New Item</h2>
    <div class='row'>
    <label>Set Img: </label>
    <input type='text' name='img' id='img' requiered placeholder='put img url'>
    </div>
    <div class='row'>
    <label>Add Topic: </label>
        <input type='text' name='topic' id='topic' requiered placeholder='Topic'>
        </div>
        <div class='row'>
        <label>Set Price: </label>
        <input type='number' name='price' id='price' requiered placeholder='price'>
        </div>
        <div class='row'>
        <button type='submit'>Add Item</button>
        </div>
        <div id='root'>
        </div>
       </form> 
       </div>`
    document.getElementById("addbtn").style.visibility = "hidden";
}

function AddItem(e) {
    e.preventDefault();
    let url = document.getElementById("img").value;
    let topic = document.getElementById("topic").value;
    let price = document.getElementById("price").value;

    try {
        fetch('/api/Additem', {
            method: 'POST',
            body: JSON.stringify({ url, topic, price }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const { success } = data;
                console.log({ success })
            })
        document.getElementById("root").style.visibility = 'visible'
        document.getElementById("root").innerHTML = "Item Successfully Added"
        setTimeout(() => {
            document.getElementById("root").style.visibility = 'hidden'
        }, 3000);

    }

    catch (error) {
        console.error();
    }

}