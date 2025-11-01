import React from 'react'
import './index.scss'
import IMS from '../Assets/Images/IMS.png'
import MemoreyezLanding from '../Assets/Images/MemoreyezLanding.png'
import KGC from '../Assets/Images/KGC.png'
import OldPort from '../Assets/Images/OldPort.png'
import NewPort from '../Assets/Images/NewPort.png'
import MemorEyez from '../Assets/Images/MemoreyezApp.png'
import ProjectCard from '../ProjectCard'
function Projects() {
  return (
    <div className='projects-container' id='projects'>
    <div className='projects'>
      <ProjectCard 
      imgSrc={NewPort} 
      alt={"NewPort"} 
      Title={"KGC Website"} 
      Technologies={["React","SCSS","Django","AWS","S3","Route53"]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={OldPort} 
      alt={"OldPort"} 
      Title={"KGC Website"} 
      Technologies={["React","Sass","EmailJS"]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={KGC} 
      alt={"KGC"} 
      Title={"KGC Website"} 
      Technologies={["Bubble.io","N8N","Google Cloud"]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={IMS} 
      alt={"IMS"} 
      Title={"KGC Website"} 
      Technologies={["React","Sass","EmailJS"]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      
      <ProjectCard 
      imgSrc={MemorEyez} 
      alt={"MemorEyez"} 
      Title={"KGC Website"} 
      Technologies={[]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={MemoreyezLanding} 
      alt={"MemoreyezLanding"} 
      Title={"KGC Website"} 
      Technologies={["React","Sass","EmailJS"]} 
      Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}
      gitLink={'https://github.com/saadamawi'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      
    </div>
    </div>
  )
}

export default Projects
