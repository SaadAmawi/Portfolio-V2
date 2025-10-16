import React from 'react'
import './index.scss'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
function Card({bgText, projectTitle, projectDescription, icon, hoverAccent}) {
  return (
    <div className={`card ${hoverAccent}`} data-content={bgText} >
        <div className='icon-bg'>
        <FontAwesomeIcon icon={icon} className='icon' />
        </div>
        <h1 className='title'>{projectTitle}</h1>
        <p className='project-description'>{projectDescription}</p>
      
    </div>
  )
}

export default Card
