import React from "react";
import "./Header.css"
import {useNavigate} from "react-router-dom"
const Header = ()=>{
  const navigte = useNavigate()
    return(
        <div className="header">
          <div className="content-header">
        <div>  <i className="fa-solid fa-chevron-left" onClick={()=>navigte(-1)}></i> </div>
            <div className="title">    <h1>Restaurant </h1> </div>
          <div><i className="fa-solid fa-magnifying-glass"></i></div>
          </div>
        </div>
    )

}
export default Header