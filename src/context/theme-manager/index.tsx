import { createContext, useEffect, useState } from "react";
import { IParent } from "@/types/commons";
import { ThemeContextData } from "./types";
import { themeDark } from "@/styles/theme";
import { DefaultTheme } from "styled-components";

export const ThemeManagerContext = createContext({} as ThemeContextData);

export const ThemeManagerProvider = ({ children }: IParent) => {
    const [theme, setTheme] = useState<DefaultTheme>(themeDark);

    const themeContextData = {
        theme,
        setTheme
    }

    return (
        <ThemeManagerContext.Provider value={themeContextData}>
            {children}
        </ThemeManagerContext.Provider>
    )
}