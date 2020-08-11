
function renderChampions(name) {
    try {
        ///////////////////////
        fetch('/champions')
            .then(res => res.json())
            .then(champions => {
                console.log(champions)
                let championsStr = '';
                champions.forEach(item => {
                    if (item.name == name) {
                        championsStr += `<div> 
                    <img src=${item.img} id="championsImg"><br><br>
                    <label>Skin: ${item.skin}</label><br>
                    <label id ='price'>Price:${item.price}</label><br>
                    <input type="text" id=${item.skin}>
                    <button onclick="updatePrice('${item.skin}', '${name}')">Update Price</button> <br>
                    <button onclick="deleteSkin('${item.skin}', '${name}')">Delete Skin</button> <br><br>
                    </div>`;
                    }
                    //<button type="submit" name="action" value="Update">Change!!!</button>
                    // <button type="submit" name="action" value="Delete">Delete!!!</button><br><br><br> 
                })
                championsStr += `<div>
            <button id="'${name}'" onclick="SortChampions('${name}')">Sort</button>
            </div>`;
                document.getElementById('item').innerHTML = championsStr;
            })
        //////////////////////

    } catch (err) {
        console.error(err);
    }
}

function updatePrice(skin, name) {
    const newPrice = document.getElementById(skin).value;
    fetch('/UpdatePrice', {
        method: 'PUT',
        body: JSON.stringify({ skin, newPrice }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {

            renderChampions(name);
        })
}

function deleteSkin(skin, name) {
    // const newPrice=document.getElementById(skin).value;
    fetch('/deleteSkin', {
        method: 'DELETE',
        body: JSON.stringify({ skin }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {

            renderChampions(name);
        })
}

function AddSkin(e) {
    console.log("workkkkkkkkkkkkkkk")
    //get name from input (in OOP style)
    const name = e.target.elements.name.value;
    const skin = e.target.elements.skin.value;
    const img = e.target.elements.img.value;
    const price = e.target.elements.price.value;

    fetch('/addSkin', {
        method: 'PUT',
        body: JSON.stringify({ name, skin, img, price }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {
            const { existSkin } = data;
            if (existSkin == true) {
                //  document.body.style.backgroundColor="gren";
                console.log('foundddd');
                document.getElementById('addP').innerText = 'This skin is already exist';
            }
            else {
                //  document.body.style.backgroundColor="red";
                console.log('not found');
                //  document.getElementById('addP').innerText = 'You have successfully add';
            }
            //  renderChampions(name);
            //  admin();
        })
}

//  function admin()
//  {

//         ///////////////////////

//         let adminStr =  `
//             <h3>Add new Skin</h3>
//             <form id='AddSkin' onsubmit="AddSkin('${event}')">
//                 <label>Champion's Name: </label>
//                 <input type="text" id="name">
//                 <br><br>
//                 <label>Skin's Name: </label>
//                 <input type="text" id="skin">
//                 <br> <br>  
//                 <label>Skin's img: </label>
//                 <input type="text" id="img">
//                 <br><br>
//                 <label>Skin's Price: </label>
//                 <input type="text" id="price">
//                 <br><br>
//                 <p id='res'>result</p> <br><br>
//                 <button type="submit">Add!!!</button>

//             </form>`;
//             //////
//             // `<div> 
//             //     <label>Champion's Name: </label>
//             //     <input type="text" id="name">
//             //     <br><br>

//             //     <label>Skin's Name: </label>
//             //     <input type="text" id="skin">
//             //     <br> <br>

//             //     <label>Skin's img: </label>
//             //     <input type="text" id="img">
//             //     <br><br>

//             //     <label>Skin's Price: </label>
//             //     <input type="text" id="price">
//             //     <br><br>

//             //     <p id='res'>result</p> <br><br>
//             //     <button onclick="AddSkin('${name.value}, ${skin.value}, ${img.value}, ${price.value}')">Add!!!</button> <br>
//             //     </div>`;

//             document.getElementById('item').innerHTML = adminStr;
//  }


function SortChampions(name) {

    //const newPrice=document.getElementById(skin).value;
    fetch('/SortChampions', {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(res => res.json())
        .then(data => {

            renderChampions(name);
        })
}










///////////////////////////////////////////////////////////////////////////////////////
// const getStudents = new Promise((resolve, reject) => {
//     fetch('/api/students')
//         .then(res => res.json())
//         .then(students => resolve(students))
// });

// const getPupils = new Promise((resolve, reject) => {
//     fetch('/api/pupils')
//         .then(res => res.json())
//         .then(pupils => resolve(pupils))
// });

// (async () => {


//    const students = await getStudents; //wait for data to come back

//    const pupils = await getPupils;

//    //
// })();

// async function stam(){
//     console.log('1')
//     const students = await getStudents; //wait for data to come back
//     console.log('2')
//     const pupils = await getPupils;
//     console.log(students, pupils);
// }

// stam()




