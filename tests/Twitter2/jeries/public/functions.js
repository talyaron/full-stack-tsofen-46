/*const getAdmin = new Promise((resolve, reject) => {
    fetch('/registerAdmin')
        .then(res => res.json())
        .then(admin => resolve(admin))
  });*/

  function uid() {
    return '_' + Math.random().toString(36).substr(2, 9);
};
  
function login(e){
    e.preventDefault();
    const id=uid();
    const img = e.target.elements.img.value;
    const username = e.target.elements.username.value;
    fetch('/addAdmin', {
        method: 'POST',
        body: JSON.stringify({id, img,username}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res=>res.json())
        .then(data=>{
          const {id, login} = data;
  
          //save id to localstorage
          localStorage.setItem('twitterUserID', id);
  
          //route
          if(login){
              window.location.replace('/home.html')
          }  
        })  

      
  }
  function getUserID(){
    return localStorage.getItem('twitterUserID');
}

console.log(getUserID())


function getUser() {
    const userID = getUserID();

    fetch('/api/getUser', {
        method: 'POST',
        body: JSON.stringify({ id: userID }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })

}


const getdata= new Promise((resolve, reject) => {
    fetch('/api/data')
        .then(res => res.json())
        .then(tweet => resolve(tweet))
  });

(async()=>{
    const tweets= await getdata;
    let tweetlist = "";
    tweets.forEach(item => {
      tweetlist += `

      <div class="tweets"> 
      <div class="data"> <h6> ${item.tweet} </h6>  </div>
      </div>`

    
});
    document.getElementById("root").innerHTML = tweetlist;
    

})
();

function post(e){
    e.preventDefault();
    const text = e.target.elements.tweet.value;
    fetch('/addData', {
        method: 'POST',
        body: JSON.stringify({ text}),
        headers: {
          'Content-Type': 'application/json'
        },
      
      })

}
  


