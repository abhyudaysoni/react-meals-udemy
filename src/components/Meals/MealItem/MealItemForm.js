import React from "react";
import { ItemForm } from "./styles";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <ItemForm>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </ItemForm>
  );
};

export default MealItemForm;
