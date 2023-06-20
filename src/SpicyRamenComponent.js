import React from "react";
import image from "./images/hikari-spicy-sesame-ramen.jpg";
import { Link } from "react-router-dom";

const SpicyRamen = () => {
  return (
    <div>
      <div class="Vending-Item">
        <img src={image} class="Vending-Item-Image" alt="Spicy Ramen" />
      </div>
      <div class="Back-To-Machine">
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
};

export default SpicyRamen;
