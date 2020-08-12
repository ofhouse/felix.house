/**
 * Helper Components which lets you apply a style to the wrapped component
 */

import React from 'react';

import styled from '../styled-components';

const InternalApplyStyle: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <>
    {React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, { className })
    )}
  </>
);

export const ApplyStyle = styled(InternalApplyStyle)({});
