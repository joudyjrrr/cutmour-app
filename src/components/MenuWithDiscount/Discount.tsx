import "./Menu.css"
import React , {useState} from "react"
import {useNavigate} from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/image2.png"
import img2 from "../../assets/drink.png"
import img3 from "../../assets/bar.png"
const Discount = ()=>{
     const images = [img2, img1,];
    const navigte = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
    return(
        <div className="dicount">
            
     <div className="discount-content">
     {images.map((image, index) => (
       <>
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? 'active' : 'nonactive'}
          />
       </>
        ))}
        <div className="offer">
         <p>Offers</p>
        </div>
        <div className="icons">
        <i className="fa-solid fa-chevron-right" onClick={nextImage} ></i> 
        <i className="fa-solid fa-chevron-left"  onClick={previousImage}></i> 
        </div>
        <span>5% Discount</span>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
       </div>
        </div>
        
    )

}
export default Discount