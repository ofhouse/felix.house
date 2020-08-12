import React from 'react';
import styled from 'styled-components';
import {
  space,
  display,
  flexDirection,
  DisplayProps,
  FlexProps,
  FlexDirectionProps,
  flex,
  justifyItems,
  alignItems,
  JustifyItemsProps,
  AlignItemsProps,
} from 'styled-system';

interface InternalBlockProps
  extends DisplayProps,
    FlexProps,
    FlexDirectionProps,
    JustifyItemsProps,
    AlignItemsProps {}

export const Block = styled.div<InternalBlockProps>(
  {
    boxSizing: 'border-box',
  },
  // Layout
  space,
  display,
  flex,
  flexDirection,
  justifyItems,
  alignItems
);

export interface BlockPropsT extends React.ComponentProps<typeof Block> {}
