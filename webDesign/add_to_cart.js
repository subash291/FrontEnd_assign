let total_price=0;
function addToCart(itemName, price) {
  let side_Cart = document.getElementById("side_cart");
  side_Cart.innerHTML += `<h5>${itemName}</h5>`;

  total_price += parseInt(price);
  let tp = document.getElementById("priceT");
  tp.innerHTML = `<h4>Total amount: ${total_price}</h4>`;
}
