
/*function renderMenu(menu) {
    
    console.log(name) 
    
    fetch('/name', { 
        method: 'POST', 
        body: JSON.stringify({name}), 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
    }).then(res => res.json()) 
        .then(data => { 
            const {success} = data; 
            document.getElementById('result').innerText = success; 
            console.log(success); 
            
        }) 
}*/



const getMenu = new Promise((resolve, reject) => {
    try {
        fetch('/menu')
            .then(res => res.json())
            .then(data => {
                console.log('I am the first!!!!!!!')
                let items = '';



                data.forEach(item => {
                    //${item.ID}")'>${item.name}, Price:${item.price} NIS
                    items += `<p> ID: ${item.ID} , Name: ${item.name} , Price: ${item.price} NIS , <label for="newPrice"> new Price: </label>, 
            <input type="text" id=${item.ID}> ,<button onclick="updatePrice('${item.ID}')">Update Price</button></p>`;
                });

                const root = document.getElementById('root');
                root.innerHTML = items

                resolve(data);
            })
    } catch (err) {
        console.error(err);
        reject(err)
    }

})
function test() {
    console.log('11111111')
}
getMenu.then(data=>console.log(data));
console.log('I am the Second :-(');
test();
console.log('2222222')

function updatePrice(Id) {
    const newPrice = document.getElementById(Id).value;
    console.log(newPrice)
    fetch('/priceUpdate', {
        method: 'PUT',
        body: JSON.stringify({ Id, newPrice }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {

            getMenu;


        })
    //console.log(Id);
    // console.log(newPrice);

}

const waitOneSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yo man")
    }, 1000)
})

waitOneSecond.then(res => { console.log(res) })
console.log('Ha!!!!')