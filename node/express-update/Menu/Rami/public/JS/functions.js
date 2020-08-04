function updateBTN(e,itemV,id)
{
    const val = itemV[0].value;
    try{
    fetch('/updateprice', {
        method: 'PUT',
        body: JSON.stringify({ id,val }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        const {success} = data;

        console.log(success)


    })
    renderMenu();
}

catch(error){
    console.error();
}
}
renderMenu();

function renderMenu() {
    fetch('/getmenu', {
        method: 'GET',
        
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        let menu = data;
        
        let menuStr = '';
        menu.forEach(item => {
          menuStr += `<p'>${item.name}, Price:${item.price} NIS <input id=${item.ID} type='number'><button id=${item.ID} onclick=updateBTN(event,${item.ID},this.id)>update</button></p>`
        })
        document.getElementById('root').innerHTML = menuStr;


    })
  }