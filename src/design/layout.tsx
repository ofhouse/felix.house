import * as React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';

import 'normalize.css';

import { Menu } from '../components/menu';

const themeDark = css`
  :global() {
    :root {
      --color-bg-surface: #0d0d0e;
      --color-text-primary: #e4e7ff;

      --font-headline: 'Work Sans', sans-serif;
    }

    body {
      background-color: var(--color-bg-surface);
    }
  }
`;

const Root = styled.div`
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

interface LayoutProps {
  header: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  return (
    <Root className={themeDark}>
      <Menu />

      <div>
        {header}
        {children}
      </div>
    </Root>
  );
};
