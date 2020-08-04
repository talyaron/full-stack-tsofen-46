//const showForm=document.getElementById('signin')
function ShowFunction(ele) {
      $(`${ele}`).show();
    }
    
document.getElementById("signin").addEventListener("click", function(){
    ShowFunction(".two")     
 });
 
/*showForm.addEventlistener('click' , function(){
    ShowFunction(".two")
})*/

const getMenu = new Promise((resolve, reject) => {
    fetch('/menu')
        .then(res => res.json())
        .then(menu => resolve(menu))
  });
 



(async()=>{
    const menu= await getMenu;
    let productsList = "";
    menu.forEach(item => {
    productsList += `<div class="container"> <div class ="cart-image "><img src="${item.name}"></img></div>
    <div class="data"> <h6> ${item.type} </h6>  <h6> ${item.color} </h6> <h4> Price:${item.price}</h4>
    <input id="${item.ID}" type="text" placeholder="price" class="enterPrice" style="width:60px; position:absolute; top:58px; left: 90px; ">
    <button onclick="update('${item.ID}')" class="updatePrice">Update price</button>
    <button onclick="deleteItem('${item.ID}')" class="deleteItem" >Delete Item </button></div>
    
    </div>`

    
});
    
    document.getElementById("root").innerHTML = productsList;


})();


async function sortList(){
    const menu= await getMenu;
    let productsListSorted = "";
    
    menu.forEach(item => {
        if(item.price>5000){
        productsListSorted += `<div class="container"> <div class ="cart-image "><img src="${item.name}"></img></div>
    <div class="data"> <h6> ${item.type} </h6>  <h6> ${item.color} </h6> <h4> Price:${item.price}</h4>
    <input id="${item.ID}" type="text" placeholder="price" class="enterPrice" style="width:60px; position:absolute; top:58px; left: 90px; ">
    <button onclick="update('${item.ID}')" class="updatePrice">Update price</button>
    <button onclick="deleteItem('${item.ID}')" class="deleteItem" >Delete Item</button></div>
       
    </div>`}
       
    
    });
document.getElementById("root").innerHTML = productsListSorted;
}





document.getElementById("sortList").addEventListener("click", function(){
    sortList()
});



   
function update(id){
    const price = document.getElementById(id).value;
    //  const price =  document.getElementById("price")
    
    fetch('/menu-update', {
        method: 'PUT',
        body: JSON.stringify({ price , id  }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res);   

    location.reload()
    
      
}


function deleteItem(id){
    const ItemId = document.getElementById(id);
    //  const price =  document.getElementById("price")
    
    fetch('/delete-item', {
        method: 'DELETE',
        body: JSON.stringify({ id  }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res);   

    location.reload()
    
}

function login(e){
    e.preventDefault();

    const name= e.target.elements.name.value;
    const password = e.target.elements.password.value;
    console.log(name , password)
    
    fetch('/login-admin', {
        method: 'POST',
        body: JSON.stringify({ name , password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            const { validAdmin } = data;
            console.log({validAdmin})
            
            if(validAdmin==true){
                window.location.replace('/admin.html')                              
            }
            if(validAdmin==false){
                document.getElementById('response').innerText=`Wrong username/password`
                document.getElementById ('response').style.color="red";  
                                      
            }
            
        })
}

document.getElementById('signout').addEventListener("click" , function(){
    window.location.replace('http://localhost:3000/') 
})

function addNewProduct(e){
 
    e.preventDefault();
    const img = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const color = e.target.elements.color.value;
    const type = e.target.elements.type.value;
    fetch('/addProduct', {
        method: 'POST',
        body: JSON.stringify({ img,price,color,type}),
        headers: {
          'Content-Type': 'application/json'
        },
      })


location.reload()
}

