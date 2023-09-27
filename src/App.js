import "./styles.css";
import Products from "./Products/Products";
import CartContext from "./Context/CartContext";

import { useState } from "react";
export default function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity() {
    console.log("increase Quantity");
  }

  function decreaseQuantity() {
    console.log("decrease Quantity");
  }
  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <Products />
      </div>
    </CartContext.Provider>
  );
}

// function component in react
// Returning jsx from js code
// html writeen in js code is know jsx
// react uses components in order to create the UI's that you are looking at

// IN react you can create reusable components
// starter pack for react

// npm/npx  create-react-app

// npm run start

// webpack
// add react
// 100steps
// app up and running

// createElement
// create texnode
// appendchild
