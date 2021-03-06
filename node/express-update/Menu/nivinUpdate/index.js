const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

// app libraries
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// helpers
//reading the file JASON
const getDataFromFile = () => {
  return JSON.parse(fs.readFileSync("./data/data.json"));
};

const addDataToFile = (word, meaning) => {
  const prevData = getDataFromFile();
  prevData.forEach((element) => {
    if (element.name === word) {
      element.name = meaning;
    }
  });

  // prevData.forEach((element) => {
  //   console.log(element);
  // });

  return fs.writeFileSync("./data/data.json", JSON.stringify(prevData));
};

//find the meaning
const findWord = (word, meaning) => {
  console.log(meaning);
  let result;
  const data = getDataFromFile();

  if (!data[word]) {
    // if the world is not found in the values of the keys we will search through the values and return the key if exists
    Object.keys(data).map((key) => {
      if (data[key] === word) {
        result = key;
        return;
      }
    });
  } else {
    result = data[word];
  }
  return result;
};

// routes
app.post("/translate/add", async (req, res) => {
  const {
    body: { word, meaning },
  } = req;
  console.log("123");
  const result = findWord(word, meaning);

  addDataToFile(word, meaning);
  console.log("456");

  return res.json({ message: "Added!" });
});

app.post("/translate/test", (req, res) => {
  const {
    body: { word, meaning },
  } = req;
  const result = findWord(word);
  if (!result) return res.status(404).send({ message: "not found" });
  if (result !== meaning)
    return res.json({
      success: false,
      message: `You missed it, the right answer is ${result}`,
    });
  if (result === meaning)
    return res.json({ success: true, message: `Well done!` });
});

// main server port
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
