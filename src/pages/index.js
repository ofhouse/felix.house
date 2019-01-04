import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import List from '../components/List';

const Content = styled.p`
  font-size: 1.25rem;
  line-height: 145%;
  color: #c2c2c2;

  a {
    font-family: monospace;
    background-color: #1f1f1f;
    border-radius: 6px;
    font-size: 1.125rem;
    text-decoration: none;
    color: #c2c2c2;
    padding: 0.4rem;
    letter-spacing: 1px;

    &:hover,
    &:focus {
      background-color: white;
      color: black;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      Digital product designer. I work at{' '}
      <a href="https://eoda.de" rel="noopener" target="__blank">
        eoda
      </a>
      .<br />
      Previously I built the first digital account-switching service in Germany
      with{' '}
      <a href="https://fino.ai" rel="noopener" target="__blank">
        fino
      </a>
      .
    </Content>

    <List>
      <List.Item>
        <a href="https://github.com/ofhouse" rel="noopener" target="__blank">
          GitHub
        </a>
      </List.Item>
      <List.Item>
        <a href="https://twitter.com/ofhouse" rel="noopener" target="__blank">
          Twitter
        </a>
      </List.Item>
      <List.Item>
        <a
          href="https://www.xing.com/profile/Felix_Haus2"
          rel="noopener"
          target="__blank"
        >
          Xing
        </a>
      </List.Item>
      <List.Item>
        <a
          href="https://www.linkedin.com/in/felixhaus"
          rel="noopener"
          target="__blank"
        >
          LinkedIn
        </a>
      </List.Item>
    </List>
  </Layout>
);

export default IndexPage;
