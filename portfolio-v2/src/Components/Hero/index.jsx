import React from 'react'
import './index.css'
import image from '../Assets/Images/me1.png'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useState} from "react"
function Hero() {
    const introArr = ["H","e","l","l","o"," ", "I"," ", "a"," m"]
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
        return setLetterClass('text-animate-hover')
        },5000)
    },[])

  return (
    <div className='hero'>
        <div className='text'>
        <h1>
        <AnimatedLetters letterClass={letterClass} strArray={introArr} idx={11} />
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
        </h1>
        </div>
        <div className='image-containter'>
        <img src={image}  className='image' alt="me"/>
    </div>
    </div>
  )
}

export default Hero