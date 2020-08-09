const website =document.getElementById('website');
const loginsite = document.getElementById('login');

const profileimg = document.getElementById('profileimg');
const username = document.getElementById('username');


function login(event){

    loginsite.style.display="none";
    website.style.display="flex";

    const userimg=profileimg.value;
    console.log(userimg);
    const usern=username.value;
    console.log(usern);

    fetch('/login', {
        method: 'PUT',
        body: JSON.stringify({usern,userimg}),
        headers: {
            'Content-Type': 'application/json'
        },
     }).then(res=>res.json())
     .then(data => {
                    
        console.log(data.userimg)
       insertimg(data.userimg)
        
    })
    

}

function insertimg(img){

      console.log(img);
      const userimg = document.getElementById('userimg');
      let imghtml='';
      imghtml += ` <img id="batman" src="${img}" width="60px"  >`
      userimg.innerHTML=imghtml;


}

function savetweet(event){
    const tweet =document.getElementById('tweet').value;
    const user = username.value;
    const userimg=profileimg.value;

    console.log(tweet);
    console.log(user);

    fetch('/tweetsave', {
        method: 'PUT',
        body: JSON.stringify({user,tweet,userimg}),
        headers: {
            'Content-Type': 'application/json'
        },
     })



}

// function refresh(){
//     const data = document.getElementById('infotweeting');
//     let datahtml='';
//     datahtml += `<img id="batman" src="${img}" width="60px" <p>${} <br>
//                   `
// }