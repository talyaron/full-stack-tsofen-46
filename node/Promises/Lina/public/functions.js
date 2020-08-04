const getStudents = new Promise((resolve, reject) => {
    fetch('/api/students')
        .then(res => res.json())
        .then(students => resolve(students))
});

const getPupils = new Promise((resolve, reject) => {
    fetch('/api/pupils')
        .then(res => res.json())
        .then(pupils => resolve(pupils))
});

(async () => {

   
   const students = await getStudents; //wait for data to come back
  
   const pupils = await getPupils;
  
   //
})();

async function stam(){
    console.log('1')
    const students = await getStudents; //wait for data to come back
    console.log('2')
    const pupils = await getPupils;
    console.log(students, pupils);
}

stam()




