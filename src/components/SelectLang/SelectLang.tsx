
import "./Select.css"
type props = {
    setShowLang: (arg: boolean) => void,
    top?:"string" | undefined , 
  };
  
const SelectLang = ({ setShowLang , top}: props )  =>{
    return(
        <ul>
          <li onClick={()=>setShowLang(false)}>Arabic</li>
          <li onClick={()=>setShowLang(false)}>English</li>
          <li onClick={()=>setShowLang(false)}>Turkish</li>
          <li onClick={()=>setShowLang(false)}>Kurdi</li>
        </ul>
    )

}

export default SelectLang