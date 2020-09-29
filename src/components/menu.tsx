import * as React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import Link from 'next/link';

import Logo from './assets/logo.svg';

const Root = styled.div`
  width: 348px;
  position: relative;
`;

const Fixed = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 50px;
  padding: 0;
  position: absolute;

  :hover {
    opacity: 0.9;
  }
`;

const AltText = styled.span`
  visibility: hidden;
`;

const MenuList = styled.ul`
  list-style: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0 0 0 50px;
`;

const menuItemStyle = css`
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const menuLinkStyle = css`
  font-size: 24px;
  font-family: var(--font-headline);
  font-weight: 500;
  color: var(--color-text-primary);
  text-decoration: none;
  letter-spacing: 0.045em;

  &:hover {
    text-decoration: underline;
  }
`;

interface MenuItemProps {
  to: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, title }) => {
  return (
    <li className={menuItemStyle}>
      <Link href={to}>
        <a title={title} className={menuLinkStyle}>
          {title}
        </a>
      </Link>
    </li>
  );
};

export const Menu: React.FC = () => {
  return (
    <Root>
      <Fixed>
        <Heading>
          <Link href="/">
            <a title="Home">
              <Logo />
              <AltText>Felix Haus</AltText>
            </a>
          </Link>
        </Heading>

        <MenuList>
          <MenuItem title="Projects" to="/" />
          <MenuItem title="About" to="/" />
        </MenuList>
      </Fixed>
    </Root>
  );
};
