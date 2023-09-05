import React from "react";
import  "./Home.css"
import {useNavigate} from "react-router-dom"
import img from "../../assets/img.png"
const Home = ()=>{
    const navigate = useNavigate()

    return(
        <div className="home">
            <img src={img}/>
          {/* <i class="fa-solid fa-globe"></i> <i class="fa-solid fa-magnifying-glass"></i>  <i class="fa-solid fa-arrow-left"></i>*/}
          <div className="icon"> <i className="fa-solid fa-globe"></i></div>
            <div className="title"><h1>Restaurant </h1></div>
            <div className="desc"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p></div>
           <div className="btn"> <button onClick={()=>navigate("/menu")}>Menu</button></div>
        </div>
    )

}
export default Home
