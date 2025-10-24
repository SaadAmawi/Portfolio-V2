import React from 'react'
import './index.scss'
import Card from '../Card'
import { 
          faDisplay,
          faServer,
          faDatabase,
          faCloud
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../themeContext'
function Skills() {
  const {theme} = useTheme();
  return (
    <div className='skills' id="mySkills"> 
    <div className='section_title'>
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"}  icon={faDisplay}  hoverAccent={theme==="dark"?"purple":"purple"}>
        <ul className='card-items'>
          <li className="items">Javascript</li>
          <li className="items">Typescript</li>
          <li className="items">React</li>
          <li className="items">Flutter</li>
          <li className="items">Figma</li>
        </ul>
        </Card>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} icon={faServer} hoverAccent={theme==="dark"?"yellow":"purple"}>      
        <ul className='card-items'>
          <li className="items">Python</li>
          <li className="items">Java</li>
          <li className="items">Django</li>
          <li className="items">FastAPI</li>
          <li className="items">SpringBoot</li>
          <li className="items">Node</li>
        </ul>       
        </Card>
      <Card bgText={"Databases"} projectTitle={"Databases"} icon={faDatabase} hoverAccent={theme==="dark"?"pink":"purple"}>
        <ul className='card-items'>
          <li className="items">PostgreSQL</li>
          <li className="items">Supabase</li>
          <li className="items">DynamoDB</li>
          <li className="items">MySQL</li>
        </ul>   
        </Card>
      <Card bgText={"Cloud"} projectTitle={"Cloud + Misc."} icon={faCloud} hoverAccent={theme==="dark"?"":"purple"}>
        <ul className='card-items'>
          <li className="items">Amazon Web Services</li>
          <li className="items">AWS S3</li>
          <li className="items">AWS Bedrock</li>
          <li className="items">Docker</li>
          <li className="items">N8N</li>
          <li className="items">Railway</li>
          <li className="items">Bubble.io</li>
        </ul>
        </Card>
      </div>
    </div>
  )
}

export default Skills
