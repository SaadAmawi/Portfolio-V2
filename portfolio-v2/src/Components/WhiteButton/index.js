import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'
function WhiteButton({toLink,buttonText,cName}) {
  return(
        <NavLink to={toLink} className={cName}>{buttonText}</NavLink>
    )
}

export default WhiteButton