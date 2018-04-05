import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: '1.45rem';
`;

const Headline = {
  Link: styled(Link)`
    color: black;
    text-decoration: none;
  `,
};

const Header = () => (
  <Wrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Headline.Link to="/">Felix Haus</Headline.Link>
      </h1>
    </div>
  </Wrapper>
);

export default Header;
