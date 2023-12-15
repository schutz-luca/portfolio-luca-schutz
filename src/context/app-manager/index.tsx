import { createContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { themeDark } from '@/src/styles/theme';
import { IParent } from '@/src/types/commons';
import { AppContextData } from './types';

export const AppManagerContext = createContext({} as AppContextData);

export const ThemeManagerProvider = ({ children }: IParent) => {
    const [theme, setTheme] = useState<DefaultTheme>(themeDark);
    const [disableScroll, setDisableScroll] = useState(false);

    const data = {
        theme,
        setTheme,
        disableScroll,
        setDisableScroll
    };

    return (
        <AppManagerContext.Provider value={data}>
            {children}
        </AppManagerContext.Provider>
    );
};