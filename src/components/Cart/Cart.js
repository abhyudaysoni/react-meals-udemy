import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContainer } from "./styles";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCloseCart}>
      <CartContainer>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.onCloseCart}>
            Close
          </button>
          {hasItems && <button className="button">Order</button>}
        </div>
      </CartContainer>
    </Modal>
  );
};

export default Cart;
