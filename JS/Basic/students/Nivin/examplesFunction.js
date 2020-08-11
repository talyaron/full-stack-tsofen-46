var arNew = [];
var arr = [
  {
    name: "nivin",
    gender: "female",
    age: 16,
  },
  {
    name: "tal",
    gender: "male",
    age: 80,
  },

  {
    name: "nareen",
    gender: "female",
    age: 24,
  },
];

function array(arr) {
  if (arr.age < 24) arNew.push(arr.age);
  return arNew;
}

console.log(array(arr));
