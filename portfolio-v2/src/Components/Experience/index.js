// import React, { useState } from 'react'
import './index.scss'
import Item from './Item'
import { useToggle } from '../../Context/toggleContext'
function Experience() {
    const {toggledSection,setToggledSection} = useToggle();
  return (
    <div className='experience-block' id="experience">
    <div className='experience'>
        <div className='toggle'>
            <button className={toggledSection==="Work"?"toggleButtonOn work":"toggleButtonOff" } onClick={()=>setToggledSection("Work")}>Work</button>
            <button className={toggledSection==="Experience"?"toggleButtonOn education":"toggleButtonOff"} onClick={()=>setToggledSection("Experience")}>Education</button>
        </div>
            <div className='box'>
            <Item active={toggledSection}/>
            </div>
    </div>
  </div>
  )
}

export default Experience