import React from "react";
import Footer from "./Footer";
import CardButton from "./CardButton";
import CardAboutInterest from "./CardAboutInterest";
import CardImage from "./CardImage";

const BusinessCard = () => {
  return (
    <div className="BusinessCard">
      <CardImage />
      <div className="card-title">
        <h1>Naing Khant Htet</h1>
        <p>Frontend developer</p>
        <small>naingkhanthtet.website</small>
      </div>
      <CardButton />
      <CardAboutInterest />
      <Footer />
    </div>
  );
};

export default BusinessCard;
