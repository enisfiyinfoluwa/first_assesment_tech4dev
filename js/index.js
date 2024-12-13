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
  card.className = "event_card border rounded-lg border-gray-200";
  

  const imageHolder = document.createElement("div");
  imageHolder.className = "image_holder ";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className= "h-60 w-96 object-cover hover:object-scale-down"
  imageHolder.appendChild(img);
  card.appendChild(imageHolder);
 

  const content = document.createElement("div");
  content.className = "event_content m-6";
 

  const title = document.createElement("p");
  title.className = "event_title font-semibold";
  title.textContent = product.title;
  content.appendChild(title);
 

  const rating = document.createElement("p");
  rating.className = "event_rate text-sm flex";
  rating.innerHTML = `Rating <ul class="list-disc ml-6"> <li class=""> ${product.rating.rate} </li></ul> `;
  
  content.appendChild(rating);
 

  const description = document.createElement("p");
  description.textContent = product.description;
  description.className= "text-sm mt-4"
  content.appendChild(description);
 
  
  const button = document.createElement("button");
  button.innerHTML = 'View details <i class="bi bi-arrow-up-right"></i>';
  button.className= "text-[#432361] text-sm mt-4 font-semibold"
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