import React from 'react'
import './index.scss'
import Card from '../Card'
import { faChevronDown,
          faDisplay,
          faServer,
          faDatabase,
          faCloud
} from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
    <div className='projects' id="myProjects"> 
    <h1 style={{color:"white"}}> My Main Stack</h1>
    <div className='section_title'>
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"} projectDescription={"bla bla bla"} icon={faDisplay}/>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} projectDescription={"bla bla bla"} icon={faServer}/>
      <Card bgText={"Databases"} projectTitle={"Databases"} projectDescription={"bla bla bla"}icon={faDatabase}/>
      <Card bgText={"Cloud"} projectTitle={"Cloud Service Providers"} projectDescription={"bla bla bla"}icon={faCloud}/>
      </div>
    </div>
  )
}

export default Projects
