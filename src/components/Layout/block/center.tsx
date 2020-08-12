import React from 'react';

import { Block } from '../../../ui-lib/block';

export const Center: React.FC = ({ children }) => (
  <Block display="flex" alignItems="center" justifyItems="center" flex={1}>
    {children}
  </Block>
);
