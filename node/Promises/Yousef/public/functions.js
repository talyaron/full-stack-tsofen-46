const getList = new Promise((resolve, reject) => {
    fetch('/api/shawarmaList')
        .then(res => res.json())
        .then(list => resolve(list))
});

function menuFunction(event){
     // continue from here to print the menu
}


(async () => {

   
   const shawarmaList = await getList; //wait for data to come back
   console.log(shawarmaList)
  
   //
})();



