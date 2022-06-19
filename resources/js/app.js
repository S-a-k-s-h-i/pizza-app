import axios from 'axios';

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

function updateCart(pizza) {
  //add pizza to cart
  axios.post('/update-cart', pizza).then((res) => {
    cartCounter.innerText = res.data.totalQuantity;
  });
}
addToCart.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let pizza = JSON.parse(btn.dataset.pizza);
    updateCart(pizza);
  });
});
