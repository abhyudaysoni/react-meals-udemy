import React from "react";
import { Card } from "./styles";

const CardContainer = (props) => {
  return <Card>{props.children}</Card>;
};

export default CardContainer;
