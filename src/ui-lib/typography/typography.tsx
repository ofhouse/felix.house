import React from 'react';

import { Block } from '../block';
import { BlockPropsT } from '../block/block';

export const Display: React.FC<BlockPropsT> = props => <Block {...props} />;

export const Paragraph1: React.FC<BlockPropsT> = props => {
  const as = props.as || 'p';
  return <Block as={as} {...props} />;
};
