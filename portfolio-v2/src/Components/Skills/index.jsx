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
    <div className='section_title'>
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"}  icon={faDisplay}  hoverAccent={"purple"}>
        <ul className='card-items'>
          <li className="items">HTML</li>
          <li className="items">CSS</li>
          <li className="items">JS</li>
          <li className="items">React</li>
          <li className="items">Flutter</li>
        </ul>
            {/* <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>         
            <i className="devicon-javascript-plain colored"></i>    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"  alt="Figma"/>      
            <i className="devicon-react-original-wordmark colored"></i>            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"  alt="Flutter"/>        */}
        </Card>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} projectDescription={"bla bla bla"} icon={faServer} hoverAccent={"yellow"}>      
        <ul className='card-items'>
          <li className="items">Django</li>
          <li className="items">FastAPI</li>
          <li className="items">.NET Core</li>
          <li className="items">SpringBoot</li>
          <li className="items">Node</li>
        </ul>
            {/* <i className="devicon-django-plain"></i>
            <i className="devicon-fastapi-plain colored"></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt="dot-NET" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"  alt="Spring"/> */}
          
        </Card>
      <Card bgText={"Databases"} projectTitle={"Databases"} projectDescription={"bla bla bla"}icon={faDatabase} hoverAccent={"pink"}>
        <ul className='card-items'>
          <li className="items">PostgreSQL</li>
          <li className="items">Supabase</li>
          <li className="items">DynamoDB</li>
          <li className="items">MySQL</li>
        </ul>
            {/* <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-supabase-plain colored"></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" alt="DynamoDB" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="mySQL"/> */}
                    
        </Card>
      <Card bgText={"Cloud"} projectTitle={"Cloud + Misc."} projectDescription={"bla bla bla"}icon={faCloud}>
        <ul className='card-items'>
          <li className="items">Amazon Web Services</li>
          <li className="items">AWS S3</li>
          <li className="items">AWS Bedrock</li>
          <li className="items">Docker</li>
          <li className="items">N8N</li>
          <li className="items">Railway</li>
          <li className="items">Bubble.io</li>
        </ul>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" style={{transform:"scaleY(0.65)"}} alt="AWS" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/856px-Amazon-S3-Logo.svg.png" alt="s3" style={{transform:"scale(0.85)"}}/>
            <img src="https://aws-samples.github.io/amazon-bedrock-samples/bedrock_logo.png" alt="bedrock" style={{width:"60px",transform:"scale(0.85)"}}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="Docker" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/1200px-N8n-logo-new.svg.png" alt="N8N" style={{transform:"scaleY(0.7) scaleX(1.8)", marginRight:"10px", marginLeft:"10px"}} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg"  alt="Railway" style={{transform:"scale(0.8)"}}/>
            <img  alt="Bubble.io" src="https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2FappIcon-bubble%2Fb592ba464dc0b7cd1721525575dcfeda%2Fbubble.png&w=3840&q=90" style={{transform:"scale(0.7)"}} /> */}
        </Card>
      </div>
    </div>
  )
}

export default Skills
