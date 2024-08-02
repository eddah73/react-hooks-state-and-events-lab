import React ,{useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  //add to cart
  function addToCart(){
    setIsInCart(true)
  }
  //remove from cart
  function removeFromCart(){
    setIsInCart(false)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={isInCart ? removeFromCart : addToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
