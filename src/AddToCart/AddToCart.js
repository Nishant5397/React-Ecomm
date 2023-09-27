import { useContext } from "react";

import CartContext from "../Context/CartContext";

function AddToCart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  function increase() {
    decreaseQuantity();
    console.log(cart);
  }
  return <button onClick={increase}> Add To Cart</button>;
}

export default AddToCart;

// you need a + and - functionality
// cart object
// cart = {
//  1: {
// title: Apple MacBook Pro,
// price: 122012,
// quantity: 2,
//},
//  2: {
// title: Apple Iphone,
// price: 122012,
// quantity: 2,
//}
//}
