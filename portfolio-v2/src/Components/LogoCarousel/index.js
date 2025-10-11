import React from 'react'
import './index.scss'
import logos from './Logos'
function LogoCarousel({className}) {
  return (
    <div className='logo-carousel'>
        <div className='logos'>
            <div className={className}>
        {logos.map((logo)=>{
            return logo
        })}
        {logos.map((logo)=>{
            return logo
        })}
            </div>
        </div>
    </div>
  )
}

export default LogoCarousel