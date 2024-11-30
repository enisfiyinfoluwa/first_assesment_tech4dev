import "./elementManipulation.js"
import "./product.js"

import { ProductService, Product } from "./product.js";
 
const addEventsToDom = async () => {
    const product = new ProductService();
    const products = await product.getProducts();
    const container = document.getElementById("storeItems");


    
  //   for (let p of products) {
  //     const newProduct = new Product(p);
  //     createEventCard(newProduct, container);
  // }

    products.forEach((p) => {
      const newProduct = new Product(p)
      createEventCard(newProduct, container);



})
  
}
 
 
const createEventCard = (product, container) => {

  const card = document.createElement("div");
  card.className = "event_card";
  

  const imageHolder = document.createElement("div");
  imageHolder.className = "image_holder";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  imageHolder.appendChild(img);
  card.appendChild(imageHolder);
 

  const content = document.createElement("div");
  content.className = "event_content";
 

  const title = document.createElement("p");
  title.className = "event_title";
  title.textContent = product.title;
  content.appendChild(title);
 

  const rating = document.createElement("p");
  rating.className = "event_rate";
  rating.innerHTML = product.rating.rate;
  content.appendChild(rating);
 

  const description = document.createElement("p");
  description.textContent = product.description;
  content.appendChild(description);
 
  
  const button = document.createElement("button");
  button.innerHTML = 'View details <i class="bi bi-arrow-up-right"></i>';
  button.addEventListener("click", (el, ev) => {
    const myid = product.id
    console.log(myid)
    window.location.href = "eachproduct.html?id=" + myid ;
    
  })
  content.appendChild(button);
 
  
  card.appendChild(content);
  
  container.appendChild(card);
 
};
 
addEventsToDom();