import React from 'react'
import './index.scss'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
function Card({bgText, projectTitle, projectDescription, icon, hoverAccent, children}) {
  return (
    <div className={`card ${hoverAccent}`} data-content={bgText} >
        <div className='icon-bg'>
        <FontAwesomeIcon icon={icon} className='icon' />
        </div>
        <h1 className='title'>{projectTitle}</h1>
        <div className='project-description'>{children}</div>
      
    </div>
  )
}

export default Card
