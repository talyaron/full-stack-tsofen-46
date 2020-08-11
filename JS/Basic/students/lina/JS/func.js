
// function age(student) {
//     for(i in student)
//     {
//         if(student[i].age < 24)
//             console.log(student[i]);
//     }
// }

////////////////////////

const students = [
    {name:'Lina', age: 23},
    {name:'Moran', age: 23},
    {name:'Sally', age: 25},
    {name:'Miky', age: 24},
    {name:'Taima', age: 22}
];

const studentLessAge = (age, students) =>
{
    const newStudent = [];
    students.forEach(student => {
        if(student.age < age)
            newStudent.push(student);
    });
    return newStudent;
}

///////////


 console.log(studentLessAge(25,students)); //   age(student);
