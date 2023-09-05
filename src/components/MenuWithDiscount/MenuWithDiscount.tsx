import React from "react";
import  "./Menu.css"
import Header from "../Header/Header.tsx";
import MenuItem from "./MenuItem.tsx";
import Discount from "./Discount.tsx";
import img1  from "../../assets/drink.png"
import img2  from "../../assets/bar.png"
import img3  from "../../assets/spa.png"

const MenuWithDiscount = ()=>{
    return(
        <div className="menu">
          <Header/>
          <div className="icon-lang">
          <i className="fa-solid fa-globe"></i>
          </div>
          <Discount/>
          <div className="menu-content">
            <MenuItem img={img1} title="Drinks"/>
            <MenuItem img={img2} title="Salad"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
          </div>
       
        </div>
    )


}

export default MenuWithDiscount
