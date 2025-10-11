
const splitLogoArrayBy3 = ((logos,index) => {
    let start = 0
    let end = 0
    const logosLen = logos.length
    const LogoThird =  Math.floor(logosLen/3)
    if(index==="start"){
        start = 0
        end = start+LogoThird
    }
    else if(index === "middle"){
        start = LogoThird
        end = start+LogoThird
    }else if(index === "end"){
        start = logosLen-LogoThird
        end=start+LogoThird
    }
return logos.slice(start, end)
})
export default splitLogoArrayBy3