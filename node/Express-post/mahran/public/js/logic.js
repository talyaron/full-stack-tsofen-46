function oncheckName() {

  // gather values
  var value = document.getElementById("inputField").value;
  const data = value;
  console.log(data)
  //handle Post
  fetch('/names', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      //  console.error('Error:', error);
    })

}
