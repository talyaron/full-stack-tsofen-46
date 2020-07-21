const products = [
  {
    model: "Nike",
    color: "red",
    price: 1500,
    type: "Shirt",
  },
  {
    model: "Golf",
    color: "blue",
    price: 150,
    type: "Pants",
  },
  {
    model: "castro",
    color: "white",
    price: 500,
    type: "Scarf",
  },
  {
    model: "Adidas",
    color: "orange",
    price: 650,
    type: "Jacket",
  },
];

const filterByColor = (products, color) => {
  const newProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].color == color) newProducts.push(products[i]);
  }
  return newProducts;
};

const filterByPrice = (products, price) => {
  const newProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].price < price) newProducts.push(products[i]);
  }
  return newProducts;
};

const makeDisccount = (products, disscount) => {
  const newProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = { ...products[i] };
    product.price = (1 - disscount) * product.price;
    newProducts.push(product);
  }

  return newProducts;
};

/** Solutions */
console.log(products);
console.log(filterByColor(products, "blue"));
console.log(filterByPrice(products, 1500));
console.log(makeDisccount(products, 0.2));
