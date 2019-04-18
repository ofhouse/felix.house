/**
 * Overrides concept taken from BaseWeb (https://baseweb.design/) and adapted for
 * use with typescript and styled components
 */

import { useMemo } from 'react';

export type OverrideObjectT<T> = {
  component?: React.ComponentType<T>;
  props?: {};
};

export type OverrideT<T = {}> = OverrideObjectT<T> | React.ComponentType<T>;

export function useOverrides(
  override: any,
  defaultComponent: React.ComponentType<any>
): [React.ComponentType<any>, {}] {
  const component = useMemo(() => getOverride(override) || defaultComponent, [
    override,
    defaultComponent,
  ]);
  const props = useMemo(() => getOverrideProps(override), [override]);

  return [component, props];
}

function getOverrideProps<T>(override?: OverrideT<T>) {
  if (override && typeof override === 'object') {
    return {
      ...override.props,
    };
  }
  return {};
}

function getOverride(override: any): any {
  // Check if override is OverrideObjectT
  if (override && typeof override === 'object') {
    return override.component;
  }
  // Otherwise it must be a component type (function or class) or null/undefined
  return override;
}
