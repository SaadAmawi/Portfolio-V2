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
    <div className='projects-container'>
    <div className='projects'>
      <ProjectCard imgSrc={KGC} alt={"KGC"} Title={"KGC Website"} Technologies={["React","SASS","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
      <ProjectCard imgSrc={IMS} alt={"IMS"} Title={"KGC Website"} Technologies={["React","Sass","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
      <ProjectCard imgSrc={MemorEyez} alt={"MemorEyez"} Title={"KGC Website"} Technologies={["React","Sass","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
      <ProjectCard imgSrc={MemoreyezLanding} alt={"MemoreyezLanding"} Title={"KGC Website"} Technologies={["React","Sass","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
      <ProjectCard imgSrc={OldPort} alt={"OldPort"} Title={"KGC Website"} Technologies={["React","Sass","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
      <ProjectCard imgSrc={NewPort} alt={"NewPort"} Title={"KGC Website"} Technologies={["React","Sass","EmailJS"]} Description={"A website for a local gym that features class schedules, trainer information, and membership sign-up."}/> 
    </div>
    </div>
  )
}

export default Projects
