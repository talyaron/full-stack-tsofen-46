function handleLogin(e) {

    e.preventDefault();
    let { name, password } = e.target.elements;
    name = name.value;
    password = password.value;

    console.log(name,password)

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
        .then(data => {
            const { id, login } = data;

            //save id to localstorage
            localStorage.setItem('chefUserID', id);

            //route
            if (login) {
                window.location.replace('/editmenu.html')
            }

        })

}

function getUserID() {
    return localStorage.getItem('chefUserID');
}
 

function getUser() {
    const userID = getUserID();
    console.log(userID)
    fetch('/api/getUser', {
        method: 'POST',
        body: JSON.stringify({ id: userID }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
        .then(data => {
            console.log(data);

           
            let profileHTML = '';
            profileHTML += `<h2 id="username"> hello ${data.name} <img src="img/food.png" width="30px"></h2>  `;
 
      const profile =  document.getElementById('profile');
      profile.innerHTML=profileHTML;

    })

}

function handlemenu(e) {

    e.preventDefault();
    let { foodname, imgefood,foodprice,foodrecipe } = e.target.elements;
    foodname = foodname.value;
    imgefood = imgefood.value;
    foodprice = foodprice.value;
    foodrecipe = foodrecipe.value;
    console.log(foodname,imgefood,foodprice,foodrecipe);

    fetch('/api/editmenu', {
        method: 'POST',
        body: JSON.stringify({ foodname, imgefood,foodprice,foodrecipe}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

   e.target.reset();


}
function openmenu(){
    window.location.replace('/menu.html')
    
}

function back(){
    window.location.replace('/editmenu.html')
}

function getmenu(){


    fetch('/api/menus')
    .then(res => res.json())
    .then(data => {
        let itemHTML = '';
        console.log(data)
        data.forEach(menuitem=>{
          
            itemHTML +=  buildmenu( menuitem.foodname, menuitem.imgefood, menuitem.foodprice, menuitem.foodrecipe)
          
    });
         
        
        const menucard = document.getElementById('menucard');
        menucard.innerHTML = itemHTML;
    })
 
    

}

function buildmenu(foodname ,imgefood,foodprice, foodrecipe) {
    return `

    <div class="card">
        <div class="card-img">
            <img src="${imgefood}" width="120px" height="120px">
            <p> Price:${foodprice}$ </p>
        </div>

        <div class="card-content">
          <h3>-${foodname}</h3>
          <p> ${foodrecipe}</p>
        </div>

    </div>
    `
}