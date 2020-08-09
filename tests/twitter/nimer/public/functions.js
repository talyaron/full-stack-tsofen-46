
// gives a unique items id for each item in the database
function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};


//function to add new item to the database from the client
function login(event) {
    event.preventDefault();
    const imgSrc = event.target.elements.url.value;
    const name = event.target.elements.name.value;
    const id = uid();
    const password = event.target.elements.password.value;
    fetch('/logIn', {
        method: 'POST',
        body: JSON.stringify({ id,password,name,imgSrc}),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const { answer} = data;
        console.log(answer);
        window.location.replace("twitter.html")
        })

}







//function to update a certain item in the database
function update(id) {
    const price = document.getElementById(id).value;
    fetch('/updateItem', {
        method: 'PUT',
        body: JSON.stringify({ id, price }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)//we can show the data in the html if we want by getting the dom of certain elemetn and display the message on it
            itemsRender();
        })


}







function deleteItem(id){
    console.log(id);
    fetch('/delete-item', {
        method: 'DELETE',
        body: JSON.stringify({ id  }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res);   
  
    itemsRender()
    
  }