import { products } from "./data/data.js";
// initilize cart start
export let Cart ;

load_from_storage()

export function load_from_storage(){
Cart=JSON.parse(localStorage.getItem('cart'))
if(!Cart){Cart=[
{
  productID:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
 

  }, 
  {
  productID:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1,
  
  } 

]}


}

// initilize cart end





//add to cart start
export function add_to_cart(productId){
  let matchingItem;
  Cart.forEach((cartItem)=>{
   if(productId===cartItem.productID){matchingItem=cartItem}
  })//end cart loop


  if(matchingItem){
       matchingItem.quantity+=1
  }//matching item true
  else{
    Cart.push({
      productID:productId,
      quantity:1
    })
  }//matching item false
  addToStorage();
}

//add to cart END



//remove from cart start
export function remove_from_cart(productId){
  
  const newCart =[]
  Cart.forEach((cartItem)=>{
    if(productId !== cartItem.productID){newCart.push(cartItem)}
    else if(productId === cartItem.productID & cartItem.quantity>1){newCart.push({...cartItem,quantity:cartItem.quantity-=1})}

  })//loop cart end
  Cart=newCart
  addToStorage()
}
//remove from cart END







// add to storage start
export function addToStorage(){
  localStorage.setItem('cart',JSON.stringify(Cart))
}
// add to storage end




//update cart quantity
export function updateCartQuantity(){
  let cartQuantity=0;
  Cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity
  })//end loop
let quantityStorage=localStorage.setItem('quantity',JSON.stringify(cartQuantity))
document.querySelector('.nav-cart-p').innerHTML=localStorage.getItem('quantity')

}
//update cart quantity

export function total_payment(){
let total=0;
let tax=20;
Cart.forEach((item)=>{
products.forEach((product)=>{
  if(product.id===item.productID){total+=((product.priceCents/100)*item.quantity)}
})

})
return (total+tax).toFixed(2);
}

export function sub_payment(){
let total=0;

Cart.forEach((item)=>{
products.forEach((product)=>{
  if(product.id===item.productID){total+=((product.priceCents/100)*item.quantity)}
})

})
return total.toFixed(2);
}