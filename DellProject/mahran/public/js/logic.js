function ongetDeleted() {

    fetch('/api/getDeletedJiras')
    .then(res => res.json())
    .then( data => {

        console.log(data);
})
}