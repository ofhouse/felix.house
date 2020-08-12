import React from 'react';
import { Link } from 'gatsby';

import styled from '../ui-lib/styled-components';
import { Display, Paragraph1 } from '../ui-lib/typography';
import { Stack } from '../ui-lib/block';
import { withBaseLayout } from '../components/layout/base';
import { Center } from '../components/layout/block/center';
import { Wordmark } from '../components/logo/wordmark';
import { FooterList } from '../components/footer/list';
import { Footer } from '../components/footer';
import { FooterLink } from '../components/footer/link';

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: '#FFFFFF',
}));

const IndexPage: React.FC = () => (
  <Stack flex={[1, 0]}>
    <Center>
      <Stack alignItems="center">
        <Wordmark />
        <Display as="h1">Felix Haus</Display>

        <Paragraph1 textAlign="center">
          I am a digital product designer working at <br />
          eoda. Previously I built the first digital <br />
          bank account switching service in Germany <br />
          with fino.
        </Paragraph1>
      </Stack>
    </Center>

    <Footer>
      <Stack
        flexDirection="row"
        flex={1}
        overrides={{
          Root: {
            component: FooterList,
          },
          Item: {
            props: {
              as: 'li',
            },
          },
        }}
      >
        <FooterLink
          to="https://twitter.com/ofhouse"
          title="Visit Felix profile on Twitter"
          external
        >
          Twitter
        </FooterLink>
        <FooterLink
          to="https://github.com/ofhouse"
          title="Visit Felix profile on GitHub"
          external
        >
          GitHub
        </FooterLink>
        <FooterLink
          to="https://linkedin.com/felixhaus"
          title="Visit Felix profile on LinkedIn"
          external
        >
          LinkedIn
        </FooterLink>
        <FooterLink
          to="https://xing.com/felixhaus"
          title="Visit Felix profile on Xing"
          external
        >
          Xing
        </FooterLink>
        <FooterLink
          to="/snaps"
          title="See snapshots"
          overrides={{
            Link: {
              component: StyledLink,
            },
          }}
        >
          Snapshots
        </FooterLink>
      </Stack>
    </Footer>
  </Stack>
);

export default withBaseLayout(IndexPage);
