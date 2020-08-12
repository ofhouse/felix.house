/**
 * Block extension with typographie properties
 */

import styled from 'styled-components';
import {
  color,
  fontStyle,
  fontSize,
  textAlign,
  ColorProps,
  TextAlignProps,
} from 'styled-system';

import { Block } from './block';

interface InternalTypeBlockProps extends ColorProps, TextAlignProps {}

export const TypeBlock = styled(Block)<InternalTypeBlockProps>(
  color,
  fontStyle,
  fontSize,
  textAlign
);

export interface TypeBlockT extends React.ComponentProps<typeof TypeBlock> {}
