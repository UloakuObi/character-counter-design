import React from "react"
import lightTheme from "/assets/images/icon-moon.svg"
import darkTheme from "/assets/images/icon-sun.svg"
import { useThemeContext } from "../Context/ThemeContext"

export default function ThemeSwitcher() {

    const {theme, toggleTheme} = useThemeContext()
    const icon = theme === "light" ? lightTheme : darkTheme
    
    return (
        <button className="switcher" onClick={toggleTheme}>
            <img src={icon} alt=""/>
        </button>
    )
}