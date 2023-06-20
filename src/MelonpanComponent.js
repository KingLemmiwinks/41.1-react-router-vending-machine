import React from "react";
import image from "./images/melonpan.jpg";
import { Link } from "react-router-dom";

const Melonpan = () => {
  return (
    <div>
      <div class="Vending-Item">
        <img src={image} class="Vending-Item-Image" alt="Melon Bread" />
      </div>
      <div class="Back-To-Machine">
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
};

export default Melonpan;
