const resultword = document.getElementById('resultword');
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
          menuStr += `<img src=" ${item.name}"></img> Price:${item.price} NIS  <input id=${item.ID} type='number'><button id=${item.ID} onclick=updateBTN(event,${item.ID},this.id)>update Price</button><br>ID:${item.ID}<br><br>`
        })
        document.getElementById('root').innerHTML = menuStr;


    })
  }
  function additem(e){
    e.preventDefault();

    const url = e.target.elements.nurl.value;
    const price = e.target.elements.nPrice.value;

    fetch('/api/additem', {
        method: 'POST',
        body: JSON.stringify({ url ,price }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { wordExist } = data;
            console.log(wordExist)
            //print to DOM
            if(wordExist == true){
             resultword.innerText = `its Already exist`}
             else {
            resultword.innerText = `Added succesfully` 
             }
        }) 
        renderMenu();
}


function deleteItem(e){
  e.preventDefault();

  const ItemId = e.target.elements.ItemId1.value;


  fetch('/api/delete-item', {
      method: 'PUT',
      body: JSON.stringify({ ItemId }),
      headers: {
          "Content-Type": "application/json"
      }
  }).then(res=>res.json())
    .then(data=>{
      const {success} = data;

      console.log(success)


  })
  renderMenu();
}



        function updateBTN(e,itemV,id)
{
  e.preventDefault();

    const val = itemV[0].value;
    console.log(val)
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

   