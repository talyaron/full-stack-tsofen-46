const obj2 = {
    firstName: "Tal",
    lastName: "Yaron",
    age: 43
}
const obj3 = {
    firstName: "Eyal",
    lastName: "yaron",
    age: 56
}

if (obj2.lastName.toLocaleLowerCase() === obj3.lastName.toLocaleLowerCase()) {
    console.log(`${obj2.firstName} And ${obj3.firstName} might be relatives`);
} else {
    console.log(`${obj2.firstName} And ${obj3.firstName} might not be relatives`);
}


if (obj2.age === obj3.age) {
    console.log(`${obj2.firstName} And ${obj3.firstName} are in the same age`);
} else {
    console.log(`${obj2.firstName} And ${obj3.firstName} are not in the same age`);
}