import React from 'react'
import './index.scss'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
function Card({bgText, projectTitle, projectDescription, icon}) {
  return (
    <div className='card' data-content={bgText}>
        <FontAwesomeIcon icon={icon} className='icon' />
        <h1 className='title'>{projectTitle}</h1>
        <p className='project-description'>{projectDescription}</p>
      
    </div>
  )
}

export default Card
