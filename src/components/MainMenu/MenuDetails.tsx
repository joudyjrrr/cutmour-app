import "./MainMenu.css"
import img1 from "../../assets/bar.png"
type MenuItemProps = {
    setShowDetails: (arg: boolean) => void;
  };
  

const MenuDetails = ({ setShowDetails }: MenuItemProps)=>{
    return(
        <div className="menu-details-content">
        <div className="menu-details">
            <i  onClick={() => setShowDetails(false)}></i>
            <img src={img1}/>
            <div className="text">
            <p>Greek Salad</p>
           <span>7,000 IQD</span>
            </div>
        </div>
        </div>
    )

}
export default MenuDetails