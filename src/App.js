import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import MangoCider from "./MangoCiderComponent";
import SpicyRamen from "./SpicyRamenComponent";
import Melonpan from "./MelonpanComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/MangoCiderComponent" element={<MangoCider />}></Route>
          <Route path="/SpicyRamenComponent" element={<SpicyRamen />}></Route>
          <Route path="/MelonpanComponent" element={<Melonpan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;