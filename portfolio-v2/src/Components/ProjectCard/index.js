import {react} from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
const ProjectCard = ({imgSrc, Title, Technologies,alt,Description,gitLink,siteLink}) => {
  return (
    <div className="project-card-container">
        <div className="project-card">
            <img className="image" src={imgSrc} alt={alt} style={{height:"100%",width:"100%"}}/>

        <div className="project-card-back">
          <div className='title'>
            <h2>{Title}</h2>
            <div className='links'>
            {gitLink && <a href={gitLink}>
            <FontAwesomeIcon icon={faGithub} color='black' style={{fontSize:"25px"}}/>
            </a>}
            {siteLink && <FontAwesomeIcon icon={faUpRightFromSquare} color='black' style={{fontSize:"20px"}}/>
            }
            </div>
            </div>
            <p>{Description}</p>
            
            <span className="tech-badge">
            {Technologies.map((tech)=>{
                return <span className='tech'>{tech}</span>
            })}
            </span>
            
            
        </div>
    </div>
    </div>
  )
}

export default ProjectCard