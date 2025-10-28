import React from 'react'
import './index.scss'
import Skills from '../Skills'
function AboutMe() {
  return (
    <div className='about-me' id='about-me'>
        <div className='left-text'>
            <p>I’m Saad Amawi, a Software Engineer driven by a passion for building intelligent, scalable systems that merge automation, creativity, and precision. I graduated from Abu Dhabi University with a BSc in Software Engineering, where I honed my skills in software architecture, data structures, ethical hacking, and cloud computing. Along the way, I earned certifications including AWS Certified Cloud Practitioner, AWS Solutions Architect Associate, and Cisco Cybersecurity Essentials, fueling my curiosity for how technology can be engineered to think smarter, not just work harder.</p>
            <p>My professional journey has allowed me to work across diverse environments — from Masdar, where I engineered secure payment APIs and strengthened system resilience with WAFs, to Nasr Esports, where I integrated AI/ML pipelines that automated entire content creation workflows. Today, I’m part of Knowledge Group Consulting, developing customized business automation solutions using Bubble.io, N8N, and AWS. I’ve also contributed to academia as a Software Engineering Fellow, leading teams and co-authoring three Q1-published research papers, blending academic rigor with real-world impact.</p>
            <p>Beyond code, I’m fascinated by the intersection of AI automation, software design, and human efficiency — how thoughtful engineering can simplify complex systems and enhance everyday experiences. I’m constantly exploring new tools and frameworks, from React and Spring Boot to TensorFlow, driven by the belief that great software doesn’t just solve problems — it anticipates them. My goal is to keep creating systems that not only work flawlessly but also make life, work, and innovation flow a little easier.</p>
            <Skills/>
       </div>
    </div>
  )
}

export default AboutMe