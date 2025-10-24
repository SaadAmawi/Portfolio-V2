import './index.css'
import { NavLink } from 'react-router-dom';

function HeaderButton ({toLink,buttonText,handleClick}) {

    return(
        <NavLink to={toLink} className="headerButton" onClick={handleClick}>{buttonText}</NavLink>
    )

}

export default HeaderButton;