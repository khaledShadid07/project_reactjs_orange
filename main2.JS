import { products } from "./data/data.js";
import { Cart, add_to_cart, updateCartQuantity, remove_from_cart, load_from_storage ,addToStorage,total_payment,sub_payment} from "./cart.js";

updateCartQuantity()
load_from_cart()

export function load_from_cart() {
  let itemsHTML = ''

  Cart.forEach((product) => {
    let flag;
    products.forEach((item) => {
      if (item.id === product.productID) { flag = item }
    })

    const item = `
<div> 
    <div class="cart-item d-flex flex-wrap align-items-center justify-content-evenly border  border-2 rounded-2 mt-4 p-4">
      <div class="item-info  gab-3 d-flex align-items-center flex-wrap align-content-center justify-content-center">
           <div class="d-flex align-content-center justify-content-center align-items-center flex-column">
           <img class="cart-img" src="${flag.image}" alt="">
        <p class="cart-name fw-bold  mt-4">${flag.name}</p>  
           </div>
        
        <button   data-id="${product.productID}" class="btn btn-dark btn-remove-js">Remove Item</button>

      </div>
       
      
      <div class="item-price">
        <p class="fw-bold text-center p-2">Price:${(flag.priceCents / 100).toFixed(2)} <span class="ms-1">$</span></p>
      </div>
      <div class="item-quantity">

        <p class="fw-bold text-center p-2">QTY:${product.quantity}</p>
      </div>
      <div class="item-total">

        <p class="fw-bold text-center p-2"> TOTAL:${((flag.priceCents / 100) * product.quantity).toFixed(2)}<span class="ms-1">$</span></p>
      </div>
    </div>
`
    itemsHTML += item
  })
  document.querySelector('.cart-items-container').innerHTML = itemsHTML
  console.log('cart items generated successfuly')


}

document.querySelectorAll(".btn-remove-js").forEach((button) => {
  button.addEventListener('click', () => {

    const productid = button.dataset.id
    remove_from_cart(productid)

    load_from_cart()
    updateCartQuantity()

    //window.location.reload();
    setTimeout(() => {
      window.location.reload();
      window.scrollTo(0, scrollPos);
    }, 100);



  })
})


document.querySelector('.order-summary-c').innerHTML=`
 <div class="order-info ">
        <p class="lead ">Subtotal</p>
        <p class="lead ">${sub_payment()}$</p>
        <p class="lead ">Tax</p>
        <p class="lead ">20.$</p>
        <p class="lead " >Discount</p>
        <p class="lead ">00$</p>
        <p class="lead fw-bold">TOTAL:</p>
        <p class="lead fw-bold">${total_payment()}$</p>
        
       </div>

`


