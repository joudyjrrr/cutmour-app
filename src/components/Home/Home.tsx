import React from "react";
import  "./Home.css"
import {useNavigate} from "react-router-dom"
const Home = ()=>{
    const navigate = useNavigate()

    return(
        <div className="home">
          {/* <i class="fa-solid fa-globe"></i> <i class="fa-solid fa-magnifying-glass"></i>  <i class="fa-solid fa-arrow-left"></i>*/}
          <div className="icon"> <i className="fa-solid fa-globe"></i></div>
            <div className="title"><h1>Restaurant </h1></div>
            <div className="desc"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p></div>
            <button onClick={()=>navigate("/menu")}>Menu</button>
        </div>
    )

}
export default Home
