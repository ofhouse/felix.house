import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: '1.45rem';
`;

const Headline = {
  Link: styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: normal;
  `,
};

const Header = () => (
  <Wrapper>
    <h1 style={{ margin: 0 }}>
      <Headline.Link to="/">Felix Haus</Headline.Link>
    </h1>
  </Wrapper>
);

export default Header;
