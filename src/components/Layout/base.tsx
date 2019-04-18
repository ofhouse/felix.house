import React from 'react';
import { ThemeProvider } from 'styled-components';

// css property support in typescript is currently opt-in
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-446011384
// eslint-disable-next-line
import * as types from 'styled-components/cssprop';

import { theme } from '../../ui-lib/theme';

import 'normalize.css';
import './global.css';

export const withBaseLayout = (
  Component: React.ComponentType<any>
): React.FC => () => (
  <>
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  </>
);
