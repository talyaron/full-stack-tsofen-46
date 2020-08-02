function getItems(e){
    fetch('/api/items')
    .then(res=>res.json())
    .then(data=>{
        let items = data;
        console.log(items)
        let itemslist ='';
        items.forEach(item => {
            itemslist += 
            `<div class='item'>
            <img class='ItemImg' src='${item.URL}'>
            <div class='topic'><h1>${item.TOPIC}</h1></div>
            <div id='aa'><h2>Price: ${item.PRICE}</h2></div>
                <div id='buttons'>
                <button onclick='Edititem(${item.ID})' >Edit Item</button>
                <button onclick='Deleteitem(${item.ID})' >Delete Item</button>
                    </div>
            </div>`
          })
          document.getElementById("market").innerHTML = itemslist;
        //document.getElementById("market").innerHTML = `<div class='item'><img src='${items}</div>`;
    })

}
getItems(0);

function Deleteitem(id){
    let answer = window.confirm("Are You Sure Want To Delete Item?");
    if(answer)
    {
        console.log("Del")
        fetch('/api/Deleteitems', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            const success = data;
            if(success)
            {
                 getItems(0)
            }else{
                
            }
    
    
        })
    }
}