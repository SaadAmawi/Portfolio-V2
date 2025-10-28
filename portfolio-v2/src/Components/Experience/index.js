import React, { useRef, useEffect } from 'react'
import './index.scss'
import Item from './Item'
import { useToggle } from '../../toggleContext'
import { useTheme } from '../../themeContext'


function Experience() {
  const {theme} = useTheme()
  const bodyRef = useRef(null)
  const {toggledSection,setToggledSection} = useToggle();



  return (
    <div className='experience-block' id="experience" >
    <div className={`experience ${theme}`} ref={bodyRef}>
        <div className='toggle'>
            <button className={toggledSection==="Work"?"toggleButtonOn work":"toggleButtonOff" } onClick={()=>setToggledSection("Work")}>Work</button>
            <button className={toggledSection==="Experience"?"toggleButtonOn education":"toggleButtonOff"} onClick={()=>setToggledSection("Experience")}>Education</button>
        </div>
            <div className="box" key={toggledSection}>
            <Item active={toggledSection}/>
            </div>
    </div>
  </div>
  )
}

export default Experience