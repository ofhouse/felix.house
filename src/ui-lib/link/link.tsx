/**
 * Provides a standard link component which main propose is to map the `to` prop
 * to the `href` attribute
 */

import React from 'react';
import styled from '../styled-components';

interface LinkProps {
  to: string;
}

const StyledLink = styled('a')({});

export const Link: React.FC<LinkProps> = ({ children, to, ...props }) => (
  <StyledLink href={to} {...props}>
    {children}
  </StyledLink>
);
