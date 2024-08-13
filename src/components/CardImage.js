import React from "react";

const CardImage = () => {
  return (
    <div className="CardImage">
      <img src={`${process.env.PUBLIC_URL}/nkh_thai_passport.png`} alt="nkh" />
    </div>
  );
};

export default CardImage;
