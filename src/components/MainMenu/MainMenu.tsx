import React, { useState } from "react";
import Header from "../Header/Header";
import "./MainMenu.css";
import MenuItemtop from "./MenuItemtop";
import img1 from "../../assets/drink.png";
import img2 from "../../assets/bar.png";
import img3 from "../../assets/spa.png";

const MainMenu = () => {
  return (
    <div className="main-menu-content">
      <Header />
      <div className="menu-horizontal">
        <MenuItemtop img={img1} title="Drinks" />
        <MenuItemtop img={img2} title="Barbcio" />
        <MenuItemtop img={img3} title="Spagity" />
     <MenuItemtop img={img1} title="Drinks" /> 
      </div>
    </div>
  );
};

export default MainMenu;
