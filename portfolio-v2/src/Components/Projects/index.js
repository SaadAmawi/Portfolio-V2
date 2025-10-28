import React from 'react'
import './index.scss'
import IMS from '../Assets/Images/3.png'
import MemoreyezLanding from '../Assets/Images/4.png'
import KGC from '../Assets/Images/5.png'
import OldPort from '../Assets/Images/6.png'
import NewPort from '../Assets/Images/7.png'
import MemorEyez from '../Assets/Images/mem.png'
function Projects() {
  return (
    <div className='projects-container' id="myProjects">
    <div className='projects'>
      <img className="project-image" src={IMS}></img>
      <img className="project-image" src={KGC}></img>
      <img className="project-image" src={MemoreyezLanding}></img>
      <img className="project-image" src={MemorEyez}></img>
      <img className="project-image" src={OldPort}></img>
      <img className="project-image" src={NewPort}></img>
    </div>
    </div>
  )
}

export default Projects
