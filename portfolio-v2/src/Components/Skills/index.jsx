import React from 'react'
import './index.scss'
import Card from '../Card'
import { 
          faDisplay,
          faServer,
          faDatabase,
          faCloud
} from '@fortawesome/free-solid-svg-icons'

function Skills() {
  return (
    <div className='skills' id="mySkills"> 
    {/* <h1 style={{color:"white"}}> My Main Stack</h1> */}
    <div className='section_title'>
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"} projectDescription={"bla bla bla"} icon={faDisplay}  hoverAccent={"purple"}/>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} projectDescription={"bla bla bla"} icon={faServer} hoverAccent={"yellow"}/>
      <Card bgText={"Databases"} projectTitle={"Databases"} projectDescription={"bla bla bla"}icon={faDatabase} hoverAccent={"pink"}/>
      <Card bgText={"Cloud"} projectTitle={"Cloud Service Providers"} projectDescription={"bla bla bla"}icon={faCloud}/>
      </div>
    </div>
  )
}

export default Skills
