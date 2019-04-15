import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import List from '../List';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const ListItem = styled.li``;

const ListLink = styled(Link)`
  font-family: monospace;
  display: block;
  color: white;
  padding: 2.5rem;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <Wrapper>
    <List>
      <ListItem>
        <ListLink to="/snaps" title="short snapshots from my life">snapshots</ListLink>
      </ListItem>
    </List>
  </Wrapper>
);

export default Header;
