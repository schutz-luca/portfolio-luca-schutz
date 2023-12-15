import { IStateSetter } from '@/src/types/commons';
import { DefaultTheme } from 'styled-components';

export interface AppContextData {
    theme: DefaultTheme;
    setTheme: IStateSetter<DefaultTheme>;
    disableScroll: boolean;
    setDisableScroll: IStateSetter<boolean>;
}