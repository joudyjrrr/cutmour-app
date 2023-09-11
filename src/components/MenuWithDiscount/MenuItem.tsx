import React from "react"
import img  from "../../assets/drink.png"
import { ImenuItem } from "../type"
import {useNavigate} from "react-router-dom"
const MenuItem =  (props : ImenuItem)=>{
    const navigte = useNavigate()
    return(
        <div className="menu-item" onClick={()=>navigte("/mainmenu")}>
            <img src={props.img}/>
            <div className="title"><p>{props.title}</p></div>
        </div>
    )


}
export default MenuItem