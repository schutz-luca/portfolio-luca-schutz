import { DefaultTheme } from 'styled-components';

export interface ThemeContextData {
    theme: DefaultTheme;
    setTheme: IStateSetter<DefaultTheme>;
}