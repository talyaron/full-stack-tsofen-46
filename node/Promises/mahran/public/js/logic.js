
window.addEventListener('DOMContentLoaded', (event) => {

    console.log('DOM fully loaded and parsed');

    fetch('/api/getArticles', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(datamodel => {

            let articlesOnScreen = document.getElementById("maincontent").children;
            try {
                for (let i = 0; i < articlesOnScreen.length; i++) {
                    for (let j = 0; j < datamodel.length; j++) {
                        if (datamodel[j].articleNr === articlesOnScreen[i].id && datamodel[j].status == "active" ) {

                            //Assign Values to the respective Fiedls in every existing Article
                            document.getElementById(articlesOnScreen[i].id + "-ipt-location").value = datamodel[j].location;
                            document.getElementById(articlesOnScreen[i].id + "-ipt-livingSpace").value = datamodel[j].livingSpace;
                            document.getElementById(articlesOnScreen[i].id + "-ipt-availability").value = datamodel[j].availability;
                            document.getElementById(articlesOnScreen[i].id + "-ipt-price").value = datamodel[j].rentalPrice;

                            document.getElementById(datamodel[j].articleNr).style.display = "initial";
                        } else if(datamodel[j].status == "deleted") {
                            document.getElementById(datamodel[j].articleNr).style.display = "none";
                            // do nothing
                        }
                    }

                }
            } catch (err) {
                console.log(err);
            }


        })
});


/* update Article*/

function onEditArticle(event) {

    //Identify the Article Index and access the Actionbar Div to handle the Buttons logic
    var currButton = event.currentTarget.id
    var currActionbar = document.getElementById(currButton).parentElement;
    var currArticel = currActionbar.parentElement.id;


    // Get the ID´s of the Input Fields inside the respective Article
    const locationInptut = document.getElementById(currArticel + "-ipt-location");
    const livingSpaceInput = document.getElementById(currArticel + "-ipt-livingSpace");
    const availabilityInput = document.getElementById(currArticel + "-ipt-availability");
    const priceInput = document.getElementById(currArticel + "-ipt-price");

    //add Inputs to array:
    let InputArray = [locationInptut, livingSpaceInput, availabilityInput, priceInput];

    //set Editable Mode:
    InputArray.forEach(function (Input) {
        Input.readOnly = false;
        Input.style.backgroundColor = "#ffffcc";
        Input.style.border = "groove";

    })

    //handle Buttons
    currActionbar.children[0].style.display = "none";
    currActionbar.children[1].style.display = "initial";

}

function onSaveArticle() {

    //Identify the Article
    var currButton = event.currentTarget.id
    var currActionbar = document.getElementById(currButton).parentElement;
    var currArticel = currActionbar.parentElement.id;


    // Get the ID´s of the Input Fields inside the respective Article
    let locationInptut = document.getElementById(currArticel + "-ipt-location");
    let livingSpaceInput = document.getElementById(currArticel + "-ipt-livingSpace");
    let availabilityInput = document.getElementById(currArticel + "-ipt-availability");
    let priceInput = document.getElementById(currArticel + "-ipt-price");

    //Input Fields Array:
    let InputArray = [locationInptut, livingSpaceInput, availabilityInput, priceInput];

    //set Editable Mode:
    InputArray.forEach(function (Input) {
        Input.readOnly = true;
        Input.style.backgroundColor = "white";
        Input.style.border = "none";
    })

    currActionbar.children[0].style.display = "initial";
    currActionbar.children[1].style.display = "none";


    //Post Data to server:
        //URL Params:
    let vArticleNr = currArticel;
    let vLocationInptut = locationInptut.value;
    let vLivingSpaceInput = livingSpaceInput.value;
    let vAvailabilityInput = availabilityInput.value;
    let vPriceInput = priceInput.value;

    fetch('/api/updateArticle', {
        method: 'PUT',
        body: JSON.stringify( {
            vArticleNr,
            vLocationInptut,
            vLivingSpaceInput,
            vAvailabilityInput,
            vPriceInput
        } ),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
        .then( data => {
            let result = data;
            alert(result.nModified);
        })

}

 function onDeleteArticle(event) {

    //Identify the Article
    var currButton = event.currentTarget.id
    var currActionbar = document.getElementById(currButton).parentElement;
    var currArticel = currActionbar.parentElement.id;

    let vArticleNr = currArticel;
    let vArticleStatus = "deleted";



    fetch('/api/removeArticle', {
        method: 'PUT',
        body: JSON.stringify( {
            vArticleNr,
            vArticleStatus
        } ),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
        .then( data => {
            let {result} = data;
            console.log(result);
            document.getElementById(currArticel).style.display = "none";
        })
}

function onSortResult(event) {
   // var content3 = document.getElementById("maincontent").children[2].children;
}

