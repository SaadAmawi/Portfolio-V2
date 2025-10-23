// import React, { use } from 'react'
import './index.scss'
import { useTheme } from '../../themeContext'
function WhiteButton({toLink,buttonText,cName}) {
  const {theme} = useTheme()
  return(
        <a href={toLink} target="_blank "className={`${cName} ${theme}`}>{buttonText}</a>
    )
}

export default WhiteButton