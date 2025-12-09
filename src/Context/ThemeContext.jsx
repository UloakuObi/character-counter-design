import React from "react"

const ThemeContext = React.createContext()

export default function ThemeProvider({children}) {
    const [theme, setTheme] = React.useState(() => (
        localStorage.getItem("theme") || "light" // Get set theme or default to "light"
    ))

    React.useEffect(() => {
        // Apply theme to the <html> element
        document.documentElement.setAttribute("data-theme", theme)

        // Store applied theme to local storage
        localStorage.setItem("theme", theme)
    }, [theme])

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => (React.useContext(ThemeContext))