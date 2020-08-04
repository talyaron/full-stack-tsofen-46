var storage = window.localStorage;

const mainContainer = document.getElementById('mainContainer');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
var foodData = [];
var cartItemsCount = 0;
var currentCartItems = [];
var cartOpen = false;

const createCartItem = ({ img, name, price }) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item');

  const imgElement = document.createElement('img');
  imgElement.classList.add('imageFood');
  imgElement.src = img;

  const detailsElement = document.createElement('div');
  detailsElement.classList.add('namePrice');

  const nameElement = document.createElement('h1');
  nameElement.innerHTML = name;

  const priceElement = document.createElement('h4');
  priceElement.innerHTML = `$${price}`;

  detailsElement.appendChild(nameElement);
  detailsElement.appendChild(priceElement);
  itemContainer.appendChild(imgElement);
  itemContainer.appendChild(detailsElement);

  cartItemsContainer.appendChild(itemContainer);
};

const addToCart = (id) => {
  const item = foodData.find((food) => food.id === id);
  cartItemsCount += 1;
  cartCount.innerHTML = cartItemsCount;
  currentCartItems.push(item);
  createCartItem(item);
  storage.setItem('currentCartItems', JSON.stringify(currentCartItems));
};

const editItem = (id) => {
  console.log(id);
};

const deleteItem = (id) => {
  // $.ajax({
  //   type: 'POST',
  //   url: '/food/delete',
  //   data: { id },
  //   success: function (data) {},
  //   error: function (_, _, error) {},
  // });
  const element = document.getElementById(`item-${id}`);
  element.remove();
};

const clearCart = () => {
  storage.clear();
  cartItemsContainer.innerHTML = '';
  cartCount.innerHTML = '0';
};

const showCart = () => {
  cartOpen = !cartOpen;
  cartItemsContainer.style.display = cartOpen ? 'none' : 'flex';
};

const createItems = (data = []) => {
  data.map(({ id, img, price, name, actions }) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');
    itemContainer.id = `item-${id}`;

    const imgElement = document.createElement('img');
    imgElement.classList.add('imageFood');
    imgElement.src = img;

    const detailsElement = document.createElement('div');
    detailsElement.classList.add('namePrice');

    const nameElement = document.createElement('h1');
    nameElement.innerHTML = name;

    const priceElement = document.createElement('h4');
    priceElement.innerHTML = `$${price}`;

    const actionsElement = document.createElement('div');

    actionsElement.classList.add('buttonContainer');
    actions.map(({ name, icon }) => {
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('buttonItem');

      const imgElement = document.createElement('img');
      imgElement.classList.add('inputImgIcon');
      imgElement.src = icon;

      buttonElement.onclick =
        name === 'add'
          ? () => addToCart(id)
          : name === 'edit'
          ? () => editItem(id)
          : () => deleteItem(id);

      buttonElement.appendChild(imgElement);
      actionsElement.appendChild(buttonElement);
    });

    detailsElement.appendChild(nameElement);
    detailsElement.appendChild(priceElement);
    itemContainer.appendChild(imgElement);
    itemContainer.appendChild(detailsElement);
    itemContainer.appendChild(actionsElement);
    mainContainer.appendChild(itemContainer);
  });
};

$(document).ready(() => {
  // get data from server
  $.ajax({
    type: 'GET',
    url: '/food',
    success: function (data) {
      foodData = data;
      createItems(data);
    },
    error: function (_, _, error) {
      console.log(error);
    },
  });

  // populate cart from storage if exists
  currentCartItems = JSON.parse(storage.getItem('currentCartItems')) || [];
  currentCartItems.map((item) => createCartItem(item));
  cartCount.innerHTML = currentCartItems.length;
});
