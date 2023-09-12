import "./Rate.css"
import Header from "../Header/Header"
import React , {useState} from "react"
import SunbStar from "./SubStar"
const Rate = ()=>{
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const handleEmojiClick = (emoji :any) => {
  setSelectedEmoji(emoji);
};
    return(
        <div className="rate">
            <Header/>
            <div className="rate-content">
               <div className="title"><h3>Feedback</h3></div>
               <div className="rate-content2">
               <div className="label"><p>Over All</p></div>
               <div className="emoji-content">
                   <div className="emoji">
                   <i
      className={`fa-regular fa-face-angry ${selectedEmoji === 'angry' ? 'selected' : ''}`}
      onClick={() => handleEmojiClick('angry')}
    ></i>
    <i
      className={`fa-regular fa-face-frown ${selectedEmoji === 'frown' ? 'selected' : ''}`}
      onClick={() => handleEmojiClick('frown')}
    ></i>
    <i
      className={`fa-regular fa-face-meh ${selectedEmoji === 'meh' ? 'selected' : ''}`}
      onClick={() => handleEmojiClick('meh')}
    ></i>
    <i
      className={`fa-regular fa-face-smile-beam ${selectedEmoji === 'smile' ? 'selected' : ''}`}
      onClick={() => handleEmojiClick('smile')}
    ></i>
    <i
      className={`fa-regular fa-face-smile-beam ${selectedEmoji === 'beam' ? 'selected' : ''}`}
      onClick={() => handleEmojiClick('beam')}
    ></i>
                   </div>
                   <div className="input">
                        <input type="text" placeholder="Enter Your comment"/>
                   </div>
               </div>
             <SunbStar title="Service"/>
             <SunbStar title="Stsff"/>
             <SunbStar title="Hygiene"/>
          
               <div className="label"><p>Over All</p></div>
               <div className="content-input">
               <div className="input">
                        <input type="text" placeholder="Your Phone number or E-Mail Address (optional)"/>
                   </div>
               </div>
               <div className="send-content">
                <button>Send</button>
               </div>
            </div>
            </div>
        </div>
    )
}
export default Rate 
