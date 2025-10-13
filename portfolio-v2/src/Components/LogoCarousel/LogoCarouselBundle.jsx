import React from 'react'
import LogoCarousel from './index';
import './index.scss'
function LogoCarouselBundle() {
  return (
    <div style={{width:"100%", overflow:"hidden", marginTop:"50px", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
      <h1 className='tech'>I know at least three of these</h1>
      <LogoCarousel index={"start"} className={"logo_items"}/>
      <LogoCarousel index={"middle"} className={"logo_items_reverse"}/>
      <LogoCarousel index={"end"} className={"logo_items"}/>
    </div>
  )
}

export default LogoCarouselBundle
