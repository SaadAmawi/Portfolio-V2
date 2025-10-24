import React from 'react'
import './index.scss'
import logos from './LogosArray'
import splitLogoArrayBy3 from '../../utils'

function LogoCarousel({className, index}) {

    const thisLogo = splitLogoArrayBy3(logos,index)
    const repeatedLogos = [...thisLogo, ...thisLogo, ...thisLogo, ...thisLogo];

    return (
        <div className='logo-carousel'>
            <div className='logos'>
                <div className={className}>
                    {repeatedLogos.map((logo) => logo)}
                </div>
            </div>
        </div>
    );
}

export default LogoCarousel