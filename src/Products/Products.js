// import { a, b } from "./ProductCard";
//Named export
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
// default exports

// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs 10,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ];

function Products({ cart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("rendered");

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        console.log("fetch");
        setLoading(false);
        setProducts(res);
      })
      .catch(function (err) {
        console.log(err);
        setError(err);
      });
  }, []);

  if (error) {
    return <div> Hey, Its embarrasing you got this {error} </div>;
  } else if (isLoading) {
    return (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="loading"
        />
      </div>
    );
  } else {
    return (
      <div>
        {products.map(function (item) {
          return <ProductCard product={item} key={item.title} cart={cart} />;
        })}
      </div>
    );
  }
}
// {title: card1, price: 20}

export default Products;

// props => properties
// parameters that you are passing to a function
// map function
// function available in array
// it is  going to loop through an array in
// a fancier way that a for loop
// var a = [1,2,3]
// double
// 2,4,6
// a.map(function(item, index) {
//  return item*2;
//})
// [2, 4, 6]

// {status: 200, message: {{}} }

// state
// it is a variable which once set would rerender the component in which it is defined
// it is going to retain the value of itself even on the rerender

// useState hook
// hook it is a concept in js
// which says that all the helper functions in js
// would be combined together and called as hooks
//  custom hooks and there can be defaul hooks

// useState(default value)
// return array  [stateVar, setterFunctionStateVar]

// setProducts
// setting
// rerendering

// useEffect(() => {} ,[])

// dependency array I would take state varibales and props from parent
// function in the depenedency array
