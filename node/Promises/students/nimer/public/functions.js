
    function showFunction(ele) {
      $(`${ele}`).show()
    }
    function hideFunction(ele) {
      $(`${ele}`).hide()
    }

    function signInFunction(){
      if(document.getElementById("LogInPannel").style.display=="none")
      document.getElementById("LogInPannel").style.display="block";
      else{
        document.getElementById("LogInPannel").style.display="none";
      }
    }

const getMenu = new Promise((resolve, reject) => {
  fetch('/menu')
      .then(res => res.json())
      .then(menu => resolve(menu))
});




(async () => {
  const menu = await getMenu; //wait for data to come back
  let strToReturn="";
  menu.forEach(item => {
      strToReturn+=`<div class="container"> 
      <div class="cart-image"> 
          <img 
              src=${item.mainImg} /> 
              <div class="adminButtons">
      <button onclick="update('${item.id}')"
      class="editButton" >Edit</button>
      <button onclick="deleteItem('${item.id}') "class="deleteButton">Delete</button></div>
      </div> 

      <div class="data"> 
          <h2>${item.name}</h2> 
          <h4>$${item.price}  
          <input  id="${item.id}" type="text"
          class="editPrice"  placeholder="NewPrice"></h4> 
          <hr> 
          <h5>${item.discription}</h5> 
          
          <h5> <img src="facebook.svg" style="width: 20px; height: 20px;"></img> <img src="instagram.svg" style="width: 20px; height: 20px;"></img> <img src="snapchat.svg" style="width: 20px; height: 20px;"></img>
          </h5>
      </div> 
      
      
       </div>
       

  </div>`
    });
    console.log(strToReturn);
    document.getElementById("products").innerHTML = strToReturn;
  //
})();










function logIn(e){
  e.preventDefault();
  console.log(e)
  const name = e.target.elements.name.value;
  const password = e.target.elements.password.value;
  fetch('/logIn', {
      method: 'POST',
      body: JSON.stringify({ name,password }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        const { answer} = data;
        console.log(answer);
        if(answer == "wrong info"){
          document.getElementById("serverRespond2").innerHTML=answer
        }
          else{
            window.location.replace("admin.html")
            showFunction(".adminButtons");
            showFunction(".editPrice");
        
        document.getElementById("serverRespond2").innerHTML=answer
          }
}


      )
}