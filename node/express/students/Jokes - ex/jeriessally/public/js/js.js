const button = document.getElementById("clickc");

button.addEventListener('click', (e) => {
   fetch('/j')
   .then(res=>res.json())
   .then(data=> {
   console.log(data)
       
   
   const root=document.getElementById('root')
   root.innerHTML=data.joke;
   })
   

});