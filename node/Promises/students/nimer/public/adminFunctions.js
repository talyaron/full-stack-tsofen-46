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
function signOut(){
  window.location.replace("index.html")
}
function addNewProduct(e){
    e.preventDefault();
    const url = e.target.elements.url.value;
    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    const price = e.target.elements.price.value;
    const model = e.target.elements.model.value;
    fetch('/addProduct', {
        method: 'POST',
        body: JSON.stringify({ model,price,description,name,url}),
        headers: {
          'Content-Type': 'application/json'
        },
      })


location.reload()}



function deleteItem(id){
  console.log(id);
  fetch('/delete-item', {
      method: 'DELETE',
      body: JSON.stringify({ id  }),
      headers: {
          "Content-Type": "application/json"
      }
  }).then(res => res);   

  location.reload()
  
}