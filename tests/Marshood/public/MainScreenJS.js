  
 GetUser();
 document.getElementById("img-save-sru").style.display = "none";
 document.getElementById("name-save-sru").style.display = "none";

 getTwitts();

function GetUser() {
    console.log("919191");
    fetch('/GetUsersOnline')
        .then(res => res.json())
        .then(items => {
            items.forEach(item => {
                 document.getElementById("main-m").innerHTML=`<img src="${item.img}" alt="User" width="500" height="600"> Wellcome ${item.name}`;
                //document.getElementById("Name-m").innerHTML=`Wellcome ${item.name}`;
                document.getElementById("img-save-sru").innerText=item.img;
                document.getElementById("name-save-sru").innerText=item.name;
            })
         })
}

function getTwitts()
{
    console.log("get ...");
    fetch('/getTwitts')
        .then(res => res.json())
        .then(items => {
            items.forEach(item => {
                 document.getElementById("TwittsP").innerHTML+=`<div class="boxS"><img src="${item.img}" alt="User" width="50" height="60"> ${item.name}<p>  ${item.Twitt}</p></div>`;
            
            })
         })
}

async function postTwitt() {
    var TPost = document.getElementById("TwitText").value;
    var name = document.getElementById("Name-m").value;
    //var img=document.getElementById("Name-m").value;
     await fetch("/postTwitt", {
        method: "PUT",
        body: JSON.stringify({
            Twitt:TPost ,
            img: document.getElementById("img-save-sru").innerHTML,
            name:document.getElementById("name-save-sru").innerHTML
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });    
 //better to redraw..
        window.location.replace("mainScreen.html");
       

  }