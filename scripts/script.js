// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let array = JSON.parse(localStorage.getItem('products'));
  if (window.localStorage.getItem("array") == null) {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((data) => {
    window.localStorage.setItem("array", JSON.stringify(data));
    array = data
    
  });
  let productListHolder = document.getElementById("product-list");
  const products = products.map((product) => {
    const item = document.createElement('product-item'); 
    item.setAttribute('img-src', product.image);
    item.setAttribute('title', product.title);
    item.setAttribute('price', product.price);
    item.setAttribute('incart', array.includes(product.id));
    productListHolder.appendChild(item);

    return item;
  });
}
    
  
});