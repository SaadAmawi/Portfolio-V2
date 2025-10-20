import React, { useState } from 'react'
import './index.scss'
function Experience() {
    const [toggledSection, setToggledSection] = useState("Work")
    const handleClick = () =>{
        toggledSection==="Experience"?setToggledSection("Work"):setToggledSection("Experience")
    }
  return (
    <div className='experience-block'>
    <div className='experience'>
        <div className='toggle'>
            <button className={toggledSection==="Work"?"toggleButtonOn":"toggleButtonOff"} onClick={handleClick}>Work</button>
            <button className={toggledSection==="Experience"?"toggleButtonOn":"toggleButtonOff"} onClick={handleClick}>Education</button>
        </div>
            <div className='box'>

            </div>
    </div>
  </div>
  )
}

export default Experience