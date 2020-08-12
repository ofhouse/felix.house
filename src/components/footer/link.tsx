import React from 'react';
import { css } from 'styled-components';

import { useOverrides, OverrideT } from '../../ui-lib/helpers/overrides';
import { Link as DefaultLink } from '../../ui-lib/link';
import { ApplyStyle } from '../../ui-lib/helpers/apply-style';

const linkStyle = css(({ theme }) => ({
  color: theme.colors.primary,
  padding: '55px 0 56px',
  flex: 1,
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: 22,

  '&:hover': {
    backgroundColor: theme.colors.gray[100],
  },
}));

interface FooterLinkComponents {
  Link?: OverrideT;
}

interface FooterLinkProps {
  to: string;
  title: string;
  overrides?: FooterLinkComponents;
  external?: boolean;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  to,
  title,
  overrides = {},
  children,
  external,
}) => {
  const { Link: LinkOverride } = overrides;

  const [Link, linkProps] = useOverrides(LinkOverride, DefaultLink);

  const $linkProps = {
    ...(external ? { target: '_blank', rel: 'noopener' } : {}),
    ...linkProps,
  };

  return (
    <ApplyStyle css={linkStyle}>
      <Link title={title} to={to} {...$linkProps}>
        {children}
      </Link>
    </ApplyStyle>
  );
};
