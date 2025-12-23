import { products } from "./data/data.js";
import { Cart , add_to_cart , updateCartQuantity } from "./cart.js";
updateCartQuantity()
load_from_cart()

export function load_from_cart(){
let itemsHTML=''

Cart.forEach((product)=>{
  let flag;
  products.forEach((item)=>{
        if(item.id===product.productID){flag=item}})

const item=`
<div class="cart-item d-flex flex-wrap align-items-center justify-content-evenly border  border-2 rounded-2 mt-4 p-4">
      <div class="item-info  gab-3 d-flex align-items-center ">
        <img class="cart-img" src="${flag.image}" alt="">
        <p class="cart-name fw-bold ms-2 p-2">${flag.name}</p>

      </div>

      <div class="item-price">
        <p class="fw-bold text-center p-2">Price:${(flag.priceCents/100).toFixed(2)} <span class="ms-1">$</span></p>
      </div>
      <div class="item-quantity">

        <p class="fw-bold text-center p-2">QTY:${product.quantity}</p>
      </div>
      <div class="item-total">

        <p class="fw-bold text-center p-2"> TOTAL:${((flag.priceCents/100)*product.quantity).toFixed(2)}<span class="ms-1">$</span></p>
      </div>
    </div>
`
itemsHTML+=item
})
document.querySelector('.cart-items-container').innerHTML=itemsHTML
console.log('cart items generated successfuly')
}
