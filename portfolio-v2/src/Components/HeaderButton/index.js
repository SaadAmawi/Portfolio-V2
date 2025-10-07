import './index.css'
import { NavLink } from 'react-router-dom';
function HeaderButton ({toLink,buttonText}) {
    return(
        <NavLink to={toLink} className="headerButton">{buttonText}</NavLink>
    )

}

export default HeaderButton;