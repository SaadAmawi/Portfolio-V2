import HeaderButton from "../HeaderButton"
import './index.css'
import image from '../Assets/Images/logo2.png'
import WhiteButton from "../WhiteButton";
import { useToggle } from "../../Context/toggleContext";
function Header(){
  const {setToggledSection} = useToggle();
  const handleClick = (anchor) => () => { 
   const id = `${anchor}`; 
   const element = document.getElementById(id); 
   if (element) { 
     element.scrollIntoView({ 
       behavior: "smooth", 
       block: "start", 
     }); 
   } 
 }; 
    return(
        <div className="Head">
    <nav className="Header">
        <div className="Logo">
        <img src={image} alt="logo" className="logo-image"/>
        </div>
        <div className="middle-btns">
        <HeaderButton  buttonText="Home" handleClick={handleClick("arrow")}/>
        <HeaderButton  buttonText="Experience" handleClick={()=>{
          handleClick("experience")();
          setToggledSection("Work");
        }}/>
        <HeaderButton  buttonText="Education" handleClick={()=>{
          handleClick("experience")();
          setToggledSection("Experience");
        }}/>
        <HeaderButton  buttonText="Projects" handleClick={handleClick("experience")} />
        {/* <HeaderButton  buttonText="MyGPT"/> */}
        </div>
        <WhiteButton toLink="/mygpt" buttonText="Contact" cName="filled-header"/>
    </nav>
    </div>)
}

export default Header;