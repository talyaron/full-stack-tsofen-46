itemsRender()
userRender()
function itemsRender(event) {
    fetch('/getTweets')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let tweets = '';
            data.forEach(item => {//item here contains all the data from the objects that we get from the server 
                //to get to a certain item we type item.(variable) example: item.id get the item id
                tweets += `<div class="oneTweet">
                <div class="tweetDescription">
                    <img class="newTweetImage"
                        src=" ${item.src}" />
                    <div class="tweetName">${item.name}</div>
                    </div>
                    <div class="tweetContent"> ${item.content}</div>
                
                <div class="logos">
                    <h5     ></h5> <img class="icons" style="margin-left: 3vw;" src="iconmonstr-speech-bubble-comment-thin.svg" style="width: 20px; height: 20px;"></img>
                        <img  class="icons" src="iconmonstr-favorite-2.svg" style="width: 20px; height: 20px;"></img> <img class="icons"
                            src="iconmonstr-upload-5.svg" style="width: 20px; height: 20px;"></img>
                    </h5>
                </div>
            </div>`

            });
            const webSiteContent = document.getElementById('currentTweets');//html div to insert the items to display them in the main website
            webSiteContent.innerHTML = tweets;
        })
}


function userRender() {
    fetch('/getUser')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let user = '';
            data.forEach(item => {//item here contains all the data from the objects that we get from the server 
                //to get to a certain item we type item.(variable) example: item.id get the item id
                user += `<img class="newTweetImage"
                src="${item.src}" />
            <form class="tweetPannel" onsubmit="tweet(event)">
                <input class="tweetMessagePannel" type="text" name="tweetContent" placeholder="What's Happening?">
                <input style="display: none;" type="text" name="userId" value="${item.id}" >
                <input style="display: none;" type="text" name="name" value="${item.name}" >
                <input style="display: none;" type="text" name="src" value="${item.src}" >
                <button class="tweetButton" type="submit">Tweet</button>
            </form>`

            });
            const webSiteContent = document.getElementById('newTweetPannel');//html div to insert the items to display them in the main website
            webSiteContent.innerHTML = user;
        })
}



function tweet(event) {
    event.preventDefault();
    const content = event.target.elements.tweetContent.value;
    const id = event.target.elements.userId.value;
    const src = event.target.elements.src.value;
    const name = event.target.elements.name.value;
    
    fetch('/tweet', {
        method: 'POST',
        body: JSON.stringify({ id,content,name,src}),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const { answer} = data;
        console.log(answer);
        itemsRender()
        })

    }