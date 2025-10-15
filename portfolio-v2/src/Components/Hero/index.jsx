import React from 'react'
import './index.css'
// import image from '../Assets/Images/headshot.png'
import bg from '../Assets/Images/homeBg.jpg'
import mouseBounce from '../Assets/Images/mouseAnimate.png'
import resume from '../Assets/Documents/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from "react"
import WhiteButton from '../WhiteButton'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
// import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
function Hero() {
    const introArr = ["H","e","l","l","o",","," ", "I"," ", "a"," m"]
    const nameArr = ["Saad"," ","Amawi",":"]
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']
    const [letterClass, setLetterClass] = useState('text-animate')
    const [letterClass2, setLetterClass2] = useState('text-animate-fly')
    const [arrowClass, setArrowClass] = useState('fade-arrow')
    useEffect(()=>{
        setTimeout(()=>{
        return (setLetterClass('text-animate-hover'),
                setLetterClass2('text-animate-hover'),
                setArrowClass('down-arrow'))
        },7000)
    },[])

  return (
    <div className='hero'>
      <div class="hero-bg">
        <img src={bg} alt="Background" />
        <img src={bg} alt="Background" className='reverse'/>
      </div>
  

        <div className='text'>
          <div className="Intro">
        <h1>
        <p className='color'>
        <AnimatedLetters letterClass={letterClass} strArray={introArr} idx={11} />
        &nbsp;
        <AnimatedLetters letterClass={letterClass2} strArray={nameArr} idx={22} />
        </p>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25} />
         <p className='underwords'>Java | Python | ReactJS | Node | Django | AWS | N8N</p>
        </h1>
        <div className='buttons'>
        <WhiteButton toLink={"/Contact"} buttonText={"Contact Me"} cName={"filled"}/>
        <WhiteButton toLink={resume} buttonText={"Resume"} cName={"outline"}/>
        {/* <a  rel="noreferrer" href={resume} target="_blank" /> */}
        </div>
        </div>
        </div>
        <img src={mouseBounce} alt="Mouse Bounce" className={arrowClass}/>
        {/* <FontAwesomeIcon icon={faChevronDown} className={arrowClass}/> */}
 
    </div>
  )
}

export default Hero