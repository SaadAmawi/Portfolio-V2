// import React from 'react'
import './index.css'
import bg from '../Assets/Images/background.png'
// import bg2 from '../Assets/Images/bg012.png'
import mouseBounce from '../Assets/Images/mouseAnimate.png'
import resume from '../Assets/Documents/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState, useRef} from "react"
import WhiteButton from '../WhiteButton'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from '../../themeContext'
import BIRDS from 'vanta/src/vanta.birds'
import TRUNK from 'vanta/dist/vanta.trunk.min'
function Hero() {
    const {theme} = useTheme();
    const nameArr = ["S","a","a","d"," ","A","m","a","w","i"];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r'];
    const [letterClass, setLetterClass] = useState('text-animate');
    const [letterClass2, setLetterClass2] = useState('text-animate-fly');
    const [arrowClass, setArrowClass] = useState('fade-arrow');
    const isMac = /Mac/.test(navigator.userAgent)
    const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
        return (
                setLetterClass('text-animate-hover'),
                setLetterClass2('text-animate-fly'),
                setArrowClass('down-arrow')
                )
        },5000)

    },[])

useEffect(() => {
  if (!vantaRef.current) return  // 🧠 wait until ref exists

  if (vantaEffect) {
    vantaEffect.destroy()
    setVantaEffect(null)
  }

  const timeout = setTimeout(() => {
    if (!vantaRef.current) return // 🧠 check again just in case
if(!isMac){
    const effect = TRUNK({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: theme === 'dark' ? 0x8888ff : 0x7378dc,
      backgroundColor: theme === 'dark' ? 0x000000 : 0xffffff,
      spacing: 4.0,
      chaos: 4.5,
    })
    setVantaEffect(effect)
  }
  else{
      const effect = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: theme === 'dark' ? 0x8888ff : 0x7378dc,
        backgroundColor: theme === 'dark' ? 0x000000 : 0xffffff,
        spacing: 4.0,
        chaos: 4.5,})

        setVantaEffect(effect)
    }
  }, 150)

  return () => {
    clearTimeout(timeout)
    if (vantaEffect) vantaEffect.destroy()
  }
}, [theme])


 


  return (
    <div className={`hero ${theme}`} id={"arrow"}>
    
      <div className="hero-bg">
        { theme === "dark" ? 
        <img src={bg} alt="Background"  className='dark'/>
         : 
        <div id='clouds'ref={vantaRef} className='cloud' /> }
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