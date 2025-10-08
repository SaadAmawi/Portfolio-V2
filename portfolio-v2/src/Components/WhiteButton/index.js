import React from 'react'
import './index.css'

function WhiteButton({toLink,buttonText}) {
  return(
        <NavLink to={toLink} className="headerButton">{buttonText}</NavLink>
    )
}

export default WhiteButton