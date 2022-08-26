import React from "react";
import "./App.css";
import HeaderContainer from "./components/Layout/Header/HeaderContainer";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <HeaderContainer />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
