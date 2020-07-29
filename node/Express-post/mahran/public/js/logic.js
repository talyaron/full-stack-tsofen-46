

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
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())  //fromat to JSON
    .then(data => {
      const { isInNames } = data;
      //const {result} = data;
      output.innerText = isInNames;
      // output.innerText = result;
    })

}



function onSaveTranslation(event) {


  //Define Variables:
  var hbrwInput = document.getElementById("hebInpFs").value;
  let TransResult = document.getElementById("TranslResult");

  fetch("/api/post-translate", {
    method: 'POST',
    body: JSON.stringify({ hbrwInput }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      const { hbrwInput } = data;
      try {

        // console.log(hbrwInput);
        TransResult.innerText = hbrwInput;

      } catch (err) {

        console.log(err);
      }


    })


}




