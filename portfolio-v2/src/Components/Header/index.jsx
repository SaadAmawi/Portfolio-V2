import HeaderButton from "../HeaderButton"
import './index.css'
import image from '../Assets/Images/logo2.png'
import WhiteButton from "../WhiteButton";
function Header(){

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
        {/* <h1 className="big">S</h1>
        <h1 className="big"> A</h1> */}
        <img src={image} alt="logo" className="logo-image"/>
        </div>
        <div className="middle-btns">
        <HeaderButton  buttonText="About Me" handleClick={handleClick("about-me")}/>
        <HeaderButton  buttonText="Skills" handleClick={handleClick("mySkills")}/>
        <HeaderButton  buttonText="Projects" />
        <HeaderButton  buttonText="MyGPT"/>
        </div>
        <WhiteButton toLink="/mygpt" buttonText="Contact" cName="filled-header"/>
    </nav>
    </div>)
}

export default Header;