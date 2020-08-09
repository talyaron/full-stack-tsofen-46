function fetchPostList(event) {
    fetch('/api/postList')
        .then(res => res.json())
        .then(data => {
            menuHandler(data)
        });
}
fetchPostList();

function menuHandler(data) {
    let items = '';
    data.forEach(element => {
        items += `<div><p>${element.name}</p>
                   <h6>${element.post}</h6> 
                   </div>`;
    });
    items += `<div id="add-wrapper">
    <input placeholder="Post" id="add-post">
    <button onclick="addElement('add-post')">Add Post</button>
    </div>`;
    const root = document.getElementById('center-root');
    root.innerHTML = items;
}

function addHandler(e){

}
