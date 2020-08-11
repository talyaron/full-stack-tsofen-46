function handleLogin(e) {

    e.preventDefault();
    let { name, imgUrl } = e.target.elements;
    name = name.value;
    imgUrl = imgUrl.value;

    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ name, imgUrl }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const { id, login } = data;

            //save id to localstorage
            localStorage.setItem('twitterUserID', id);

            //route
            if (login) {
                window.location.replace('/home.html')
            }

        })

}

function getUserID() {
    return localStorage.getItem('twitterUserID');
}

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
            console.log(data);

           
            let profileHTML = '';
            profileHTML += `<img src="${data.imgUrl}" id="userimg"> <h2 id="username">${data.name}</h2>`;
 
      const profile =  document.getElementById('profile');
      profile.innerHTML=profileHTML;

    })

}

function getTrend() {
    const userID = getUserID();

    fetch('/api/gettrends', {
        method: 'POST',
        body: JSON.stringify({ id: userID }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            let trenddataHTML = '';
            data.forEach(trends=>{
           
            
            trenddataHTML += `<p id="trenditem"> <h2 id="trendname">${trends.trend}</h2> <p id="trendnum">${trends.tweetnum} Tweets</p> </p>`;

        });
            const trendsdata =  document.getElementById('trendsdata');
            trendsdata.innerHTML=trenddataHTML;

            
   })

}
