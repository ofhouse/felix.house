import * as React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';

import 'normalize.css';

import { Menu } from '../components/menu';

const themeDark = css`
  --color-bg-surface: #121212;
`;

const Root = styled.div`
  background-color: var(--color-bg-surface);

  /* work-sans-500 - latin */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    src: url('/assets/fonts/work-sans/work-sans-v8-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/assets/fonts/work-sans/work-sans-v8-latin-500.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/assets/fonts/work-sans/work-sans-v8-latin-500.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/assets/fonts/work-sans/work-sans-v8-latin-500.woff')
        format('woff'),
      /* Modern Browsers */
        url('/assets/fonts/work-sans/work-sans-v8-latin-500.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/assets/fonts/work-sans/work-sans-v8-latin-500.svg#WorkSans')
        format('svg'); /* Legacy iOS */
  }
  /* work-sans-600 - latin */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    src: url('/assets/fonts/work-sans/work-sans-v8-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
      url('/assets/fonts/work-sans/work-sans-v8-latin-600.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/assets/fonts/work-sans/work-sans-v8-latin-600.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('/assets/fonts/work-sans/work-sans-v8-latin-600.woff')
        format('woff'),
      /* Modern Browsers */
        url('/assets/fonts/work-sans/work-sans-v8-latin-600.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('/assets/fonts/work-sans/work-sans-v8-latin-600.svg#WorkSans')
        format('svg'); /* Legacy iOS */
  }

  display: flex;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <Root className={themeDark}>
      <Menu />

      {children}
    </Root>
  );
};
