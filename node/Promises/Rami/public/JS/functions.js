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
            <img src='${item.URL}'>
            <div class='topic'>${item.TOPIC}</div>
            <div id='aa'>${item.PRICE}</div>
            </div>`
          })
          document.getElementById("market").innerHTML = itemslist;
        //document.getElementById("market").innerHTML = `<div class='item'><img src='${items}</div>`;
    })

}
getItems(0);