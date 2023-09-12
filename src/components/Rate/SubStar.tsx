import "./Rate.css"
import React , {useState} from "react"
type IProps ={
    title : string
}
const SunbStar = ({title}:IProps) =>{
    const [selectedStars, setSelectedStars] = useState([0, 0, 0, 0, 0]);
    const handleStarClick = (index :number) => {
  const newSelectedStars = selectedStars.map((star, i) => (i <= index ? 1 : 0));
  setSelectedStars(newSelectedStars);
 };
    return(
        <>
          <div className="label"><p>{title}</p></div>
               <div className="start-content">
                   <div className="starts">
                   {selectedStars.map((star, index) => (
                  <i
                 key={index}
                 className={`fa-regular fa-star${star === 1 ? ' yellow-star' : ''}`}
                 onClick={() => handleStarClick(index)}
              ></i>
               ))}
                   </div>
               </div>
        </>
    )

}
export default SunbStar