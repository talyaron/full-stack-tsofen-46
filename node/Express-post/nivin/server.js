const express = require("express");
const app = express();

const names = ["omri", "nivin", "tal"];

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use(express.static("public"));

app.post("/names", (req, res) => {
  const name = req.body.name;

  //check if name exists in array
  const isThere = names.includes(name);

  //responde true if exist, false if not
  res.send(isThere);
}); // end point

app.listen(3000, () => {
  console.log("App is Listening");
});
