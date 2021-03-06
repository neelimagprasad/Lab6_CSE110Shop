// product-item.js
const template = document.createElement("template");
template.innerHTML = `
<li class="product">
  <img src="" alt="">
  <p class="title"></p>
  <p class="price"></p>
</li>
<style>
  .price {
    color: green;
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
  }
  .product {
    align-items: center;
    background-color: white;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
    'image'
    'title'
    'price'
    'add';
    grid-template-rows: 67% 11% 11% 11%;
    height: 450px;
    filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
    margin: 0 30px 30px 0;
    padding: 10px 20px;
    width: 200px;
  }
  .product > button {
    background-color: rgb(255, 208, 0);
    border: none;
    border-radius: 5px;
    color: black;
    justify-self: center;
    max-height: 35px;
    padding: 8px 20px;
    transition: 0.1s ease all;
  }
  .product > button:hover {
    background-color: rgb(255, 166, 0);
    cursor: pointer;
    transition: 0.1s ease all;
  }
  .product > img {
    align-self: center;
    justify-self: center;
    width: 100%;
  }
  .title {
    font-size: 1.1em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title:hover {
    font-size: 1.1em;
    margin: 0;
    white-space: wrap;
    overflow: auto;
    text-overflow: unset;
  }
  .price {
  color: green;
  font-size: 1.8em;
  font-weight: bold;
  margin: 0;
}

.product {
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-areas: 
  'image'
  'title'
  'price'
  'add';
  grid-template-rows: 67% 11% 11% 11%;
  height: 450px;
  filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
  margin: 0 30px 30px 0;
  padding: 10px 20px;
  width: 200px;
}

.product > button {
  background-color: rgb(255, 208, 0);
  border: none;
  border-radius: 5px;
  color: black;
  justify-self: center;
  max-height: 35px;
  padding: 8px 20px;
  transition: 0.1s ease all;
}

.product > button:hover {
  background-color: rgb(255, 166, 0);
  cursor: pointer;
  transition: 0.1s ease all;
}

.product > img {
  align-self: center;
  justify-self: center;
  width: 100%;
}

.title {
  font-size: 1.1em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title:hover {
  font-size: 1.1em;
  margin: 0;
  white-space: wrap;
  overflow: auto;
  text-overflow: unset;
}
</style>

`;
class ProductItem extends HTMLElement {
  
  static get observedAttributes() {
    return ["image-src", "title", "price", "incart"];
  }
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }


  attributeChangedCallback(att_name, old_val, new_val) {
    switch (att_name) {
      case "image-src":
        shadow.querySelector("li>img").src = new_val;
        break;
      case "title":
        shadow.querySelector("li>img").alt = new_val;
        break;
      case "price":
        shadow.querySelector("p.price").innerText = new_val;
        break;
      
      case "incart":
          break;
        
      default:
    
    }
  }

  
}

customElements.define("product-item", ProductItem);