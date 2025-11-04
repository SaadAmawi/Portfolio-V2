import React from 'react'
import LogoCarousel from './index';
import './index.css'
function LogoCarouselBundle() {
  return (
    <div className="logo-container">
      <LogoCarousel index={"start"} className={"logo_items"}/>
      <LogoCarousel index={"middle"} className={"logo_items_reverse"}/>
      <LogoCarousel index={"end"} className={"logo_items"}/>
    </div>
  )
}

export default LogoCarouselBundle
