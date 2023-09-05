import React from "react"
import img  from "../../assets/drink.png"

type ImenyItem = {
img:string;
title:string
}
const MenuItem =  (props : ImenyItem)=>{

    return(
        <div className="menu-item">
            <img src={props.img}/>
            <div className="title"><p>{props.title}</p></div>
        </div>
    )


}
export default MenuItem