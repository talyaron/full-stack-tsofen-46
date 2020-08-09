function LoginCheck1() {
  // INSERT THE USER TO TABLE db 


}
async function LoginCheck() {
    var NewUser = document.getElementById("NameInput").value;
    var imgSrc = document.getElementById("IMGInput").value;
    alert(NewUser+" "+ imgSrc)
    await fetch("/AddUser", {
        method: "PUT",
        body: JSON.stringify({
             
            Name:NewUser ,
            IMG:imgSrc,

        }),
        headers: {
            "Content-Type": "application/json",
        },
    });    
 
        window.location.replace("mainScreen.html");
        document.getElementById("test123").innerText="11111111"

  }


function unableEditbutt() {
    document.getElementById("LoginButtID").removeAttribute("disabled")

}
function unableIMGINput() {
    document.getElementById("IMGInput").removeAttribute("disabled")

}