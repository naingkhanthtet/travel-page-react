import React from "react";
import { FaStar } from "react-icons/fa";

const Card1 = () => {
  return (
    <div className="Card1">
      <img src={`${process.env.PUBLIC_URL}/nkh_thai_passport.png`} alt="nkh" />
      <p>
        <FaStar className="card--star" /> 5.0 (6) • USA
      </p>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
};

export default Card1;
