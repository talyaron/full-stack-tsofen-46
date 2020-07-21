let x = {
  firstName: "nivin",
  lastName: "Abbas",
  age: 22,
};
let y = {
  firstName: "tal",
  lastName: "yaron",
  age: 64,
};
let z = {
  firstName: "ali",
  lastName: "Abbas",
  age: "64",
};

//console.log(x, y, z);

if (x.lastName == y.lastName) {
  console.log(" nivin & tal They are close");
} else if (z.lastName == y.lastName) {
  console.log("ali and tal are close");
} else if (z.lastName == x.lastName) {
  console.log("nivin and ali are close");
}

if (x.age == y.age) {
  console.log(" nivin & tal They same age");
} else if (z.age == y.age) {
  console.log("ali and tal same age");
} else if (z.age == x.age) {
  console.log("nivin and ali same age");
}
