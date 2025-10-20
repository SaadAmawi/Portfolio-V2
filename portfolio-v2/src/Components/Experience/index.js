import React, { useState } from 'react'
import './index.scss'
import Item from './Item'
function Experience() {
    const [toggledSection, setToggledSection] = useState("Work")
    const handleClick = () =>{
        toggledSection==="Experience"?setToggledSection("Work"):setToggledSection("Experience")
    }
  return (
    <div className='experience-block'>
    <div className='experience'>
        <div className='toggle'>
            <button className={toggledSection==="Work"?"toggleButtonOn work":"toggleButtonOff"} onClick={handleClick}>Work</button>
            <button className={toggledSection==="Experience"?"toggleButtonOn education":"toggleButtonOff"} onClick={handleClick}>Education</button>
        </div>
            <div className='box'>
            <Item active={toggledSection}/>
            </div>
    </div>
  </div>
  )
}

export default Experience