function checkWord(e)
{
    //prevent submit to refresh page
    e.preventDefault();

    //get name from input (in OOP style)
 const arabic = e.target.elements.ar.value;
//  const pass = e.target.elements.password.value;
 

//  console.dir(user)
//  console.dir(pass)



//send name to server

 fetch('/wordsDB', {
     method: 'POST',
     body: JSON.stringify({arabic}),
     //body: JSON.stringify({arabic,hebrew}),
     headers: {
         'Content-Type': 'application/json'
     },
 }).then(res => res.json())
     .then(data => {
         const {existWord, he} = data;
         if(existWord==true)
         {
             document.body.style.backgroundColor="green";
             document.getElementById('tHe').innerText = 'Hebrew Word:' + he;
         }
         else
         {
             document.body.style.backgroundColor="red";
             document.getElementById('tHe').innerText = he;
         }
         console.log(existWord);
        
     })
}


///////////////////////////////////////////

function checkWord(e)
{
    //prevent submit to refresh page
    e.preventDefault();

    //get name from input (in OOP style)
 const arabic = e.target.elements.ar.value;
//  const pass = e.target.elements.password.value;
 

//  console.dir(user)
//  console.dir(pass)



//send name to server

 fetch('/wordsDB', {
     method: 'POST',
     body: JSON.stringify({arabic}),
     //body: JSON.stringify({arabic,hebrew}),
     headers: {
         'Content-Type': 'application/json'
     },
 }).then(res => res.json())
     .then(data => {
         const {existWord, he} = data;
         if(existWord==true)
         {
             document.body.style.backgroundColor="green";
             document.getElementById('tHe').innerText = 'Hebrew Word:' + he;
         }
         else
         {
             document.body.style.backgroundColor="red";
             document.getElementById('tHe').innerText = he;
         }
         console.log(existWord);
        
     })
}