import React from "react";
import { Available } from "./styles";
import CardContainer from "../UI/CardContainer";
import MealItem from "./MealItem/MealItem";
import { useFetchData } from "../../api/fetch";
import { useState } from "react";
import { useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState();
  const data = useFetchData();

  useEffect(() => {
    setMeals(data);
  }, [data]);

  let mealsList = [];
  if (meals) {
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
        <ul>{mealsList}</ul>
      </CardContainer>
    </Available>
  );
};

export default React.memo(AvailableMeals);
