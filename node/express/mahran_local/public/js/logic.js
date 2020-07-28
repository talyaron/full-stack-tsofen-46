

function onShowJocke() {
    //frtch the data from server
    fetch('/jockes')
    .then(response => response.json()) //convert to JSON
    .then(data=>{
        let jokesHTML = '';
        const {joke}=data
        const {joke}=data;
        jokesHTML += `<p>${joke}</p>`;

    })

   // console.log(daten);
  //  alert("show jocke")
}