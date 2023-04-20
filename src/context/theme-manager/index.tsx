import { createContext, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { themeDark } from '@/styles/theme';
import { IParent } from '@/types/commons';
import { ThemeContextData } from './types';

export const ThemeManagerContext = createContext({} as ThemeContextData);

export const ThemeManagerProvider = ({ children }: IParent) => {
    const [theme, setTheme] = useState<DefaultTheme>(themeDark);

    const themeContextData = {
        theme,
        setTheme
    };

    return (
        <ThemeManagerContext.Provider value={themeContextData}>
            {children}
        </ThemeManagerContext.Provider>
    );
};