import React from "react";
import { Link } from "react-router-dom";
import image from "./images/vending-machine.jpg";

const VendingMachine = () => {
  return (
    <div>
      <div class="Vending-Item">
        <img src={image} class="Vending-Item-Image" alt="Vending Machine" />
      </div>
      <div class="Vending-Machine-Links">
        <Link to="MangoCiderComponent">Mango Cider</Link>
        <Link to="SpicyRamenComponent">Spicy Ramen</Link>
        <Link to="MelonpanComponent">Melon Bread</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
