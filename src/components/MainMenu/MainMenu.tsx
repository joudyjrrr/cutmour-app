import MainMenuHorizeintal from "./MainMenuHorizeintal"
import Header from "../Header/Header"
import MenuTypes from "./MenuTypes"
import "./MainMenu.css"
const MainMenu = () =>{
    return(
        <div className="main-menu-content">
          <Header />
          <MainMenuHorizeintal/>
          <MenuTypes/>
        </div>
    )

}
export default MainMenu