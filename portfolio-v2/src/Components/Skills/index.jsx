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
      <Card bgText={"Frontend"} projectTitle={"Front-End Technologies"} projectDescription={"bla bla bla"} icon={faDisplay}  hoverAccent={"purple"}>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>         
            <i className="devicon-javascript-plain colored"></i>    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"  alt="Figma"/>      
            <i className="devicon-react-original-wordmark colored"></i>            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"  alt="Flutter"/>       
        </Card>
      <Card bgText={"Backend"} projectTitle={"Back-End Technologies"} projectDescription={"bla bla bla"} icon={faServer} hoverAccent={"yellow"}>      
            <i className="devicon-django-plain"></i>
            <i className="devicon-fastapi-plain colored"></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"  alt="Spring"/>
          
        </Card>
      <Card bgText={"Databases"} projectTitle={"Databases"} projectDescription={"bla bla bla"}icon={faDatabase} hoverAccent={"pink"}>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-supabase-plain colored"></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                    
        </Card>
      <Card bgText={"Cloud"} projectTitle={"Cloud + Misc."} projectDescription={"bla bla bla"}icon={faCloud}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg"  alt="Railway" style={{transform:"scale(0.8)"}}/>
            <img  alt="Bubble.io" src="https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2FappIcon-bubble%2Fb592ba464dc0b7cd1721525575dcfeda%2Fbubble.png&w=3840&q=90" style={{transform:"scale(0.7)"}} />
          <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png" alt="AWS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="Docker" />
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png" alt="N8N" style={{transform:"scaleY(1.1) scaleX(1)"}} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/856px-Amazon-S3-Logo.svg.png" alt="s3" style={{transform:"scale(0.85)"}}/>
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/bedrock-color.png" alt="bedrock" style={{width:"60px",transform:"scale(0.85)"}}/>
        </Card>
      </div>
    </div>
  )
}

export default Skills
