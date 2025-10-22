import React from 'react'
import './index.css'
// import image from '../Assets/Images/headshot.png'
import bg from '../Assets/Images/homeBg.jpg'
import mouseBounce from '../Assets/Images/mouseAnimate.png'
import resume from '../Assets/Documents/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from "react"
import WhiteButton from '../WhiteButton'
import { SocialIcon } from 'react-social-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty'
// import {
//   FontAwesomeIcon
// } from '@fortawesome/react-fontawesome'
// import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
function Hero() {
    // const introArr = ["I","'","m"]
    const nameArr = ["S","a","a","d"," ","A","m","a","w","i"]
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']
    const [letterClass, setLetterClass] = useState('text-animate')
    const [letterClass2, setLetterClass2] = useState('text-animate-fly')
    const [arrowClass, setArrowClass] = useState('fade-arrow')

    useEffect(()=>{
        setTimeout(()=>{
        return (
                setLetterClass('text-animate-hover'),
                setLetterClass2('text-animate-fly'),
                setArrowClass('down-arrow')
                )
        },5000)

    },[])

  
 


  return (
    <div className='hero' id={"arrow"}>
      <div className="hero-bg">
        <img src={bg} alt="Background" />
        <img src={bg} alt="Background" className='reverse'/>
      </div>
  

        <div className='text'>
          <div className="Intro">
        <h1>
        <p className='color'>
        {/* <AnimatedLetters letterClass={letterClass2} strArray={introArr} idx={11} /> */}
        &nbsp;
        <AnimatedLetters letterClass={letterClass2} strArray={nameArr} idx={11} />
        </p>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
         <p className='underwords'>Java | Python | ReactJS | Node | Django | AWS | N8N</p>
        </h1>
        <div className='buttons'>
        {/* <WhiteButton toLink={"/Contact"} buttonText={"Contact Me"} cName={"filled"}/> */}
        <WhiteButton toLink={resume} buttonText={"Resume"} cName={"outline"} />
        {/* <a  rel="noreferrer" href={resume} target="_blank" /> */}
        </div>
        </div>
        <div className='socials'>
        <SocialIcon url='https://www.linkedin.com/in/saad-amawi/' bgColor='rgba(106, 1, 128, 1)' target='_blank' className='linkedin'/>
        <SocialIcon url='https://www.github.com/saadamawi' bgColor='rgba(29, 29, 29, 1)' target="_blank" className='git'/>
        <SocialIcon url='https://leetcode.com/u/TheSovereign2/'  bgColor='rgba(4, 28, 160, 1)' target="_blank" className='leetcode'/>

        </div>
        </div>
        <img src={mouseBounce} alt="Mouse Bounce" className={arrowClass} id="arrow"/>
        {/* <FontAwesomeIcon icon={faChevronDown} className={arrowClass}/> */}
 
    </div>
  )
}

export default Hero