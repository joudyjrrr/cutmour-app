import "./MainMenu.css"
import img1 from "../../assets/bar.png"

type MenuItemProps = {
    setShowDetails: (arg: boolean) => void;
    img:string,
    title:string,
    price:string
  };
  

const MenuItemVer = ({ setShowDetails , img , title , price}: MenuItemProps)=>{

    return(
        <div className="menu-item-ver" onClick={() => setShowDetails(true)}>
           <img src={img}/>
           <div className="text">
             <p>{title}</p>
            <span>{price}</span>
           </div>
        </div>
    )

}
export default MenuItemVer