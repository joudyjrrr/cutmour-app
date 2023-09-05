import "./Menu.css"
import React from "react"
import {useNavigate} from "react-router-dom"
const Discount = ()=>{
    const navigte = useNavigate()
    return(
        <div className="dicount">
     <div className="discount-content" onClick={()=>navigte("/mainmenu")}>
        <div className="offer">
         <p>Offers</p>
        </div>
        <div className="icons">
        <i className="fa-solid fa-chevron-right"></i> 
        <i className="fa-solid fa-chevron-left"></i> 
        </div>
        <span>5% Discount</span>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="circuls"><i></i><i></i><i></i></div>
       </div>
        </div>
        
    )

}
export default Discount