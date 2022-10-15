import React from "react";
import { Available } from "./styles";
import CardContainer from "../UI/CardContainer";
import MealItem from "./MealItem/MealItem";
import { useFetchData } from "../../api/fetch";
import { useState } from "react";
import { useEffect } from "react";
import loading from "../../assets/loading.svg";

const AvailableMeals = () => {
  const [meals, setMeals] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const data = useFetchData();

  useEffect(() => {
    setMeals(data);
    if (typeof data === "object") {
      setIsloading(false);
    } else {
      setIsloading(false);
      setError(data);
    }
  }, [data, isLoading]);

  let mealsList = [];
  if (typeof meals === "object") {
    mealsList = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItem>
    ));
  }
  return (
    <Available>
      <CardContainer>
        {isLoading && <img id="loading" src={loading} alt="loading" />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </CardContainer>
    </Available>
  );
};

export default React.memo(AvailableMeals);
