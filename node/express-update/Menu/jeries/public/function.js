/*const result = document.getElementById('result');
const resultword = document.getElementById('resultword');
const fix = document.getElementById('fixword');*/


function update(id){
    const price = document.getElementById(id).value;
    //  const price =  document.getElementById("price")
     console.log(price)
    console.log (id)
    fetch('/menu-update', {
        method: 'PUT',
        body: JSON.stringify({ price , id  }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res);   

    location.reload()
    
      
}





