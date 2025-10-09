import HeaderButton from "../HeaderButton"
import './index.css'
function Header(){

    return(
        <div className="Head">
    <nav className="Header">
        <div className="Logo">
        <h1 className="big">S</h1>
        <h1 className="big"> A</h1>
        </div>
        <div className="right-btns">
        <HeaderButton toLink="/about" buttonText="About Me"/>
        <HeaderButton toLink="/projects" buttonText="Projects"/>
        <HeaderButton toLink="/mygpt" buttonText="MyGPT"/>
        </div>
    </nav>
    </div>)
}

export default Header;