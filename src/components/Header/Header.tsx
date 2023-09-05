import React from "react";
import "./Header.css"
import {useNavigate} from "react-router-dom"
const Header = ()=>{
  const navigte = useNavigate()
    return(
        <div className="header">
          <div className="content-header">
          <i className="fa-solid fa-chevron-left" onClick={()=>navigte("/home")}></i> 
            <div>    <h1>Restaurant </h1> </div>
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
    )

}
export default Header