import React from 'react'
import './index.css'
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
      Title={"Updated Personal Portfolio Site"} 
      Technologies={["React","SCSS","Django","AWS","S3","Route53"]} 
      Description={"An updated portfolio of some of my previous work and experience."}
      gitLink={'https://github.com/SaadAmawi/Portfolio-V2'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={OldPort} 
      alt={"OldPort"} 
      Title={"Old Personal Portfolio Site"} 
      Technologies={["React","SCSS","JS"]} 
      Description={"My old portfolio site built in 2024."}
      gitLink={'https://github.com/saadamawi/portfolio'}
      siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={KGC} 
      alt={"KGC"} 
      Title={"KGC Website (PRIVATE)"} 
      Technologies={["Bubble.io","N8N","Google Cloud"]} 
      Description={"Knowledge Group Consulting AI platform, hosting multple AI driven applications to automate business needs and drive customers to the business. LINKS TO PRIVATE SITES ARE UNAVAILABLE DUE TO CONFIDENTIALITY"}
      // gitLink={'https://github.com/saadamawi'}
      // siteLink={'https://github.com/saadamawi'}
      /> 
      <ProjectCard 
      imgSrc={IMS} 
      alt={"IMS"} 
      Title={"NEMA Idea Management System (PRIVATE)"} 
      Technologies={["React","TypeScript","TailwindCSS","FastAPI","SupaBase","Railway"]} 
      Description={"An Idea/Innovation Management System built for NEMA Holding Group, allows users to create innovation with hierarchy built in for approval committe and innovation owners, and people can submit innovative ideas. Ideas can become projects and can be then tracked on the same system, the platform also includes a dashboard and role based access controls. LINKS TO PRIVATE SITES ARE UNAVAILABLE DUE TO CONFIDENTIALITY"}
      // gitLink={'https://github.com/saadamawi'}
      // siteLink={'https://github.com/saadamawi'}
      /> 
      
      <ProjectCard 
      imgSrc={MemorEyez} 
      alt={"MemorEyez"} 
      Title={"MemorEyez Application"} 
      Technologies={["React","CSS","Firebase","Flutter","Dart","Unity","C#"]} 
      Description={"A smart and secure system for Alzheimer's and Dementia Patients, the project was based on a Virtual Reality and Mobile Application for the patient, where health monitoring and assessments were conducted, alongside a caregiver dashboard that allowed cross-platfrom communcation and updates. Developed in coordination with top neurologists form The Cleveland Clinic Abu Dhabi"}
      gitLink={'https://github.com/saadamawi/Doctor-Dashboard'}
      /> 
      <ProjectCard 
      imgSrc={MemoreyezLanding} 
      alt={"MemoreyezLanding"} 
      Title={"MemorEyez Landing Page"} 
      Technologies={["React","CSS","Javascript"]} 
      Description={"A promotional landing page for the MemorEyez Project."}
      gitLink={'https://github.com/SaadAmawi/MemorEyez-Landing-Page'}
      /> 
      
    </div>
    </div>
  )
}

export default Projects
