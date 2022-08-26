import React from "react";
import { InputContainer } from "./styles";

const Input = (props) => {
  return (
    <InputContainer>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </InputContainer>
  );
};

export default Input;
