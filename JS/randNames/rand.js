const names = [
  "sally",
  "lena",
  "moran",
  "monera",
  "nivin",
  "nimer",
  "sizar",
  "jeries",
  "morad",
  "moamen",
  "mahmud",
  "rawad",
  "omri",
  "saleh",
  "taimaa",
  "abdallah",
  "yousef",
  "marshood",
];

function randomNames(names, groupSize) {
  try {
    const groups = [];

    for (let j = 0; j < names.length / groupSize; j++) {
      const newGroup = [];
      for (let i = 0; i < groupSize; i++) {
        const indexOfName = getRandomName(names);

        newGroup.push(names[indexOfName]);
        names.splice(indexOfName, 1);
      }

      groups.push(newGroup);
    }

    if (names.length > 0) {
      groups.push(names);
    }

    console.log(groups);
  } catch (err) {
    console.error(err);
  }
}

function getRandomName(names) {
  const arraySize = names.length;

  let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

  return indexOfName;
}

randomNames(names, 3);
