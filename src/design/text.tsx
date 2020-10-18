import * as React from 'react';
import { css } from 'linaria';

const textStyle = css`
position: relative;
`;

interface GradientHeadlineProps {
  component?: React.ElementType;
}

export const GradientHeadline: React.FC<GradientHeadlineProps> = ({
  component: Component = 'h1',
  children,
}) => {
  return <Component className={textStyle}>{children}</Component>;
};
