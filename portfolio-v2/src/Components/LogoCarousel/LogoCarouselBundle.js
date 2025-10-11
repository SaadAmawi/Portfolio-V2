import React from 'react'
import LogoCarousel from './index';

function LogoCarouselBundle() {
  return (
    <div style={{width:"100%", overflow:"hidden", marginTop:"50px"}}>
      <LogoCarousel className={"logo_items"}/>
      <LogoCarousel className={"logo_items_reverse"}/>
      <LogoCarousel className={"logo_items"}/>ß
    </div>
  )
}

export default LogoCarouselBundle
