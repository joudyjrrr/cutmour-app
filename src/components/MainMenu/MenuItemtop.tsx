import "./MainMenu.css"

import { ImenuItem } from "../type"
const MenuItemtop = (props : ImenuItem)=>{
    return(
      <div className="menu-item-hor">
        <img src={props.img}/>
        <div className="title"><p>{props.title}</p></div>
      </div>
    )

}
export default MenuItemtop

