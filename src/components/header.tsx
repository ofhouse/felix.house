import * as React from 'react';
import { styled } from 'linaria/react';

const Root = styled.div`
  padding: 50px;
  height: 94px;
`;

const Headline = styled.h2`
  margin: 0;
  font-size: 36px;
  font-family: var(--font-headline);
  font-weight: 500;
  color: var(--color-text-primary);
  letter-spacing: 0.08em;
`;

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Root>
      <Headline>{title}</Headline>
    </Root>
  );
};
