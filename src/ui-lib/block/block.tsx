import React from 'react';
import styled from 'styled-components';
import {
  fontStyle,
  color,
  fontSize,
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
    minWidth: 0,
  },
  // Layout
  space,
  display,
  flex,
  flexDirection,
  justifyItems,
  alignItems,

  // Typographie
  color,
  fontStyle,
  fontSize
);

export interface BlockPropsT extends React.ComponentProps<typeof Block> {}
