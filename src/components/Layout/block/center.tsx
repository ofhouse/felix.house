import React from 'react';
import { Block } from '../../../ui-lib/block';

interface Props {}

export const Center: React.FC<Props> = ({ children }) => (
  <Block display="flex" alignItems="center" justifyItems="center">
    {children}
  </Block>
);
