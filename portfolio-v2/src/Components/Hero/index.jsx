// import React from 'react'
import './index.css'
import bg from '../Assets/Images/background.png'
// import bg2 from '../Assets/Images/bg012.png'
import mouseBounce from '../Assets/Images/mouseAnimate.png'
import resume from '../Assets/Documents/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from "react"
import WhiteButton from '../WhiteButton'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from '../../themeContext'
// import BIRDS from 'vanta/src/vanta.birds'
import TRUNK from 'vanta/src/vanta.trunk'
function Hero() {
    const {theme} = useTheme();
    const nameArr = ["S","a","a","d"," ","A","m","a","w","i"];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r'];
    const [letterClass, setLetterClass] = useState('text-animate');
    const [letterClass2, setLetterClass2] = useState('text-animate-fly');
    const [arrowClass, setArrowClass] = useState('fade-arrow');

    useEffect(()=>{
        setTimeout(()=>{
        return (
                setLetterClass('text-animate-hover'),
                setLetterClass2('text-animate-fly'),
                setArrowClass('down-arrow')
                )
        },5000)

    },[])

    useEffect(()=>{
      // setTimeout(()=>{
        // return (
        TRUNK({
          el:'#clouds',
          touchControls: true,
          mouseControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7378dc,
          backgroundColor: 0xfffffff,
          spacing: 4.0,
          chaos: 4.50
        })
        // BIRDS({
        //   el:'#clouds',
        //   touchControls: true,
        //   mouseControls: true,
        //   gyroControls: false,
        //   minHeight: 200.00,
        //   minWidth: 200.00,
        //   scale: 1.00,
        //   scaleMobile: 1.00,
        //   backgroundColor: 0xffffff,
        //   color1: 0xff,
        //   color2: 0xfa00ad,
        //   separation: 82.00,
        //   quantity: 4.00
        // })
    },[theme])
 


  return (
    <div className={`hero ${theme}`} id={"arrow"}>
    
      <div className="hero-bg">
        { theme === "dark" ? <img src={bg} alt="Background"  className='dark'/> : 
        <div id='clouds' className='cloud' ></div>  }
        {/* <img src={bg} alt="Background" className='reverse'/> */}
      </div>
      

        <div className={`text ${theme}`}>
          <div className="Intro">
        <h1>
        <p className={`color ${theme}`}>
        <AnimatedLetters letterClass={letterClass2} strArray={nameArr} idx={11} />
        </p>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
         <p className='underwords'>Java | Python | ReactJS | Node | Django | AWS | N8N</p>
        </h1>
        <div className='buttons'>
        <WhiteButton toLink={resume} buttonText={"Resume"} cName={"outline"} />
        </div>
        </div>
        <div className='socials'>
        <SocialIcon url='https://www.linkedin.com/in/saad-amawi/' bgColor='rgba(106, 1, 128, 1)' target='_blank' className='linkedin'/>
        <SocialIcon url='https://www.github.com/saadamawi' bgColor='rgba(29, 29, 29, 1)' target="_blank" className='git'/>
        <SocialIcon url='https://leetcode.com/u/TheSovereign2/'  bgColor='rgba(4, 28, 160, 1)' target="_blank" className='leetcode'/>

        </div>
        </div>
        <img src={mouseBounce} alt="Mouse Bounce" className={arrowClass} id="arrow"/> 
    </div>
  )
}

export default Hero