import React from "react";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

const CardButton = () => {
  return (
    <div className="CardButton">
      <a className="email-button" href="https://mail.google.com/mail/u/0/#inbox"><FaMailBulk /> Email</a>
      <a className="linkedin-button" href="https://www.linkedin.com/feed/"><FaLinkedin /> LinkedIn</a>
    </div>
  );
};

export default CardButton;
