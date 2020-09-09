declare module '*.svg' {
  import * as React from 'react';

  interface SvgrComponent extends React.FC<React.SVGAttributes<SVGElement>> {}

  const value: SvgrComponent;
  export default value;
}
