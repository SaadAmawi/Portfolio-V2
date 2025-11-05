import './index.css'
import bg from '../Assets/Images/background.png'
import mouseBounce from '../Assets/Images/mouseAnimate.png'
import resume from '../Assets/Documents/Resume.pdf'
import {useEffect,useState} from "react"
import WhiteButton from '../WhiteButton'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from '../../themeContext'
import TextPressure from '../TextPressure'
import Orb from '../Orb/Orb'
import GradientText from '../GradientText/GradientText'

function Hero() {
    const {theme} = useTheme();
    const [arrowClass, setArrowClass] = useState('fade-arrow');
    useEffect(()=>{
        setTimeout(()=>{
        return (
                setArrowClass('down-arrow')
                )
        },5000)

    },[])

  return (
    <div className={`hero ${theme}`} id={"arrow"}>
      <div className="hero-bg">
        { theme === "dark" ? 
        <img src={bg} alt="Background"  className='dark'/>
        : 
        <Orb
          hoverIntensity={0.0}
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
        />
      } 
      </div>
        <div className={`text ${theme}`}>
          <div className="Intro">
        <h1>
        <p className={`color ${theme}`}>
          <GradientText
          className='NameText'
          animationSpeed={3}
          showBorder={false}>Saad Amawi</GradientText>
   
    <TextPressure
    text="Software Engineer"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={false}
    italic={true}
    textColor={theme==="dark"?"#ffffff":"#031685ff"}
    strokeColor="#ff0000"
    minFontSize={36}
    className='underwords2'
  />
        </p>
 
        <br/>
         <p className='underwords'>Java | Python | ReactJS | Node | Django | AWS | N8N</p>
        </h1>
        <div className='buttons'>
        <WhiteButton target={"_blank"} toLink={resume} buttonText={"Resume"} cName={"outline"} />
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