import { useContext } from 'react';
import { BsRainbow } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { AppManagerContext } from '@/src/context/app-manager';
import { themeColorful, themeDark, themeLight } from '@/src/styles/theme';
import { StyThemeButton } from './styles';

export const ThemeButton = () => {
    const { theme, setTheme } = useContext(AppManagerContext);

    const changeTheme = () => {
        if (theme.id === 'dark')
            setTheme(themeLight);
        else if (theme.id === 'light')
            setTheme(themeColorful);
        else
            setTheme(themeDark);
    };

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
    );
};
