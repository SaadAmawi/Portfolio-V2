import HeaderButton from "../HeaderButton"
import './index.css'
import image from '../Assets/Images/logo2.png'
import WhiteButton from "../WhiteButton";
import { useToggle } from "../../toggleContext";
import { useTheme } from "../../themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import sun from '../Assets/Images/sun.png'


function Header(){
  const {setToggledSection} = useToggle();
  const {theme, setTheme} = useTheme();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }; 
    return(
        <div className="Head">
    <nav className={`Header ${theme}`}>
        <div className="Logo">
        <img src={image} alt="logo" className={`logo-image ${theme}`}/>
        </div>
        <div className="middle-btns">
        <HeaderButton buttonText="Home" handleClick={() => scrollToSection("arrow")}/>
        <HeaderButton buttonText="Experience" handleClick={() => {
          scrollToSection("experience");
          setToggledSection("Work");
        }}/>
        <HeaderButton buttonText="Education" handleClick={() => {
          scrollToSection("experience");
          setToggledSection("Experience");
        }}/>
        {/* <HeaderButton buttonText="Projects" handleClick={() => scrollToSection("experience")} /> */}
        </div>
        <div className="right-buttons">
        <button className="toggleTheme" onClick={()=> theme ==="light" ? setTheme("dark") : setTheme("light")}>
          {theme==="dark"?
            ( <img src={sun} className="sun" alt="sun" />
           ):
            (<FontAwesomeIcon icon={faMoon} color="var(--text-color-purpleDark2)" style={{WebkitFilter:"drop-shadow(1px 1px 4px var(--text-color-purpleDark2))"}}></FontAwesomeIcon>)
          }
        </button>
        <WhiteButton toLink="/mygpt" buttonText="Contact" cName="filled-header"/>
    </div>
    </nav>
    </div>)
}

export default Header;