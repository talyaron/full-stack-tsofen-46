const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

// app libraries
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const url =
  "mongodb+srv://nivin:apiFHVcK1RJINyzq@cluster0.gsx6h.mongodb.net/test";

const mongoose = require("mongoose");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Meal = mongoose.model("Meal", {
  id: Number,
  name: String,
  img: String,
  price: Number,
  actions: Array,
});

const maqlubi = new Meal({
  id: 5,
  name: "nemer",
  img: "./public/assets/hotWings.png",
  price: 28,
});
maqlubi.save().then(() => console.log("nenene"));

// const getDataFromFile = () => {
//   return JSON.parse(fs.readFileSync("./data/data.json"));
// };

// const writeDataToFile = (data) => {
//   return fs.writeFileSync("./data/data.json", JSON.stringify(data));
// };

app.get("/meal", (_, res) => {
  // return res.json(Meal);

  Meal.find({}, function (err, docs) {
    res.send(docs);
  });
});

app.post("/food/delete", (req, res) => {
  const {
    body: { id },
  } = req;
  const data = Meal.find({});
  const newData = data.filter((item) => item.id.toString() !== id.toString());
  writeDataToFile(newData);
  return res.status(200);
});

app.listen(3000, () => {
  console.log("Server is running : 3000");
});
