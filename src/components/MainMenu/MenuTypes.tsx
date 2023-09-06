import MenuItemType from "./MenuItemType.tsx"
import React , {useState} from "react"
import MenuDetails from "./MenuDetails.tsx"
import img1 from "../../assets/bar.png"

const MenuVertical = ()=>{
  const [showDetails, setShowDetails] = useState<Boolean>(false)

    return(
        <div className="menu-ver">
          <div className="title"><p>Salad</p></div>
          <div className="menu-ver-content">
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          <MenuItemType setShowDetails={setShowDetails} img={img1} title="GreackSalad" price="7,000 IQD"/>
          </div>
          {showDetails && <MenuDetails setShowDetails={setShowDetails}/>}
        </div>
    )

}
export default MenuVertical