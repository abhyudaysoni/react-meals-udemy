import React, { useState } from "react";
import "./App.css";
import HeaderContainer from "./components/Layout/Header/HeaderContainer";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartVisibilityHandler = () => {
    setCartIsShown((prev) => !prev);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={cartVisibilityHandler} />}
      <HeaderContainer onShowCart={cartVisibilityHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
