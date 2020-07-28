function oncheckName(event) {
event.preventDefault();
  // gather values

  //handle Post

  //define variables
  let input = document.getElementById("inputField").value;
  let output = document.getElementById("OutputResult");
  //console.log(input);

  //Post Request

  fetch("/post-name", {
    method: 'POST',
    body: JSON.stringify({ input }),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())  //fromat to JSON
  .then(data => {
    const {isInNames} = data;
  //const {result} = data;
  output.innerText = isInNames;
 // output.innerText = result;
  })
  
 

}
