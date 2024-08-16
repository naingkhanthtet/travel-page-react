import React from "react";
import { FaMapMarker } from "react-icons/fa";

const Card = (props) => {
  /*
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  {badgeText && <div className="card-badge">{badgeText}</div>}
    */

  return (
    <div className="Card">
      <div className="card--imagesec">
        <img src={props.imageUrl} alt="travel photos" />
      </div>

      <div className="card--contentsec">
        <span className="card--location">
          <FaMapMarker className="card--mapmarker" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h2 className="card--title">{props.title}</h2>
        <h5>
          {props.startDate} - {props.endDate}
        </h5>
        <p className="card--description">{props.description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
