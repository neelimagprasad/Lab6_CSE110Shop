// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    window.localStorage.setItem("array", JSON.stringify(data));
    
    
  })
    
  
});