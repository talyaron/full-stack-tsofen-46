function getItems(e){
    fetch('/api/items')
    .then(res=>res.json())
    .then(data=>{
        let items = data;
        console.log(items)
        let itemslist ='';
        items.forEach(item => {
            itemslist += `<div class=''`
          })
        //document.getElementById("market").innerHTML = `<div class='item'><img src='${items}</div>`;
    })

}
getItems(0);