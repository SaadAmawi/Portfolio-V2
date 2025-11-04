import './index.css'
import { useTheme } from '../../themeContext'
function WhiteButton({toLink,buttonText,cName,target}) {
  const {theme} = useTheme()
  return(
        <a href={toLink} target={target} className={`${cName} ${theme}`}>{buttonText}</a>
    )
}

export default WhiteButton