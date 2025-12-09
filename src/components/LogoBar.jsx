import Logo from "./Logo"
import ThemeSwitcher from "./ThemeSwitcher"

export default function LogoBar() {
    return (
        <header className="flex justify-between mt-8">
            <Logo/>
            <ThemeSwitcher/>
        </header>
    )
}