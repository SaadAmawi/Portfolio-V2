import React from 'react'
import './index.css'
function WhiteButton({toLink,buttonText,cName}) {
  return(
        <a href={toLink} target="_blank "className={cName}>{buttonText}</a>
    )
}

export default WhiteButton