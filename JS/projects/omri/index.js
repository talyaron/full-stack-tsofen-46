const express = require("express");
const app = express();
const products = require("./public/js/fakeData");


app.use(express.static("public"));
app.use(express.json());

// get all products
app.get("/api/products", (req, res) => res.status(200).send(products));

// update price
app.put("/api/updatePrice", (req, res) => {
    const {
        id,
        price: newPrice
    } = req.body;

    const index = products.findIndex((item) => item.id === id);
    products[index].price = newPrice;

    res.status(200).send(products[index]);
})

app.delete("/api/delete", (req, res) => {
    const {
        id
    } = req.body;

    const index = products.findIndex((item) => item.id === id);
    products.splice(index, 1);

    res.status(200).send({
        numOfItems: products.length
    });
})


app.put("/api/sortBy", (req, res) => {
    const {
        property
    } = req.body;

    if (property === "price") products.sort((a, b) => a.price - b.price);

    else products.sort((a, b) => (a.name > b.name) ? 1 : -1);

    res.status(200).send(products)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))