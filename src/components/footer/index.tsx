import React from 'react';

import { Block } from '../../ui-lib/block';

export const Footer: React.FC = ({ children }) => (
  <Block as="nav" display="flex" flex="1">
    {children}
  </Block>
);
