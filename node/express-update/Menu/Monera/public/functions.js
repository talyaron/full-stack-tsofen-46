 
/*function renderMenu(menu) {
    
    console.log(name) 
    
    fetch('/name', { 
        method: 'POST', 
        body: JSON.stringify({name}), 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
    }).then(res => res.json()) 
        .then(data => { 
            const {success} = data; 
            document.getElementById('result').innerText = success; 
            console.log(success); 
            
        }) 
}*/

getMenu()

function getMenu(){
    fetch('/menu')
    .then(res => res.json())
    .then(data=>{
        let items = '';

        console.log(data)

        data.forEach(item=>{
            //${item.ID}")'>${item.name}, Price:${item.price} NIS
            items += `<p> ID: ${item.ID} , Name: ${item.name} , Price: ${item.price} NIS , <label for="newPrice"> new Price: </label>, 
            <input type="text" id='item.ID'> ,<button onclick="updatePrice(item.ID)">Update Price</button></p>`;
        });
     
        const root = document.getElementById('root');
        root.innerHTML = items
    })
}

function updatePrice(Id){
   const newPrice=document.getElementById("newPrice").value;
    console.log(Id);
    console.log(newPrice);

}