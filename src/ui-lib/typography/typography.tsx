import React from 'react';

import { TypeBlock } from '../block';
import { TypeBlockT } from '../block/typography';

export const Display: React.FC<TypeBlockT> = props => <TypeBlock {...props} />;

export const Paragraph1: React.FC<TypeBlockT> = props => {
  const as = props.as || 'p';
  return <TypeBlock as={as} {...props} />;
};
