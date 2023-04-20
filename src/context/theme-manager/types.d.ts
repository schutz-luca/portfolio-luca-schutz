import { Dispatch, SetStateAction } from "react";
import { DefaultTheme } from "styled-components";

export interface ThemeContextData {
    theme: DefaultTheme;
    setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}