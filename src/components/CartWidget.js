import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext"; 

const CartWidget = () => {
  const { cart } = useContext(CartContext); 

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
    </div>
  );
};

export default CartWidget;

