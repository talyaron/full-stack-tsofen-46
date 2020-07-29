const express = require("express");
const app = express();
const names = require("./public/js/namesServices");


const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// app.get("")
app.post("/names", (req, res) => {
    if (req.body.name === "") return res.status(400).send("Invalid name.");

    const name = req.body.name;
    const isIncluded = names.includes(name);

    return res.status(200).send(isIncluded);
})

app.listen(port, () => console.log(`Listening on port ${port}...`));