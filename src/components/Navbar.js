import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={`${process.env.PUBLIC_URL}/airbnb-logo.png`}
        className="nav--logo"
        alt="logo"
      />
    </nav>
  );
}
