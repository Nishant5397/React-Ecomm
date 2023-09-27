import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";
function ProductCard({ product, cart }) {
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
      <AddToCart cart={cart} />
    </div>
  );
}

// export var a = 10;
// export var b = 10;

export default ProductCard;
