
async function menShoes(){
  const menu = await getMenu; //wait for data to come back
  let strToReturn="";
  menu.forEach(item => {
    if(item.model=="menShoe"){
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
       

  </div>`}
    })
    document.getElementById("products").innerHTML = strToReturn;
  }


  async function menClothes(){
    const menu = await getMenu; //wait for data to come back
    let strToReturn="";
    menu.forEach(item => {
      if(item.model=="menClothes"){
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
         
  
    </div>`}
      })
      document.getElementById("products").innerHTML = strToReturn;
    }


    async function womenClothes(){
      const menu = await getMenu; //wait for data to come back
      let strToReturn="";
      menu.forEach(item => {
        if(item.model=="womenClothes"){
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
           
    
      </div>`}
        })
        document.getElementById("products").innerHTML = strToReturn;
      }
  



async function womanShoes(){
  const menu = await getMenu; //wait for data to come back
  let strToReturn="";
  menu.forEach(item => {
    if(item.model=="womenShoe"){
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
       

  </div>`}
    })
    document.getElementById("products").innerHTML = strToReturn;
  }

  async function supplement(){
    const menu = await getMenu; //wait for data to come back
    let strToReturn="";
    menu.forEach(item => {
      if(item.model=="supplement"){
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
         
  
    </div>`}
      })
      document.getElementById("products").innerHTML = strToReturn;
    }


    async function allProducts(){
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
        })
        document.getElementById("products").innerHTML = strToReturn;
      }