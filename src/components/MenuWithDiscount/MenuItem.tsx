import React from "react"
import img  from "../../assets/drink.png"
import { ImenuItem } from "../type"
const MenuItem =  (props : ImenuItem)=>{

    return(
        <div className="menu-item">
            <img src={props.img}/>
            <div className="title"><p>{props.title}</p></div>
        </div>
    )


}
export default MenuItem