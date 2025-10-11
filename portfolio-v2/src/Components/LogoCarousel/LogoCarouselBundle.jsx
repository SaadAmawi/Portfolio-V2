import React from 'react'
import LogoCarousel from './index';

function LogoCarouselBundle() {
  return (
    <div style={{width:"100%", overflow:"hidden", marginTop:"50px"}}>
      <LogoCarousel index={"start"} className={"logo_items"}/>
      <LogoCarousel index={"middle"} className={"logo_items_reverse"}/>
      <LogoCarousel index={"end"} className={"logo_items"}/>
    </div>
  )
}

export default LogoCarouselBundle
