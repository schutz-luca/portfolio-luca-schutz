import { BsRainbow } from "react-icons/bs"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { StyThemeButton } from "./styles";
import { useContext } from "react";
import { ThemeManagerContext } from "@/context/theme-manager";
import { themeColorful, themeDark, themeLight } from "@/styles/theme";

export const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeManagerContext);

    const changeTheme = () => {
        if (theme.id === 'dark')
            setTheme(themeLight)
        else if (theme.id === 'light')
            setTheme(themeColorful)
        else
            setTheme(themeDark)
    }

    return (
        <StyThemeButton onClick={changeTheme} className={theme.id}>
            {theme.id === 'dark' ?
                <MdLightMode />
                : theme.id === 'light' ?
                    <BsRainbow />
                    :
                    <MdDarkMode />
            }
        </StyThemeButton>
    )
}
