import React, { useRef } from 'react'
import './index.css'
import Item from './Item'
import { useToggle } from '../../toggleContext'


function Experience() {
  const bodyRef = useRef(null)
  const {toggledSection,setToggledSection} = useToggle();



  return (
    // <div className='experience-block' id="experience" >
    <div className={`experience`} id="experience" ref={bodyRef}>
        <div className='toggle'>
            <button className={toggledSection==="Work"?"toggleButtonOn work":"toggleButtonOff" } onClick={()=>setToggledSection("Work")}>Work</button>
            <button className={toggledSection==="Experience"?"toggleButtonOn education":"toggleButtonOff"} onClick={()=>setToggledSection("Experience")}>Education</button>
        </div>
            <div className="box" key={toggledSection}>
            <Item active={toggledSection}/>
            </div>
    </div>
  // </div>
  )
}

export default Experience