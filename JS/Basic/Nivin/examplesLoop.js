var arr = [
  {
    name: "nivin",
    gender: "female",
  },
  {
    name: "tal",
    gender: "male",
  },

  {
    name: "nareen",
    gender: "female",
  },
];

for (let i in arr) {
  console.log(arr[i]);
}

for (let i of arr) {
  console.log(i);
}
