import React from "react";
import image from "./images/tomomasu-mango-cider.jpg";
import { Link } from "react-router-dom";

const MangoCider = () => {
  return (
    <div>
      <div class="Vending-Item">
        <img src={image} class="Vending-Item-Image" alt="Mango Cider" />
      </div>
      <div class="Back-To-Machine">
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
};

export default MangoCider;
