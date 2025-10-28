import React from 'react'
import './index.scss'
import IMS from '../Assets/Images/IMS.png'
import MemoreyezLanding from '../Assets/Images/MemoreyezLanding.png'
import KGC from '../Assets/Images/KGC.png'
import OldPort from '../Assets/Images/OldPort.png'
import NewPort from '../Assets/Images/NewPort.png'
import MemorEyez from '../Assets/Images/MemoreyezApp.png'
function Projects() {
  return (
    <div className='projects-container' id="myProjects">
    <div className='projects'>
      <img className="project-image" src={KGC}></img>
      <img className="project-image" src={IMS}></img>
      <img className="project-image" src={MemorEyez}></img>
      <img className="project-image" src={MemoreyezLanding}></img>
      <img className="project-image" src={OldPort}></img>
      <img className="project-image" src={NewPort}></img>
    </div>
    </div>
  )
}

export default Projects
