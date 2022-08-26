import React from "react";
import MealItemForm from "./MealItemForm";
import { Meal } from "./styles";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Meal>
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </Meal>
  );
};

export default MealItem;
