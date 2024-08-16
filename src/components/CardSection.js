import React from "react";
import Card from "./Card";
import travelData from "../travel-data";

const CardSection = () => {
  const dataElements = travelData.map((data) => {
    return (
      <Card key={data.id} {...data}/>
    );
  });

  return <section className="CardSection">{dataElements}</section>;
};

export default CardSection;
