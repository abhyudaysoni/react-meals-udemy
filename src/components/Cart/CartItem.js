import React from "react";
import { CartItemContainer } from "./styles";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <CartItemContainer>
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">{props.price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
