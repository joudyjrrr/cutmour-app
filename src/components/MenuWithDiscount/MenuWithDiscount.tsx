import React  , {useState}from "react";
import  "./Menu.css"
import Header from "../Header/Header.tsx";
import MenuItem from "./MenuItem.tsx";
import Discount from "./Discount.tsx";
import img1  from "../../assets/drink.png"
import img2  from "../../assets/bar.png"
import img3  from "../../assets/spa.png"
import qustion from "../../assets/Vector(1).png"
import rate from "../../assets/Vector.png"
import SelectLang from "../SelectLang/SelectLang.tsx";
import "../SelectLang/Select.css";
const MenuWithDiscount = ()=>{

  const [showLang,setShowLang] = useState(false)
    return(
        <div className="menu">
          <Header/>
          <div className="icon-lang">
          <img src={qustion}  onClick={()=>setShowLang(true)}/>
          </div>
          <div className="icon-rate">
          <img src={rate} />
          </div>
          <Discount/>
          <div className="menu-content" >
            <MenuItem img={img1} title="Drinks" />
            <MenuItem img={img2} title="Salad"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
            <MenuItem img={img3} title="Pasta"/>
                 <MenuItem img={img3} title="Pasta"/>
          </div>
          { showLang && <div className="slect-content-menu">   <SelectLang setShowLang={setShowLang} /> </div>    }    
        </div>
    )


}

export default MenuWithDiscount
