import React from "react";
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="Card">
      <img
        //   src={`${process.env.PUBLIC_URL}/nkh_thai_passport.png`}
        src={props.img}
        alt={props.alt}
      />
      <p className="card--title">{props.title}</p>
      <p>
        <FaStar className="card--star" /> {props.rating}
      </p>
      <p className="card--cost">
        <strong>{props.cost}</strong> / person
      </p>
    </div>
  );
};

export default Card;
