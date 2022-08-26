import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import { Header, MainImage } from "./styles";
import HeaderCartButton from "./HeaderCardButton";

const HeaderContainer = (props) => {
  return (
    <>
      <Header>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </Header>
      <MainImage>
        <img src={mealsImage} alt="meals" />
      </MainImage>
    </>
  );
};

export default HeaderContainer;
