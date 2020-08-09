(async function startup() {
    const currentUser = localStorage.getItem("user")
    const response = await fetch("/api/getUser", {
        method: "POST",
        body: JSON.stringify({
            username: currentUser
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const user = await response.json();
    console.log(user);
    document.getElementById("userPhoto").src = user[0].img;

    renderPostsList();
})()


async function renderPostsList() {
    const response = await fetch("/api/post");
    const posts = await response.json();

    const postsList = document.getElementById("posts")
    let items = "";
    posts.forEach(item => {
        const {
            username,
            content,
        } = item;
        items += genPost(username, content);
    });
    postsList.innerHTML = items
}


async function handlePostCreate(e) {
    const message = document.getElementById("postContent");
    const currentUser = localStorage.getItem("user")
    await fetch("/api/post", {
        method: "post",
        body: JSON.stringify({
            username: currentUser,
            content: message.value.trim()
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    location.reload();
}




function genPost(username, content) {
    return `
    <div class="post">
        <div class="post-title">
            <h3>${username}</h3>
        </div>
        <div class="post-content">
            <p>${content}</p>
        </div>
    </div>
    `
}