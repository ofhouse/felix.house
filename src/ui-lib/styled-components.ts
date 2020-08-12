// Define the theme object globally in styled components
// Taken from: https://gist.github.com/chrislopresto/490ef5692621177ac71c424543702bbb

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ThemeT } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeT>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
