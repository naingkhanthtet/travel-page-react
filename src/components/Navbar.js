import React from "react";
import { FaEarthAsia } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
      <FaEarthAsia className="nav--logo" />
      <h3>My Travel Journal</h3>
    </nav>
  );
}
