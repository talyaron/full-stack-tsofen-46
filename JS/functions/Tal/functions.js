// console.log(add(2,6));
// console.log(sqr(3));

// function add(a, b) {
//     return a + b
// }

// const multi = function (a, b) { //anonymous function
//     return a * b;
// }

// let x = multi;

// console.log(add(2, 5))
// console.log(multi(2, 5))
// console.log(x(8, 4))

// let y = x;
// console.log(y(12, 4))

// let sub = (a, b) => { //arrow function ES6
//     return a - b;
// }

// let sqr = x => x*x;


// console.log(sqr(10))

const students = [
    { name: 'Lina', age: 24 },
    { name: 'Slach', age: 23 },
    { name: 'Marshood', age: 25 }
]

const studentsLessThenAge = (age, students) => {
    const newStudents = [];

    students.forEach(student => {
        if (student.age < age) newStudents.push(student);
    })

    return newStudents;
}

console.log(studentsLessThenAge(25, students));