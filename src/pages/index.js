import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
`;
const ListItem = styled.li`
  & a {
    text-decoration: underline;
    color: black;
  }
`;

const IndexPage = () => (
  <div>
    <List>
      <ListItem>
        <a href="https://twitter.com/ofhouse" rel="noopener">
          Twitter
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.xing.com/profile/Felix_Haus2" rel="noopener">
          Xing
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.linkedin.com/in/felixhaus" rel="noopener">
          LinkedIn
        </a>
      </ListItem>
    </List>
  </div>
);

export default IndexPage;
