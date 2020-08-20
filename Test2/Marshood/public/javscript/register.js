
function RegisterUser(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let Password = event.target.Password.value;
    let img = event.target.img.value;
    //send to server to reigser if the user not exist on DB 
    console.log("asd")
    fetch('/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                name: name,
                email: email,
                Password:Password,
                img:img
            })
    })
        .then(response => response.json())
        .then(data => {
         console.log("asdasdas")
            console.log('Success:', data[0].success);
            if (data[0].success) {//true
                 location.replace("index.html");
             }
            else {
                document.getElementById("AlertBox").style.display = "block";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
 }

function AlertHide(){
    console.log("asd123");
    document.getElementById("AlertBox").style.display = "none";
}
 const form = document.getElementById('FormRegister');
form.addEventListener('submit', RegisterUser);

function LoginBtn(){
    location.replace("index.html");


}