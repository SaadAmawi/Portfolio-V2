import React from 'react'
import './index.css'
import image from '../Assets/Images/me1.png'
import bg from '../Assets/Images/homeBg.jpg'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from "react"
import WhiteButton from '../WhiteButton'
function Hero() {
    const introArr = ["H","e","l","l","o"," ", "I"," ", "a"," m"]
    const nameArr = ["Saad"," ","Amawi",","]
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']
    const [letterClass, setLetterClass] = useState('text-animate')
    const [letterClass2, setLetterClass2] = useState('text-animate-fly')

    useEffect(()=>{
        setTimeout(()=>{
        return (setLetterClass('text-animate-hover'),
                setLetterClass2('text-animate-hover'))
        },5000)
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
        <AnimatedLetters letterClass={letterClass} strArray={introArr} idx={11} />
        &nbsp;
        <AnimatedLetters letterClass={letterClass2} strArray={nameArr} idx={21} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
         <h2>Java | Python | ReactJS | Node | Django | AWS | N8N</h2>
        </h1>
        <div className='buttons'>
        <WhiteButton toLink={"/Contact"} buttonText={"Contact Me"} cName={"filled"}/>
        <WhiteButton toLink={"/Resume"} buttonText={"Resume"} cName={"outline"}/>
        </div>
        </div>
        </div>
        <div className='image-containter'>
        {/* <img src={image}  className='image' alt="me"/> */}
    </div>
    </div>
  )
}

export default Hero