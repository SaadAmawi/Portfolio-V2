import React from 'react'
import './index.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import code from '../Assets/Images/code.png'
import image from './me3.jpg'
import GradientText from '../GradientText/GradientText'
function AboutMe() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }; 


  return (
    <div className='about-me' id='about-me'>
        <div className='left-text'>
            <p>I'm <GradientText>Saad Amawi</GradientText>, a <GradientText>software engineer</GradientText> who builds and automates business systems using <GradientText>AI</GradientText>, <GradientText>cloud technologies</GradientText>, and <GradientText>custom software</GradientText>. I design, develop, and deploy full-stack solutions that streamline operations, improve data flow, and support decision-making.</p> <p>I work primarily with <GradientText>React</GradientText> on the frontend and <GradientText>Django</GradientText> on the backend, supported by <GradientText>PostgreSQL</GradientText>, <GradientText>SQL</GradientText>, or <GradientText>Supabase</GradientText>. I also build automation and integration pipelines using <GradientText>N8N</GradientText>, <GradientText>Bubble.io</GradientText>, <GradientText>Zapier</GradientText>, and <GradientText>AWS</GradientText> services. My focus is on writing secure, scalable, and maintainable code that aligns with business objectives.</p> <p>My recent work includes developing <GradientText>AI-driven recruitment and document management systems</GradientText>, <GradientText>automated lead-sync pipelines</GradientText>, <GradientText>payment gateways</GradientText> with enterprise-grade security, and <GradientText>RAG-based chatbots</GradientText> using <GradientText>OpenAI</GradientText> and <GradientText>Pinecone</GradientText>. I prioritize clean architecture, automation, and measurable performance improvement in every project I build.</p>
       </div>
       <div className='right-div'>
        <ProfileCard
         name="Saad Amawi"
  title="Software Engineer"
  handle="saadamawi"
  status="Online"
  contactText="Learn More"
  avatarUrl={image}
  showUserInfo={true}
  enableTilt={true}
  iconUrl={code}
  enableMobileTilt={false}
  showBehindGradient={true}
  onContactClick={() => scrollToSection("experience")}
        />
       </div>
    </div>
  )
}

export default AboutMe