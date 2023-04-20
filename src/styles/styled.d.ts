import 'styled-components';
import { themeDark } from './theme';

type Theme = typeof themeDark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
