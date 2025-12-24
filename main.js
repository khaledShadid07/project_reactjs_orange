
console.log("I Dont Drive Fast I Fly Slowly")
import { products } from "./data/data.js";
import { Cart , add_to_cart , updateCartQuantity } from "./cart.js";




// all products container in main page start
const render_products = () => {

  let productsHTML = '';
  products.forEach((product) => {
    const html = `  
     
      <div class="product-card card  p-4 shadow-lg border-2">
       <img class="product-card-img " src=${product.image} alt="">
       <p class="fw-bold text-center mt-2 product-name">${product.name}</p>
       <div class="star-container d-flex align-items-center justify-content-center">
         <img src="./images/ratings/rating-${(product.rating.stars)*10}.png"  class="w-50" alt="">
         <p class="lead fw-light mt-3 ms-2">${product.rating.count}</p>
       </div>
        <p class="text-center fw-bold ">${((product.priceCents)/100).toFixed(2)}<span class="ps-1">$</span></p>
        <button data-product-id="${product.id}" class="add-button-js btn btn-outline-dark border-2 fw-bold">Add To Cart</button>
    </div>
     
     `
    // generate one product card each iteration
    productsHTML+=html;

  })//end for each add all cards products

  document.querySelector('.all-products-container').innerHTML=productsHTML
  console.log('display all products with javaScripts successfuly')

}

render_products()
 updateCartQuantity()
// all products container in main page end


document.querySelectorAll('.add-button-js').forEach((button)=>{
  button.addEventListener('click',()=>{
   const productId=button.dataset.productId
   add_to_cart(productId)
   updateCartQuantity()
  })//evebt lisner end
})//for each end
