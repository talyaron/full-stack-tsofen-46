//get uid;
function uid() 
{

    return '_' + Math.random().toString(36).substr(2, 9);
}

renderMenu();

function renderMenu() 
{
    try 
    {
        ///////////////////////
        fetch('/menu')
        .then(res => res.json())
        .then(menu=>{
            let menuStr = '';
            menu.forEach(item => {
            menuStr += `<form onsubmit='UpdatePrice("${event}")'>
            <label>${item.name}</label>
            <label id ='price'>Price:${item.price} NIS</label>
            <input type="text" id="newPrice">
            <button type="submit">Change!!!</button><br><br><br>  
            </form>`
            
            
            //`<p onclick='updatePrice("${item.ID}")'>${item.name}, Price:${item.price} NIS</p>`
            })
            document.getElementById('root').innerHTML = menuStr;
        })
        //////////////////////
       
        }catch(err) 
        {
            console.error(err);
        }

        ///////////////////
        // <form onsubmit="UpdatePrice(event)">
        // <label for="dish">Hamburger</label>
        // <label id ='price'>25 NIS</label>
        // <input type="text" id="newPrice">
        // <button type="submit">Change!!!</button><br><br><br>  
        // </form> 
  //////////////////////
}



function updatePrice(itemID) 
{
    try 
    {
      console.log(itemID);
      //find in array;

      const index = menu.findIndex(item => item.ID === itemID);

      if (index > -1) 
      {
        //update to zero
        menu[index].price = 0;

      }

      renderMenu(menu);
    }catch(err) 
    {
      console.error(err)
    }
}




function UpdatePrice(e)
{
    //prevent submit to refresh page
    e.preventDefault();

    //get name from input (in OOP style)
 const newPrice = e.target.elements.newPrice.value;
 document.getElementById('price').innerText = newPrice +'NIS';
//send name to server
//  fetch('/wordsDB', {
//      method: 'POST',
//      body: JSON.stringify({arabic}),
//      //body: JSON.stringify({arabic,hebrew}),
//      headers: {
//          'Content-Type': 'application/json'
//      },
//  }).then(res => res.json())
//      .then(data => {
//          const {existWord, he} = data;
//          if(existWord==true)
//          {
//              document.body.style.backgroundColor="green";
//              document.getElementById('tHe').innerText = 'Hebrew Word:' + he;
//          }
//          else
//          {
//              document.body.style.backgroundColor="red";
//              document.getElementById('tHe').innerText = he;
//          }
//          console.log(existWord);
        
//      })
}

