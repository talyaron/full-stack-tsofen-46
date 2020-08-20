const form = document.getElementById('FormLogin');
form.addEventListener('submit', RegisterUser);
function AlertHide(){
    console.log("asd123");
    document.getElementById("AlertBox").style.display = "none";

}
function RegisterUser(event) {
    event.preventDefault();
     let email = event.target.email.value;
    let Password = event.target.Password.value;
     //check if the user exit on DB and Login 
     fetch('/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                Password: Password

            })
    })
        .then(response => response.json())
        .then(data => {
            alert('Success:', data[1]);
            if (data[0].success) {//true
                localStorage.setItem("name", data[1].name);
                localStorage.setItem("img", data[1].img);
                localStorage.setItem("Email",email);
                localStorage.setItem("UserID",data[1]._id);
                // will to add function to get the online users later ...
                location.replace("MainScreen.html");
            }
            else {
                document.getElementById("AlertBox").style.display = "block";

             }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  

 }

 function RegisterBtn(){

    location.replace("register.html");

 }