console.time('sync')
// const getStudents = new Promise((resolve, reject) => {

//     fetch('/api/students')
//         .then(res => res.json())
//         .then(data => {
//             resolve(data)
//         })
// })

// const getPupils = new Promise((resolve, reject) => {

//     fetch('/api/pupils')
//         .then(res => res.json())
//         .then(data => {
//             resolve(data)
//         })
// })

function a() {
    const getStudents = new Promise((resolve, reject) => {

        fetch('/api/students')
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })

    getStudents.then(x=>console.log(x))
}


function getPupilsImproved() {
    return new Promise((resolve, reject) => {

        fetch('/api/pupils')
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}

//this is a one time promise, you get the first time data only!
// getStudents.then(x => { console.log(x) });


//this is a way to get many times the updated data.
function getStudentImproved() {
    return new Promise((resolve, reject) => {

        fetch('/api/students')
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}

//handle
function handleGetStudent() {
    // getStudents.then(x=>{console.log(x)});
    getStudentImproved().then(x => { console.log(x) })
}


async function getAllData() {
    console.time('sdfsdf')
    let x = await getStudentImproved();

    console.log(x)
    let y = await getPupilsImproved();
    console.log(y)
    console.timeEnd('sdfsdf')
}

getAllData();
console.timeEnd('sync');

// promise all
// console.time('all')
// Promise.all([getStudentImproved(), getPupilsImproved()]).then(results=>{
//     console.log(results)
//     console.timeEnd('all')
// })
