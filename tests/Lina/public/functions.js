renderNews();

function renderNews() {
    try {
        ///////////////////////
        fetch('/accounts')
            .then(res => res.json())
            .then(accounts => {
                let accountStr = '';
                accounts.forEach(item => {
                    accountStr += `<div> 
                    <img src=${item.img} >
                    <p>${item.feed}</p>
                    
                    </div>`;
                })
                accountStr += `<div>
            </div>`;
                document.getElementById('news').innerHTML = accountStr;
            })
        //////////////////////

    } catch (err) {
        console.error(err);
    }
}

function AddFeed(e) {
    console.log("workkkkkkkkkkkkkkk")
    //get name from input (in OOP style)
    //const img = e.target.elements.img.value;
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF8ugIVhszKdSNtfMHha2gbPW3G_JtlIbZkQ&usqp=CAU';
    //const name = e.target.elements.name.value;
    const name = 'Lina';
    const feed = e.target.elements.feed.value;
    console.log(feed);

//route should be add addTwitt

    fetch('/addAccount', {
        method: 'PUT',
        body: JSON.stringify({ name, img, feed}),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {
            const { existAcount } = data;
            if (existAcount == true) {
                document.body.style.backgroundColor = "gren";
                console.log('foundddd');
            }
            else {
                document.body.style.backgroundColor = "red";
                console.log('not found');
            }
            renderNews();
        })
}

