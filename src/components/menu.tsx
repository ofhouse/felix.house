import * as React from 'react';
import { styled } from 'linaria/react';

import Logo from './assets/logo.svg';

const Root = styled.div`
  margin-right: 348px;
`;

const Fixed = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 348px;
  display: flex;
`;

const Heading = styled.h1`
  margin: 50px;
  position: absolute;
`;

const AltText = styled.span`
  visibility: hidden;
`;

const MenuList = styled.ul``;

interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = () => {
  return null;
};

export const Menu: React.FC = () => {
  return (
    <Root>
      <Fixed>
        <Heading>
          <Logo />
          <AltText>Felix Haus</AltText>
        </Heading>

        <MenuList>
          <MenuItem title="Projects" />
          <MenuItem title="About" />
        </MenuList>
      </Fixed>
    </Root>
  );
};
