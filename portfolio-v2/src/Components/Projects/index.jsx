import React from 'react'
import './index.scss'
import Card from '../Card'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
    <div className='projects' id="myProjects"> 
    <div className='section_title'>
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"} projectDescription={"bla bla bla"} icon={faChevronDown}/>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} projectDescription={"bla bla bla"}/>
      <Card bgText={"Databases"} projectTitle={"Databases"} projectDescription={"bla bla bla"}/>
      <Card bgText={"Cloud"} projectTitle={"Cloud Service Providers"} projectDescription={"bla bla bla"}/>
      </div>
    </div>
  )
}

export default Projects
