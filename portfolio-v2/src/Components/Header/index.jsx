import HeaderButton from "../HeaderButton"
import './index.css'
import image from '../Assets/Images/logo2.png'
import WhiteButton from "../WhiteButton";
function Header(){

    return(
        <div className="Head">
    <nav className="Header">
        <div className="Logo">
        {/* <h1 className="big">S</h1>
        <h1 className="big"> A</h1> */}
        <img src={image} alt="logo" className="logo-image"/>
        </div>
        <div className="middle-btns">
        <HeaderButton toLink="/about" buttonText="About Me"/>
        <HeaderButton toLink="/projects" buttonText="Projects"/>
        <HeaderButton toLink="/mygpt" buttonText="MyGPT"/>
        </div>
        <WhiteButton toLink="/mygpt" buttonText="Contact" cName="filled-header"/>
    </nav>
    </div>)
}

export default Header;