
function onSubmitUserDetails() {


    //get the inout values
    let vUsename = document.getElementById("username").value;
    let vImage = document.getElementById("imageSrc").value;

    var target = document.getElementsByName("UsercommentInput");
    //post to server

    fetch('/api/postUserInput', {
        method: 'POST',
        body: JSON.stringify({
            vUsename,
            vImage
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            let result = data;

        })


    document.getElementById("userImageTGt").src = vImage;
    document.getElementById("InputFormContainer").style.display = "none";
    document.getElementById("outputcontainer").style.display = "flex";

}