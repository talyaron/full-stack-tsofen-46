const root = document.getElementById('root');

fetch('/enter')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.admin[0])
        const admin = data.admin[0]
        root.innerHTML = `<h1>hello </h1>
    <img id="loginImage"src="${admin.image}" alt="">
    <h2 id = "loginName">${admin.name}</h2>
    <button id="login" onclick="login(event)">LOGIN</button>
    `
    })

    function post(event) {
        const text = document.getElementById('comment').value
        fetch('/addcomment', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                const admin = data.admin[0]
                render(admin)
            })
    }
    

function login(event) {
    fetch('/firstpage', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
            const admin = data.admin[0]
            console.log('try it!')
            render(admin);
        
        })
}




function render(admin) {
    console.log('render')
    const root = document.getElementById('root');
    root.innerHTML = ` 
    <div class='container'>
    <div id='images' class='iconImage'>
        <img src="https://www.sketchappsources.com/resources/source-image/ios_7_twitter_icon.png" alt="twit">
        <img src="https://thumbs.dreamstime.com/z/home-icon-home-icon-main-page-button-navigation-sign-black-silhouette-symbol-isolated-white-background-simple-vector-icon-107953138.jpg" alt="homepage">
        <img src="https://cdn5.vectorstock.com/i/1000x1000/74/94/notification-icon-bell-alarm-alert-vector-25357494.jpg" alt="notfication icon">
        <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-message-icon-png-image_318159.jpg" alt="message">
        <img src="data:image/jpeg;base64,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">
        img src="https://image.shutterstock.com/image-vector/camera-icon-social-media-sign-260nw-1670879974.jpg">
    </div>

    <div id='body' class='bodyy'>
        <div id='addcomment'>
            <img src="${admin.image}" alt="" id='homeImage'>
            <h3>${admin.name}</h3>
            <input type="text" id='comment' placeholder='New comment'>
            <button id='commentButton' onclick="post(event)">POST</button>
        </div>
        <div id='main'>Main</div>
    </div>

    <div id='cont2'>cont2</div>
</div>
<div id='cont2' class="cont2">
    <h2>fgrefrgfer</h2>
    <div>
        <h4>grfgrgr </h4>
        <h5> rfrderf</h5>
    </div>

    <div>
        <h4>fgrefrgfer</h4>
        <h5>grfgrgr</h5>
    </div>
</div>`
    
    let admincomment = '';
    const comment = admin.comment
    Comment.forEach(element => {
        admincomment += `<h3>${element}</h3> <br>`
    });
    const mainp = document.getElementById('mainp')
    mainp.innerHTML = admincomment;

}