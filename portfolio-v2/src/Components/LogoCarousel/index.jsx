import React from 'react'
import './index.scss'
import logos from './LogosArray'
import splitLogoArrayBy3 from '../../utils'

function LogoCarousel({className, index}) {

    const thisLogo = splitLogoArrayBy3(logos,index)

  return (
    <div className='logo-carousel'>
        <div className='logos'>
            <div className={className}>
       
        {thisLogo.map((logo)=>{
            return logo
        })}
        {thisLogo.map((logo)=>{
            return logo
        })}
        {thisLogo.map((logo)=>{
            return logo
        })}
        {thisLogo.map((logo)=>{
            return logo
        })}
            </div>
        </div>
    </div>
  )
}

export default LogoCarousel