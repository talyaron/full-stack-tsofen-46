const students = [{
        name: "Omri",
        gender: "Male"
    },
    {
        name: "Tal",
        gender: "Male"
    },
    {
        name: "Rawan",
        gender: "Female"
    },
    {
        name: "Nivin",
        gender: "Female"
    }
]

students.map(({
    name,
    gender
}) => (gender === "Male" ? console.log(`${name} is a BOY`) : console.log(`${name} is a GIRL`)));