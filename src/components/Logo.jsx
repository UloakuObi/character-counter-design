import LogoDark from "/assets/images/logo-dark-theme.svg"
import LogoLight from "/assets/images/logo-light-theme.svg"
import { useThemeContext } from "../Context/ThemeContext"

export default function Logo() {

    const {theme} = useThemeContext()
    const logo = theme === "light" ? LogoLight : LogoDark
    
    return (
        <img src={logo} alt="App logo"/>
    )
}