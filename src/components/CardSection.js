import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="CardSection">
      <Card
        img={`${process.env.PUBLIC_URL}/iphone15pro.jpeg`}
        alt="iPhone 15 pro"
        rating="5.0"
        title="iPhone 15 pro"
        cost="$999"
      />
      <Card
        img={`${process.env.PUBLIC_URL}/iphone15.jpeg`}
        alt="iPhone 15"
        rating="4.0"
        title="iPhone 15"
        cost="$400"
      />
      <Card
        img={`${process.env.PUBLIC_URL}/iphonese.jpeg`}
        alt="iPhone SE"
        rating="5.0"
        title="iPhone SE"
        cost="$300"
      />
    </section>
  );
};

export default CardSection;
