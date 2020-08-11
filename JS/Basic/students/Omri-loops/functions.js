const students = [{
        name: "Omri",
        age: 30
    },
    {
        name: "Tal",
        age: 49
    },
    {
        name: "Rawan",
        age: 19
    },
    {
        name: "Nivin",
        age: 23
    },
    {
        name: "Taima",
        age: 22
    },
    {
        name: "Rawad",
        age: 24
    }
]

students.filter(({
    age
}) => age <= 24).forEach(({
    name
}) => console.log(name));