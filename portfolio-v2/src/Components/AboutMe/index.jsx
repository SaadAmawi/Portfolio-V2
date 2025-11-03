import React from 'react'
import './index.scss'
import Skills from '../Skills'
function AboutMe() {
  return (
    <div className='about-me' id='about-me'>
        <div className='left-text'>
            <p>I'm <b>Saad Amawi</b>, a <b>software engineer</b> who builds and automates business systems using <b>AI</b>, <b>cloud technologies</b>, and <b>custom software</b>. I design, develop, and deploy full-stack solutions that streamline operations, improve data flow, and support decision-making.</p> <p>I work primarily with <b>React</b> on the frontend and <b>Django</b> on the backend, supported by <b>PostgreSQL</b>, <b>SQL</b>, or <b>Supabase</b>. I also build automation and integration pipelines using <b>N8N</b>, <b>Bubble.io</b>, <b>Zapier</b>, and <b>AWS</b> services. My focus is on writing secure, scalable, and maintainable code that aligns with business objectives.</p> <p>My recent work includes developing <b>AI-driven recruitment and document management systems</b>, <b>automated lead-sync pipelines</b>, <b>payment gateways</b> with enterprise-grade security, and <b>RAG-based chatbots</b> using <b>OpenAI</b> and <b>Pinecone</b>. I prioritize clean architecture, automation, and measurable performance improvement in every project I build.</p>

   
            <Skills/>
       </div>
    </div>
  )
}

export default AboutMe