/**
 * Component inherited from Block which provides a stack view
 */

import React from 'react';
import { FlexDirectionProps, ResponsiveValue } from 'styled-system';
import * as CSS from 'csstype';

import { Block } from './block';
import { useOverrides, OverrideT } from '../helpers/overrides';

interface StackComponents {
  Root?: OverrideT;
  Item?: OverrideT;
}

interface StackProps extends FlexDirectionProps {
  flex?:
    | ResponsiveValue<CSS.FlexProperty<number>>
    | ResponsiveValue<CSS.FlexProperty<number>>[];
  alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  overrides?: StackComponents;
}

const RootComponent = Block;
const ItemComponent = Block;

const Stack: React.FC<StackProps> = ({
  children,
  flexDirection,
  flex,
  alignItems,
  overrides = {},
}) => {
  // Make column the default direction
  const $flexDirection = flexDirection === undefined ? 'column' : flexDirection;

  const { Root: RootOverride, Item: ItemOverride } = overrides;

  const [Root, rootProps] = useOverrides(RootOverride, RootComponent);
  const [Item, itemProps] = useOverrides(ItemOverride, ItemComponent);

  return (
    <Root
      display="flex"
      flex={1}
      flexDirection={$flexDirection}
      alignItems={alignItems}
      {...rootProps}
    >
      {React.Children.map(children, (child, index) => {
        let $flex: number | undefined;

        if (typeof flex === 'number') {
          $flex = flex;
        } else if (Array.isArray(flex) && typeof flex[index] === 'number') {
          $flex = flex[index] as number;
        }

        return (
          <Item flex={$flex} display="flex" {...itemProps}>
            {child}
          </Item>
        );
      })}
    </Root>
  );
};

export { Stack, RootComponent as Root, ItemComponent as Item };
