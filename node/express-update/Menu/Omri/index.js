const express = require("express");
const app = express();
const menu = require("./public/js/menu");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/products", (req, res) => res.status(200).send(menu));

app.put("/api/product", (req, res) => {
    const {
        newPrice,
        id
    } = req.body;
    const index = menu.findIndex(item => item.id === id);
    menu[index].price = newPrice;

    res.status(200).send(menu[index])
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));