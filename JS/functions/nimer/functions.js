let Arr = [
    person1 = { name: "nimer", age: 24 },
    person2 = { name: "subhi", age: 22 },
    person3 = { name: "brabaa", age: 23 },
    person4 = { name: "brabee", age: 40 },
    person5 = { name: "meow", age: 24 }

]

let sub24 = (arr) => {
    arr.forEach(function (elm) {
        if (elm.age < 24) {
            console.log("name:", elm.name, "age:", elm.age)
        }

    }
    )
}


console.log(sub24(Arr))

