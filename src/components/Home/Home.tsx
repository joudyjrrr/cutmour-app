import React, { useState } from "react";
import  "./Home.css"
import {useNavigate} from "react-router-dom"
import img from "../../assets/img.png"
import qusetion from "../../assets/Vector(1).png"
import rate from "../../assets/Vector.png"
import SelectLang from "../SelectLang/SelectLang";
const Home = ()=>{
    const navigate = useNavigate()
     const [showLang,setShowLang] = useState(false)
    return(
        <div className="home">
            <img src={img} className="cover"/>
          <div className="lang"> <img src={qusetion} onClick={()=>setShowLang(true)}/></div>
          <div className="rate"> <img src={rate}/></div>
            <div className="title"><h1>Restaurant </h1></div>
            <div className="desc"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p></div>
           <div className="btn"> <button onClick={()=>navigate("/menu")}>Menu</button></div>
           { showLang &&  <div className={`select-content` } ><SelectLang setShowLang={setShowLang}/> </div>   }      
        </div>
    )

}
export default Home
