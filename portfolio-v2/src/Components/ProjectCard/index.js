import {react} from 'react'
import './index.scss'
const ProjectCard = ({imgSrc, Title, Technologies,alt,Description}) => {
  return (
    <div className="project-card-container">
        <div className="project-card">
            <img className="image" src={imgSrc} alt={alt} style={{height:"100%",width:"100%"}}/>

        <div className="project-card-back">
            <h2>{Title}</h2>
            <p>{Description}</p>
            <span className="tech-badge">
            {Technologies.map((tech)=>{
                return <p className='tech'>{tech}</p>
            })}
            </span>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard